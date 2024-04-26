import classNames from 'classnames'
import React from 'react'
import styles from './Typography.module.scss'

interface TypographyProps {
  type?: 'p' | 'h1' | 'h2'
  weight?: 'light' | 'medium' | 'bold'
  children: string
}

const cx = classNames.bind(styles)

const Typography = ({
  type = 'h1',
  weight = 'medium',
  children,
}: TypographyProps) => {
  const Component = type === 'h1' ? 'h1' : type === 'h2' ? 'h2' : 'p'
  
  return (
    <Component
      className={cx(styles.typography, styles[type], styles[weight])}
    >
      {children}
    </Component>
  )
}

export default Typography