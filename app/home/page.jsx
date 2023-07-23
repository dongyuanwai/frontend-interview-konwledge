"use client"
import React from 'react'

function page() {
  const create=()=>{
    const question = {
      desc:"1212",
      category:"",
      options:"",
      explanation:"这是一个问题的答案",
      title:"这是题目",
      tag:"JavaScript",
    }
    fetch("http://localhost:3000/api/create",{
      method: "post",
    }).then((res) => res.json())
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