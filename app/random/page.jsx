"use client";
import { useState, useEffect } from "react";
// import SlideItem from "./components/SlideBarItem";
import { useSearchParams } from 'next/navigation'
import feList from "@/public/fe_interview.json"

// 1. 引入markdown-it库
import markdownIt from 'markdown-it'
import hljs from "highlight.js";
// import "highlight.js/styles/default.css"; // 或者选择其他样式，默认使用default.css
import 'highlight.js/styles/monokai-sublime.css'

// 2. 生成实例对象
const md = new markdownIt({
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(str, { language: lang }).value;
            } catch (_) { }
        }
        return ""; // 使用额外的默认转义
    },
});

function Random() {
    const [questionList, setQuestion] = useState({});
    const [currentQuestion, setCurrentQuestion] = useState({});

    const [htmlString, setHtmlString] = useState('')  // 存储解析后的html字符串
    const searchParams = useSearchParams()
    let _tagId = searchParams.get('tagId')
    // 3. 解析markdown语法
    const parse = (data) => setHtmlString(md.render(data));
    // 处理数据
    const handleData = () => {
        let infolist = [];
        const questionMap = {
            10: {
                tagId: 10,
                type: "JavaScript",
                list: []
            }, 11: {
                tagId: 11,
                type: "CSS",
                list: []
            }, 12: {
                tagId: 12,
                type: "HTML",
                list: []
            }, 13: {
                tagId: 13,
                type: "React",
                list: []
            }, 14: {
                tagId: 14,
                type: "Vue",
                list: []
            }, 18: {
                tagId: 18,
                type: "Node",
                list: []
            }, 19: {
                tagId: 19,
                type: "TypeScript",
                list: []
            }, 23: {
                tagId: 23,
                type: "小程序",
                list: []
            }
        }
        feList.map((item) => {
            if (questionMap[item.tagId]) {
                infolist.push(item)
            }
        })

        const currentDate = new Date();
        // 获取年份
        const year = currentDate.getFullYear();
        // 获取月份，注意 getMonth() 返回的是 0-11，需要加 1
        const month = currentDate.getMonth() + 1;
        // 获取日期
        const day = currentDate.getDate();
        // 输出结果
        const currentDay = `${year}-${month}-${day}`
        console.log(`当前日期：${currentDay}`, localStorage.getItem('today'));

        let hasSelectList = JSON.parse(localStorage.getItem('hasSelect_list')) || []
        if (localStorage.getItem('today') != currentDay) {
            localStorage.setItem('today', currentDay);
            let randomNumber = Math.floor(Math.random() * (infolist.length-1)); // 假设生成的随机数在 0-999 内
            while (hasSelectList.indexOf(randomNumber) != -1) { // 如果随机数已经出现过，继续生成新的随机数
                randomNumber = Math.floor(Math.random() * (infolist.length-1));
            }
            hasSelectList.push(randomNumber);
            localStorage.setItem('current_index', randomNumber);
            localStorage.setItem('hasSelect_list', JSON.stringify(hasSelectList));
        }
        setCurrentQuestion(()=>infolist[localStorage.getItem('current_index')])
    }
    useEffect(() => {
        handleData()
    }, []);

    useEffect(() => {
        parse(currentQuestion.explanation || '')
    }, [currentQuestion])

    return (
        <div className='flex h-[100vh]'>
            {currentQuestion && (
                <div className="w-full flex">
                    <div
                        className='w-full h-full flex flex-col items-center'
                    >
                        <div className="w-full bg-white static text-center py-2 drop-shadow-2xl">
                            {currentQuestion.title}
                        </div>
                        <div className="w-full flex pt-2 justify-center overflow-auto">
                            <div className="prose" dangerouslySetInnerHTML={{ __html: htmlString }} >
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Random