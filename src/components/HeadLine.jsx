import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export function HeadLine(props) {
  return (
    <>
      <p>
        Get started by editing&nbsp;
        { props.children }
      </p>
      
      <button onClick={props.onClick}></button>
    </>
  )
}
