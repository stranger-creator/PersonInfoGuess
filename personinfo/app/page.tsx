"use client";
import { useState ,FormEvent} from "react";
import {useRouter} from 'next/navigation'
export default function Home() {
  const [inputVal,setInputVal]=useState("");
  const {push} = useRouter()
  const handlesubmit = (event: FormEvent) => {
    event.preventDefault(); 
    console.log(inputVal)
    push(`/prediction/${inputVal}`);

  }
  return (
    <div>
      <div>
        <h1>Enter your name</h1>
      </div>
      <form onSubmit={handlesubmit}>
         <input className="text-black" 
         type="text" placeholder='Type your name...'
         value={inputVal} 
         onChange={(e) => setInputVal(e.target.value)}/>
         <button type="submit">Predict Data</button>
      </form>
    </div>
  )
}
