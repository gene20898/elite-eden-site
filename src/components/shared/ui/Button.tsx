'use client';

import React from 'react';

import {cn} from '@/lib/utils/cn';
import {type VariantProps, cva} from 'class-variance-authority';

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
export type ButtonNames = ButtonVariantProps['variant'];
export type ButtonSizes = ButtonVariantProps['size'];

const buttonVariants = cva(
  [
    'flex items-center justify-center gap-x-md text-center outline-none rounded-full uppercase',
  ],
  {
    variants: {
      variant: {
        primary: 'bg-mist text-charcoal',
      },
      size: {
        base: 'px-10 py-2.5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'base',
    },
  },
);

type ButtonProps = ButtonVariantProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    disabled?: boolean;
    isActive?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {className, disabled, onClick, variant, size, isActive} = props;

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({variant, size}), className)}
        data-active={isActive}
        disabled={disabled}
        onClick={onClick}
      >
        {props.children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
