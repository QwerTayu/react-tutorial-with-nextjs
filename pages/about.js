import { Inter } from 'next/font/google'
import { Header } from '@/components/header'
import Main from '@/components/main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <Main page="about" />
    </>
  )
}
