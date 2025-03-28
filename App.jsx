import React,{useState} from "react";

let intervalId=null
let milliseconds=0
let seconds=0
let minutes=0
export default function App(){
  const [time,setTime]=useState("00:00:000")
  const [now,setNow]=useState("Start")
  const [color,setColor]=useState("lightgreen")
  return(
    <>
    <div className="watch">
      <h2>{time}</h2>
      <button style={{backgroundColor:color}} onClick={()=>{
        if(color==="lightgreen"){
          setColor("red")
          setNow("Stop")
           intervalId=setInterval(() => {
            milliseconds=(milliseconds+100)
            seconds=(milliseconds%1000===0 && milliseconds!==0)?seconds+1:seconds
            minutes=(seconds%60===0 && seconds!==0)?minutes+1:minutes
            seconds%=60
            milliseconds%=1000
            setTime(`${(minutes)>9?minutes:"0"+minutes}:${(seconds)>9?seconds:"0"+seconds}:${(milliseconds)>9?(milliseconds>99?milliseconds:"0"+milliseconds):"00"+milliseconds}`)
          },100);
      }
        if(color==="red"){
          setColor("lightgreen")
          setNow("Start")
          clearInterval(intervalId)
        }
      }}>{now}</button><button style={{backgroundColor:"orange"}} onClick={()=>{
        setColor("lightgreen")
        setNow("Start")
        setTime("00:00:000")
      }}>Reset</button>
      </div>
    </>
  )
}