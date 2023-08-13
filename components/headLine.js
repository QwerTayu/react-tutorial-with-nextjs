import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export function HeadLine({ link }) {
  return (
    <>
      <p>
        Get started by editing&nbsp;
        <code className={styles.code}>{ link }</code>
      </p>
    </>
  )
}
