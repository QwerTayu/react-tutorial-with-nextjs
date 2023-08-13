import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/src/components/main/Main.module.css'
import { Menu } from '@/src/components/menu/Menu'
import { Links } from '@/src/components/links/Links'
import { HeadLine } from '@/src/components/HeadLine'

const inter = Inter({ subsets: ['latin'] })

export default function Main(props) {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <HeadLine
            page={props.page}
            onClick={() => alert("Clicked!")}
          >
            <code className={styles.code}>pages/{props.page}.js</code>
          </HeadLine>
        </div>

        <Menu />

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <Links />
      </main>
    </>
  )
}
