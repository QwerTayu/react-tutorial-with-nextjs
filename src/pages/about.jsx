import { Inter } from 'next/font/google'
import Main from '@/src/components/main/Main'
import { useCounter } from '@/src/hooks/useCounter';
import { useInputArray } from '@/src/hooks/useInputArray';
import { useBgLightBlue } from '@/src/hooks/useBgLightBlue';

const inter = Inter({ subsets: ['latin'] })

export default function About({ count, isShow, handleClick, handleDisplay, text, inputAlert, array, handleChange, handleAdd }) {

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
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map(item => {
          return (
            <li key={item}>{item}</li>
          )
        })}
      </ul>
      <Main page="about" />
    </>
  )
}
