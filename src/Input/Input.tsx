import classNames from "classnames";
import { forwardRef, InputHTMLAttributes, useId } from "react";
import styles from './Input.module.scss'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    label?: string
    variant?: 'flat' | 'rounded' | 'pill'
    disabled?: boolean
    backgroundColor: string
    borderColor: string
    fontFamily: string
    name?: string
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(function Input (props, ref) {
const { 
    id,
    label,
    disabled,
    variant = 'flat',
    backgroundColor,
    borderColor,
    name,
    ...rest 
} = props

const uid = useId()
const inputUid = id ?? `input-${uid}`

const cx = classNames.bind(styles)

return (
    <div className={cx(styles.container)}>
    <div className={cx(styles.field, styles[variant])} style={{backgroundColor, borderColor}}>
        <input
            id={inputUid}
            disabled={disabled}
            {...rest}
            className={cx(styles.input)}
            name={name}
        />
        {Boolean(label) && (
            <label htmlFor={inputUid} className={styles.label}>{label}</label>
        )}
    </div>
    </div>
)
}
)