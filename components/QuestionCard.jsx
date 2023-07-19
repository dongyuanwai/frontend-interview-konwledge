"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import CardItem from "./CardItem"
import DialogCard from './DialogCard'

function QuestionCard({questionList}) {
  const [showDialog,setShowDialog] = useState(false)
  const [currentQuestion,setCurrentQuestion] = useState({})

  const handClick = (item)=>{
    console.log("点击了item",item)
    setCurrentQuestion(item)
    setShowDialog(true)
  }
  const closeDialog = (e)=>{
    console.log(e,"eeee")
    setShowDialog(false)
  }

  return (
    <div className='w-full h-[45vh] rounded-lg border
     border-gray-300 bg-white/20 px-6 py-2 cursor-pointer 
     hover:shadow-2xl hover:bg-white/40 transition-all 
     duration-900'>
      <div className='w-full flex items-center gap-2 
        p-2 '>
          <div className="w-2 rounded-[50%] h-2 bg-green-500"></div>
        <Image
          src={`/images/icon_js.png`}
          width={30}
          height={30}
          alt="jslogo"
        ></Image >
        <div >js</div>
      </div>
      <div className='flex h-[42vh] py-4 flex-col flex-wrap gap-3'>
        {questionList&&questionList.map((item,index) => (
          <div className=" w-[40%] h-8 text-sm" 
            onClick={()=>handClick(item)}
            key={item.id}
          >
            <CardItem 
            index={index}
            item={item}
          />
          </div>
        ))}
      </div>
      {
        showDialog&&(
          <DialogCard
            data={currentQuestion}
            closeDialog={(e)=>closeDialog(e)}
          />
        )
      }
    </div>
  )
}

export default QuestionCard