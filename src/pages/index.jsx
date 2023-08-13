import { Inter } from 'next/font/google'
import Main from '@/src/components/main/Main'
import { useCallback, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })


// const handleClick = (e, foo) => {
//   e.preventDefault();
//   alert(foo);
// }
export default function Home() {

  const foo=1;

  const handleClick = useCallback((e) => {
    e.preventDefault();
    alert(foo);
  }, [])

  
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    console.log("mounted");
    return () => {
      document.body.style.backgroundColor = "";
      console.log("unmounted");
    };
  }, []);

  return (
    <>
      <a 
        href="/about"
        onClick={(e) => handleClick(e)}
        // onClick={(e) => {handleClick(e), foo}}
      >
        ボタン
      </a>
      <Main page="index" />
    </>
  )
}
