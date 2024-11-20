'use client'
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState('')
  const [expression, setExpression] = useState('')

  const handleButtonClick = (value: string) => {
    if (value === '=') {
        const evalResult= eval(expression).toString();
        setResult(evalResult);
        setExpression(evalResult);
        //setResult('Error');
    } else if (value === 'C') {
      setResult('');
      setExpression('');
    }else{
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const button = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
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
      <input type="text" 
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
