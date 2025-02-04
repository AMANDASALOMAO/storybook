import classNames from 'classnames'
import React from 'react'
import styles from './Alert.module.scss'

interface AlertProps {
  variant?: 'info' | 'error' | 'success' | 'warning'
  children?: string
}

const Alert = ({ variant = 'info', children }: AlertProps) => {
  return <div className={classNames(styles.alert, styles[variant])}>{children}</div>
}

export default Alert
