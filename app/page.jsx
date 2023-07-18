"use client";
import { useState, useEffect } from "react";
import QuestionCard from "@/components/QuestionCard"
function Home() {
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch('/api/question').then((res)=>res.json()).then((res)=>{
      if(res){
        setData(res)
        console.log("data-=-=",res,data)

      }
    })
},[])
  return (
    <section className="w-full  gap-4 p-6 space-y-4
    columns-2">
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
    </section>
  )
}

export default Home