'use client'
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState('')
  const [expression, setExpression] = useState('')
  let last = '';
  let replace = '';
  let replace2 = '';

  function getlastChar(char: string) {
    return char[char.length - 1];
  }
  const handleButtonClick = (value: string) => {
    if (value === '=') {
      last = getlastChar(expression).toString();
      if(last === '-'){
          replace = expression.toString();
          replace2 = replace.slice(0, -1)
          try{
        const evalResult= eval(expression + replace2).toString();
        setResult(evalResult);
        setExpression('');
      } catch(error){
        setResult('SyntaxError');
      }
      } else if(last === '+'){
        replace = expression.toString();
        replace2 = replace.slice(0, -1)
        try{
      const evalResult= eval(expression + replace2).toString();
      setResult(evalResult);
      setExpression('');
    } catch(error){
      setResult('SyntaxError');
    }
    } else if(last === '*'){
      replace = expression.toString();
      replace2 = replace.slice(0, -1)
      try{
    const evalResult= eval(expression + replace2).toString();
    setResult(evalResult);
    setExpression('');
  } catch(error){
    setResult('SyntaxError');
  }
  } else if(last === '/'){
    replace = expression.toString();
    replace2 = replace.slice(0, -1)
    try{
  const evalResult= eval(expression + replace2).toString();
  setResult(evalResult);
  setExpression('');
} catch(error){
  setResult('SyntaxError');
}
} else{
  try{
const evalResult= eval(expression).toString();
setResult(evalResult);
setExpression('');
} catch(error){
setResult('SyntaxError');
}
}
  
      
    } else if (value === 'C') {
      setResult('');
      setExpression('');
    } else if(value === 'del'){
      last = getlastChar(expression).toString();
        replace = expression.toString();
        replace2 = replace.slice(0, -1)
        setExpression(replace2);
      } 
    else if(value === '/'){
      last = getlastChar(expression).toString();
      if(last === '/'){

      }else if(last === '*'){
        replace = expression.toString();
        replace2 = replace.slice(0, -1)
        setExpression(replace2 + value);
      }else if(last === '+'){
        replace = expression.toString();
        replace2 = replace.slice(0, -1)
        setExpression(replace2 + value);
      }else if(last === '-'){
        replace = expression.toString();
        replace2 = replace.slice(0, -1)
        setExpression(replace2 + value);
      }
      else{
        setExpression((prevExpression) => prevExpression + value);
      }
    
    } else if(value === '+'){
      last = getlastChar(expression).toString();
      if(last === '+'){

      }else if(last === '-'){
        replace = expression.toString();
        replace2 = replace.slice(0, -1)
        setExpression(replace2 + value);
      }else if(last === '*'){
        replace = expression.toString();
        replace2 = replace.slice(0, -1)
        setExpression(replace2 + value);
      }else if(last === '/'){
        replace = expression.toString();
        replace2 = replace.slice(0, -1)
        setExpression(replace2 + value);
      }
      else{
        setExpression((prevExpression) => prevExpression + value);
      }
    }
      else if(value === '-'){
      last = getlastChar(expression).toString();
      if(last === '-'){

      }else if(last === '+'){
        replace = expression.toString();
        replace2 = replace.slice(0, -1)
        setExpression(replace2 + value);
      } else if(last === '*'){
        replace = expression.toString();
        replace2 = replace.slice(0, -1)
        setExpression(replace2 + value);
      } else if(last === '/'){
        replace = expression.toString();
        replace2 = replace.slice(0, -1)
        setExpression(replace2 + value);
      }
      else{
        setExpression((prevExpression) => prevExpression + value);
      }
    }
    else if(value === '*'){
      last = getlastChar(expression).toString();
      if(last === '*'){

      }else if(last === '-'){
        replace = expression.toString();
        replace2 = replace.slice(0, -1)
        setExpression(replace2 + value);
      }else if(last === '/'){
        replace = expression.toString();
        replace2 = replace.slice(0, -1)
        setExpression(replace2 + value);
      }else if(last === '+'){
        replace = expression.toString();
        replace2 = replace.slice(0, -1)
        setExpression(replace2 + value);
      }
      else{
        setExpression((prevExpression) => prevExpression + value);
      }
    }
    else if(value === '.'){
      last = getlastChar(expression).toString();
      if(last === '.'){

      }else{
        setExpression((prevExpression) => prevExpression + value);
      }
    }
    else{
      setExpression((prevExpression) => prevExpression + value);
    }
    
  };

  const button = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+', 
    'C', 'del'
  ]
  return (
    <>
    <div className="container">
    <div className="image-container">
          <img src="logo.JPG" alt="Image" />
        </div>
        <div className="text-container">
    <h1 className="text-4xl font-bold mb10">Calculator</h1>
    <div className="bg p-6 rounded lg shadow-lg t">
      <input id="express" type="text" 
      className="w-full mb-2 text-3xl border-b-2 border-gray-400 focus:outline-none t" 
      value={expression}
      readOnly
      />
      <input type="text" 
      className="w-full text-4xl font-bold mb-4 focus-outline t"
      value={result}
      readOnly/>
      <div className="grid grid-cols-4 gap-2">
      {button.map((btn) => (
        <button
        key={btn}
        onClick={() => handleButtonClick(btn)} className="text-4xl bg hover:bg-gray-400 p-2 rounded-lg t">{btn}</button>
      ))}
      </div>
      

    </div>
    </div>
    </div>
    </>
  );
}
function and(arg0: boolean) {
  throw new Error("Function not implemented.");
}

