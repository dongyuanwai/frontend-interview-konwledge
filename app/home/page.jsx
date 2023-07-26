"use client"
import React from 'react'

function page() {
  const create=()=>{
    const question = {
      id:100,
      desc:"1212",
      category:"",
      options:"",
      explanation:"这是一个问题的答案",
      title:"这是题目",
      tag:"JavaScript",
    }
    fetch("/api/create",{
      method: "post",
    }).then((res) => {
      console.log("res",res)
    })
      .catch((error) => {
        console.error(JSON.stringify(question));
        console.error(error);
      });
  }
  return (
    <div>
      <button onClick={create}>create</button>
    </div>
  )
}

export default page