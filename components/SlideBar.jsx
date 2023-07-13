"use client";
import {useState} from 'react'
import Image from 'next/image'
const Nav = () => {
  const [slidItems,setSlidItems] = useState([{
    id:"0",
    name:'JS',
    icon:"js",
  },{
    id:"1",
    name:'Vue',
    icon:"vue",
  },{
    id:"2",
    name:'React',
    icon:"react",
  }])
  const [activeTabId,setactiveTabId] = useState(slidItems[0].id)
  return (
    <div className='w-[16rem] h-full border-r-1  shadow-md px-4'>
      <nav>
        {/* LOGO */}
        <div className='mx-6 h-16 flex
          flex-col items-center justify-center'>
          Fr-In-Kn
        </div>
        {/* 导航 */}
        <div className='px-1'>
            {slidItems.map((item)=>(
              <div className={`block cursor-pointer rounded-lg
              hover:bg-pink-100 hover:text-purple-500
              ${activeTabId === item.id ? "bg-pink-100 text-purple-500" : ""}`}
              key={item.name}
              onClick={()=>setactiveTabId(item.id)}
              >
                  <div className='mb-2 w-full flex items-center gap-2 
                  rounded-r-lg p-2 ease-in-out before:transition-colors 
                  hover:no-underline'
                  >
                    <Image
                      src={`/images/icon_${item.icon}.png`}
                      width={30}
                      height={30}
                      alt='img'
                    ></Image>
                    <div>{item.name}</div>
                  </div>
              </div>
            ))}
        </div>
      </nav>
    </div>
  )
}

export default Nav