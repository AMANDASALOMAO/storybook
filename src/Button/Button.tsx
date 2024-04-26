import classNames from 'classnames';
import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  type?: 'primary' | 'secundary'
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
  variant?: 'flat' | 'rounded' | 'pill'
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}
const cx = classNames.bind(styles)

export const Button = ({
  type = 'primary',
  size = 'medium',
  variant = 'rounded',
  backgroundColor,
  borderColor,
  color,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cx(styles.button, styles[size], styles[size], styles[type], styles[variant]) }
      style={{ backgroundColor, borderColor, color }}
      {...props}
    >
      {label}
    </button>
  );
};
