"use client";
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useSearchParams } from 'next/navigation'
const Nav = () => {
  const [slidItems, setSlidItems] = useState([
    {
      tagId: 1,
      type: "总览",
      icon: "all",
      href:"/",
      list: []
    },{
      tagId: 12,
      type: "HTML",
      icon: "HTML",
      href:"/category?tagId=12",
      list: []
    },{
      tagId: 11,
      type: "CSS",
      icon: "CSS",
      href:"/category?tagId=11",
      list: []
    },{
      tagId: 10,
      type: "JavaScript",
      icon: "JavaScript",
      href:"/category?tagId=10",
      list: []
    },{
      tagId: 14,
      type: "Vue",
      icon: "Vue",
      href:"/category?tagId=14",
      list: []
    },{
      tagId: 13,
      type: "React",
      icon: "React",
      href:"/category?tagId=13",
      list: []
    }, {
      tagId: 21,
      type: "每日随机",
      icon: "random",
      href:"/random?tagId=21",
      list: []
    }, 
  ])
  
  const pathname = usePathname()
  const tagId = useSearchParams().get('tagId');
  const [activeTabId, setactiveTabId] = useState()

  useEffect(()=>{
    console.log("tagId-=-=",tagId)
    if(tagId){
      setactiveTabId(tagId)
    }else{
      setactiveTabId(1)
    }
  },[])
  return (
    <div className='w-[16rem] h-full border-r-1  shadow-md px-4 flex flex-col pb-4'>
      <nav>
        {/* LOGO */}
        <div className='my-2 h-16 flex flex-col items-center justify-center'>
          <Image
            src={`/logo.png`}
            width={180}
            height={120}
            alt='img'
          ></Image>
        </div>
        {/* 导航 */}
        <div className='px-1 border '>
          {slidItems.map((item) => item.href&&(
            <Link href={item.href} key={item.tagId}>
              <div className={`block cursor-pointer rounded-lg
              hover:bg-pink-100 hover:text-purple-500
              ${activeTabId == item.tagId ? "bg-pink-100 text-purple-500" : ""}`}
                onClick={() => setactiveTabId(item.tagId)}
              >
                <div className='mb-2 w-full flex items-center gap-2 
                  rounded-r-lg p-2 ease-in-out before:transition-colors 
                  hover:no-underline'
                >
                  <Image
                    src={`/images/${item.icon}.svg`}
                    width={30}
                    height={30}
                    alt='img'
                  ></Image>
                  <div>{item.type}</div>
                </div>
              </div>
            </Link>

          ))}
        </div>
      </nav>
      <div className='border border-red-600 flex flex-col justify-end'>
        <div></div>
      </div>
    </div>
  )
}

export default Nav