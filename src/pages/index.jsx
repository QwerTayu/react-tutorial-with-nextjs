import { Inter } from 'next/font/google'
import Main from '@/src/components/main/Main'

const inter = Inter({ subsets: ['latin'] })


const handleClick = (e, foo) => {
  e.preventDefault();
  alert(foo);
}

export default function Home() {

  const foo=1;

  return (
    <>
      <a 
        href="/about"
        onClick={(e) => {
          handleClick(e, foo)
        }}
      >
        ボタン
      </a>
      <Main page="index" />
    </>
  )
}
