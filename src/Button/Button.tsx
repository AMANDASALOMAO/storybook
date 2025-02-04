import classNames from 'classnames';
import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  type?: 'primary' | 'secondary';
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
  variant?: 'flat' | 'rounded' | 'pill';
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({
  type = 'primary',
  size = 'medium',
  variant = 'rounded',
  backgroundColor,
  borderColor,
  color,
  label,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(styles.button, styles[size], styles[type], styles[variant])}
      style={{ backgroundColor, borderColor, color }}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};
