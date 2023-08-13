import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/src/components/menu/Menu.module.css'

const inter = Inter({ subsets: ['latin'] })

export function Menu() {
  return (
    <>
    <div className={styles.menubar}>
        <Link href="/">
        <p className={styles.anchor}>Index</p>
        </Link>
        <Link href="/about">
        <p className={styles.anchor}>About</p>
        </Link>
    </div>
    </>
  )
}
