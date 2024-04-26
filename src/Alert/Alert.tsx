import classNames from 'classnames'
import React from 'react'
import styles from './Alert.module.scss'

interface AlertProps {
  variant?: 'info' | 'error' | 'success' | 'warning'
  children?: string
}
const cx = classNames.bind(styles)

const Alert = ({
  variant = 'info',
  children
}: AlertProps) => {
  
  return (
   <div className={cx(styles.alert, styles[variant])}>{children}</div>
  )
}

export default Alert