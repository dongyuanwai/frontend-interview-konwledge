# 前端知识图谱
短小、精悍、直击要害

学习、面试必备之良器


markdown-it
```js
import React, { useState,useEffect } from 'react'
// 1. 引入markdown-it库
import markdownIt from 'markdown-it'

// 2. 生成实例对象
const md = new markdownIt()
// 3. 解析markdown语法
    const parse = (text: string) => setHtmlString(md.render(text));
    useEffect(()=>{
        parse()
    },[])


 <div 
    className="show" 
    dangerouslySetInnerHTML={{ __html: htmlString }} // 将html字符串解析成真正的html标签
/>

```