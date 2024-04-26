import classNames from 'classnames'
import React from 'react'
import styles from './Divider.module.scss'

interface DividerProps {
  type?: 'left' | 'right' | 'center'
  orientation?: 'horizontal' | 'vertical'
  children?: string
}
const cx = classNames.bind(styles)

const Divider = ({
  type = 'center',
  orientation = 'horizontal',
  children
}: DividerProps) => {
  
  return (
   <div className={cx(styles.divider, styles[type], styles[orientation])}><span>{children}</span></div>
  )
}

export default Divider