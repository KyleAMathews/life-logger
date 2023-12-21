import * as React from 'react'
import * as styles from './base-components.css'
import * as typography from './typography.css'

export const H1 = ({ children }) => <h1 className={styles.h1}>{children}</h1>
export const H2 = ({ children }) => <h2 className={styles.h2}>{children}</h2>
export const H3 = ({ children }) => <h3 className={styles.h3}>{children}</h3>
export const UL = ({ children }) => <ul className={styles.ul}>{children}</ul>
export const Text = ({ children }) => <p className={styles.p}>{children}</p>
