import React from 'react'
import { useState } from 'react'
import './Series.css';
export default function Series() {
  const [num, setNum] = useState();
  const [sum, setSum] = useState(null);
  const [series, setSeries] = useState([]);
  const HandleNum = (e)=>{
    setNum(e.target.value);
    
  }
  const Check = ()=>{
    let temp = parseInt(num);
    let s=0;
    for(let i=1;i<=temp;i++){
        s+=Math.pow(i,2);
    }
    setSum(s);
  }
  const fibonnaci = (n)=>{
    const Series = [0, 1];
    for (let i = 2; i < n; i++) {
      Series[i] = Series[i - 1] + Series[i - 2];
    }
    return Series.slice(0, n + 1);

  }
  const Generate = () => {
    if (num > 0) {
      setSeries(fibonnaci(num));
    } 
  };

  return (
    <div className='series'>
        <h1><center>SET-2,4</center></h1>
        <h4>Enter  Number:- </h4>
        <input type='text' pattern="[0-9]" value={num} onChange={HandleNum}></input>
        <br></br>
        <button type='submit' onClick={Check}>Calculate</button>
        <br></br>
        <br></br>
        <button type='submit' onClick={Generate}>Fibonnaci</button>
        {sum!==null && (
            <p>
                {sum}
            </p>
        )}
        <br></br>
        <p>{series.join(', ')}</p>
    </div>
  )
}
