/* eslint-disable @typescript-eslint/no-require-imports */
const t = require('@babel/core').types;
const template = require('@babel/core').template;

// Utility function to generate an attribute value with an optional prefix
const getValueWithProps = (value) =>
  `\${idPrefix ? \`\${idPrefix}_\` : ''}${value}`;

// Utility function to check if a value is a valid hex color code
const isHexValue = (possibleHexValue) => {
  return (
    possibleHexValue[0] === '#' &&
    !isNaN(parseInt(possibleHexValue.slice(1), 16))
  );
};

// Function to generate an attribute value for JSX elements
const getAttributeValue = (value) => {
  let id = '';
  let prefix = '';
  let suffix = '';

  if (value && !isHexValue(value) && value.charAt(0) === '#') {
    // Handling IDs starting with #
    id = value.slice(1);
    prefix = '#';
  } else if (value && value.match(/^url\(#/)) {
    // Handling URLs with ID reference (e.g., "url(#id)")
    id = value.slice(5, -1);
    prefix = 'url(#';
    suffix = ')';
  }

  if (id) {
    // Return an expression container for the modified value
    return t.jsxExpressionContainer(
      template.ast(`\`${prefix}${getValueWithProps(id)}${suffix}\``).expression,
    );
  }
};

// Function to generate the ID value for JSX elements
const getIdValue = (value) =>
  t.jsxExpressionContainer(
    template.ast(`\`${getValueWithProps(value)}\``).expression,
  );

// Main Babel plugin function
const plugin = (api) => ({
  visitor: {
    JSXAttribute(path) {
      const valuePath = path.get('value');
      const namePath = path.get('name');

      // Extracting attribute name and value
      const value = valuePath?.container?.value?.value;
      const name = namePath?.container?.name?.name;

      // Handling "id" attribute separately
      if (name === 'id') {
        valuePath.replaceWith(getIdValue(value));
      } else {
        // Handling other attributes (e.g., "fill", "stroke")
        const attr = getAttributeValue(value);
        if (attr) {
          valuePath.replaceWith(attr);
        }
      }
    },
  },
});

module.exports = plugin;
