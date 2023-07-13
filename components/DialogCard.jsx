import React from 'react'

function DialogCard({data,closeDialog}) {
    console.log("data",data)
  return (
    <div className='fixed top-0 left-0 w-[100vw] h-[100vh]
    bg-black bg-opacity-50 z-10 flex justify-center items-center
     ' onClick={closeDialog}>
        <div className='w-[50%] h-[70%] px-4 bg-white border rounded-2xl'>
            {data.name}
        </div>
    </div>
  )
}

export default DialogCard