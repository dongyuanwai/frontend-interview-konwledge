"use client";
import { useState } from 'react'
import Image from 'next/image'

const SlideItem = ({currentQuestionList,setCurrentQuestion}) => {
  
  const [activeTabId, setactiveTabId] = useState()
  const handleClick = (item)=>{
    setCurrentQuestion(item)
    setactiveTabId(item._id)
  }
  return (
    <div className='w-[16rem] h-full border-r-1 show shadow-md px-1 overflow-auto'>
        {/* LOGO */}
        <div className='mx-6 flex
          flex-col items-center justify-center'>
          Fr-In-Kn
        </div>
        {/* 导航 */}
        <div className=''>
          {currentQuestionList?.list?.map((item,index) => (
              <div className={`block cursor-pointer rounded-lg mb-1 break-all
              hover:bg-pink-100 hover:text-purple-500
              ${activeTabId === item._id ? "bg-pink-100 text-purple-500" : ""}`}
                key={item._id}
                onClick={() => handleClick(item)}
              >
                <div className='w-full flex items-center gap-2 
                  rounded-r-lg p-2 hover:no-underline'
                >
                  {`${index+1}、${item.title}`}
                </div>
              </div>

          ))}
        </div>
    </div>
  )
}

export default SlideItem