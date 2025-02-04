import classNames from "classnames";
import { forwardRef, InputHTMLAttributes, useId } from "react";
import styles from "./Checkbox.module.scss";

export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
  variant?: "flat" | "rounded" | "pill" | "default";
  disabled?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  name?: string;
  checked?: boolean;
  checkboxSize?: "small" | "medium" | "large";
  labelPosition?: "left" | "right";
}

export const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
  function Checkbox(props, ref) {
    const {
      id,
      label,
      disabled,
      variant = "default",
      backgroundColor,
      borderColor,
      name,
      checked,
      checkboxSize = "medium",
      labelPosition = "right",
      ...rest
    } = props;

    const uid = useId();
    const CheckboxUid = id ?? `Checkbox-${uid}`;

    const cx = classNames.bind(styles);

    return (
      <div
        className={cx(styles.container, styles[variant], {
          [styles.left]: labelPosition === "left",
        })}
        style={{ backgroundColor, borderColor }}
      >
        <input
          id={CheckboxUid}
          ref={ref}
          disabled={disabled}
          className={styles.input}
          name={name}
          type="checkbox"
          checked={checked}
          {...rest}
        />
        <label
          className={cx(styles.checkbox, styles[checkboxSize], {
            [styles.checked]: checked,
            [styles.disabled]: disabled,
          })}
          htmlFor={CheckboxUid}
        >
          {checked && <span className={styles.checkmark}>✔</span>}
        </label>
        {label && (
          <label
            htmlFor={CheckboxUid}
            className={cx(styles.label, { [styles.disabled]: disabled })}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);
