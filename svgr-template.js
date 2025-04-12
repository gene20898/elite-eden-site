// svgr-template.js
const template = (variables, {tpl}) => {
  return tpl`
  import { IconProps } from '@/icons/type';

  export default function ${
    variables.componentName.startsWith('Svg')
      ? variables.componentName.slice(3)
      : variables.componentName
  }(props: IconProps) {
    const { className, color, size, 'data-id-prefix':idPrefix } = props;
    return ${variables.jsx};
  }
  `;
};

module.exports = template;
