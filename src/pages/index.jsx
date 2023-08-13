import { Inter } from 'next/font/google'
import Main from '@/src/components/main/Main'
import { useCallback, useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [count, setCount] = useState(1);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);

  
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
