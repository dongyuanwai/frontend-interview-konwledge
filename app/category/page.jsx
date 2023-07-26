"use client";
import { useState, useEffect } from "react";
import SlideItem from "./components/SlideBarItem";
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

function Category() {
    const [questionList, setQuestionList] = useState({});
    const [currentQuestionList, setCurrentQuestionList] = useState({});
    const [currentQuestion, setCurrentQuestion] = useState({});

    const [htmlString, setHtmlString] = useState('')  // 存储解析后的html字符串
    const searchParams = useSearchParams()
    let _tagId = searchParams.get('tagId')

    // 3. 解析markdown语法
    const parse = (data) => setHtmlString(md.render(data));

    // 处理数据
    const handleData = () => {
        const info = new Set();
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
            }, 17: {
                tagId: 17,
                type: "趣味题",
                list: []
            }, 18: {
                tagId: 18,
                type: "Node",
                list: []
            }, 19: {
                tagId: 19,
                type: "TypeScript",
                list: []
            }, 20: {
                tagId: 20,
                type: "性能优化",
                list: []
            }, 21: {
                tagId: 21,
                type: "前端安全",
                list: []
            }, 32: {
                tagId: 32,
                type: "选择题",
                list: []
            }, 26: {
                tagId: 26,
                type: "编程题",
                list: []
            }, 31: {
                tagId: 31,
                type: "leetcode",
                list: []
            }, 30: {
                tagId: 30,
                type: "计算机基础",
                list: []
            }, 27: {
                tagId: 27,
                type: "设计模式",
                list: []
            }, 23: {
                tagId: 23,
                type: "小程序",
                list: []
            }, 28: {
                tagId: 28,
                type: "工程化",
                list: []
            }, 29: {
                tagId: 29,
                type: "工具",
                list: []
            }, 100: {
                tagId: 100,
                type: "其他",
                list: []
            },
        }
        feList.map((item) => {
            info.add(item.tagId);
            if (questionMap[item.tagId]) {
                questionMap[item.tagId].list.push(item)
            } else {
                questionMap[100].list.push(item)
            }
        })
        setQuestionList(() => questionMap)
    }
    useEffect(() => {
        handleData()
    }, []);
    useEffect(() => {
        setCurrentQuestionList(() => questionList[_tagId])
    }, [questionList, _tagId]);


    useEffect(() => {
        parse(currentQuestion.explanation || '')
    }, [currentQuestion])

    return (
        <div className='flex h-[100vh]'>
            {currentQuestionList && (
                <div className="w-full flex">
                    <SlideItem
                        currentQuestionList={currentQuestionList}
                        setCurrentQuestion={setCurrentQuestion}
                    />
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

export default Category