import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/src/components/main/Main.module.css'
import { Menu } from '@/src/components/menu/Menu'
import { Links } from '@/src/components/links/Links'
import { HeadLine } from '@/src/components/HeadLine'
import { useCallback, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const ITEMS = [
  { 
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Docs",
    description: "Find in-depth information about Next.js features and&nbsp;API."
  },
  { 
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Learn",
    description: "Learn about Next.js in an interactive course with&nbsp;quizzes!"
  },
  { 
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Templates",
    description: "Discover and deploy boilerplate example Next.js&nbsp;projects."
  },
  { 
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy",
    description: "Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel."
  },
]

export default function Main(props) {

  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems(prevItems => {
      return prevItems.slice(0, prevItems.length-1);
    })
  }, []);

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

        <Links items={items} handleReduce={handleReduce}/>
      </main>
    </>
  )
}
