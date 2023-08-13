import { Inter } from 'next/font/google'
import Main from '@/src/components/main/Main'
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })


// const handleClick = (e, foo) => {
//   e.preventDefault();
//   alert(foo);
// }
export default function Home() {

  const [count, setCount] = useState(1);

  const handleClick = (e) => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button 
        onClick={(e) => handleClick(e)}
        // onClick={(e) => {handleClick(e), foo}}
      >
        ボタン
      </button>
      <Main page="index" />
    </>
  )
}
