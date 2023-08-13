const { useState, useCallback } = require("react");

export const useInputArray = () => {
    const [text, setText] = useState("");
    const [inputAlert, setInputAlert] = useState("");
    const [array, setArray] = useState([]);
  
    const handleChange = useCallback((e) => {
      if(e.target.value.length > 5){
        setInputAlert("5文字以内にしてね");
        return;
      };
      setInputAlert("");
      setText(e.target.value.trim());
    }, []);
  
    const handleAdd = useCallback(() => {
      setArray((prevArray) => {
        if (prevArray.some(item => item === text)) {
          alert("exiting same items");
          return prevArray;
        }
        return [...prevArray, text];
      });
    }, [text]);
  
    return { text, inputAlert, array, handleChange, handleAdd };
}