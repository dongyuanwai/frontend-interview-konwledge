import React from 'react'

function DialogCard({data,closeDialog}) {
    console.log("data",data)
    const handleDialogClick = (e) => {
      // 判断点击的元素是否为卡片内容
      if (e.target.classList.contains('dialog-close')) {
        closeDialog(); // 关闭弹框
      }
    };
  return (
    <div className='fixed top-0 left-0 w-[100vw] h-[100vh]
    bg-black bg-opacity-50 z-10 flex justify-center items-center
      dialog-close
     ' onClick={handleDialogClick}>
        <div className='w-[50%] h-[70%] px-4 bg-white border rounded-2xl flex flex-col'>
            <div className='w-full py-1 text-center font-bold border-b-[1px] border-pink-400'>
              {data.title}
            </div>
            <div className='w-full mt-1 border border-red-500 flex-grow '>
              {data.explanation}
            </div>
        </div>
    </div>
  )
}

export default DialogCard