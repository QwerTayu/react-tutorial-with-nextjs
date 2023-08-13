import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export function HeadLine(props) {
  return (
    <>
      <p>
        Get started by editing&nbsp;
        { props.code }
      </p>
      
      <button onClick={props.onClick}></button>
    </>
  )
}
