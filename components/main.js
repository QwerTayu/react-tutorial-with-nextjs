import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Header } from '@/components/header'
import { Links } from '@/components/links'
import { HeadLine } from '@/components/headLine'

const inter = Inter({ subsets: ['latin'] })

export default function Main(props) {
  return (
    <>
      <Header />
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <HeadLine
            page={props.page}
            onClick={() => alert("Clicked!")}
          >
            <code className={styles.code}>pages/{props.page}.js</code>
          </HeadLine>
        </div>

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
