import { useState,useEffect } from 'react'
// 1. 引入markdown-it库
import markdownIt from 'markdown-it'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css'
// 2. 生成实例对象
const md = new markdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (_) {}
    }
    return ""; // 使用额外的默认转义
  },
});

function DialogCard({data,closeDialog}) {
    const [htmlString, setHtmlString] = useState('')  // 存储解析后的html字符串

    // 3. 解析markdown语法
    const parse = (data) => setHtmlString(md.render(data.explanation));
    useEffect(()=>{
        parse(data)
    },[])

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
        <div className=' w-[50%] h-[70%] px-2 bg-white border rounded-2xl flex flex-col pb-4'>
            <div className='w-full py-1 text-center font-bold border-b-[1px] border-pink-400'>
              {data.title}
            </div>
            <div className='show w-full mt-1 flex-grow overflow-auto '>
              <div 
                  className='prose w-full'
                  dangerouslySetInnerHTML={{ __html: htmlString }} // 将html字符串解析成真正的html标签
              />
            </div>
        </div>
    </div>
  )
}

export default DialogCard