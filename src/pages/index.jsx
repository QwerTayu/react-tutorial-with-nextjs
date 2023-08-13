import { Inter } from 'next/font/google'
import Main from '@/src/components/main/Main'
import { useCallback, useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [inputAlert, setInputAlert] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);
  
  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow);
  }, []);

  const handleChange = useCallback((e) => {
    if(e.target.value.length > 5){
      setInputAlert("5文字以内にしてね");
      return;
    };
    setInputAlert("");
    setText(e.target.value.trim());
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  console.log(text);

  return (
    <>
      {isShow ? <h1>{count}</h1> : null}
      <button 
        onClick={(e) => handleClick(e)}
        // onClick={(e) => {handleClick(e), foo}}
      >
        ボタン
      </button>
      <button onClick={handleDisplay}>
        {isShow ? "非表示" : "表示"}
      </button>
      <input 
        type="text"
        value={text}
        onChange={handleChange}
      />
      <p>{inputAlert}</p>
      <Main page="index" />
    </>
  )
}
