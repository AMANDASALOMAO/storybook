import classNames from "classnames";
import { forwardRef, InputHTMLAttributes, useId } from "react";
import styles from './Checkbox.module.scss'

export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    id?: string
    label?: string
    variant?: 'flat' | 'rounded' | 'pill' | 'default'
    disabled?: boolean
    backgroundColor?: string
    borderColor?: string
    fontFamily?: string
    name?: string
    checked?: boolean
    checkboxSize?: 'small' | 'medium' | 'large'
    labelPosition?: 'left' | 'right'
}

export const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(function Checkbox (props, ref) {
const { 
    id,
    label,
    disabled,
    variant = 'default',
    backgroundColor,
    borderColor,
    name,
    checked,
    checkboxSize,
    labelPosition,
    ...rest 
} = props

const uid = useId()
const CheckboxUid = id ?? `Checkbox-${uid}`

const cx = classNames.bind(styles)

return (
    <div className={cx(styles.container, styles[variant])} style={{backgroundColor, borderColor}}>
        <input
            id={CheckboxUid}
            disabled={disabled}
            className={cx(styles.input)}
            name={name}
            type='checkbox'
            {...rest}
        />
        <label className={cx(styles.checkbox, checkboxSize, labelPosition, {checked, disabled})}
        htmlFor={CheckboxUid}>
            {checked && <img src="check.svg" alt={'checked'} className={styles.icon}/> }
        </label>
        {label && (
            <label htmlFor={CheckboxUid} className={cx(styles.label, {disabled})}>{label}</label>
        )}
    </div>
)
}
)