"use client";
import { usePathname } from 'next/navigation'
import { useState, useEffect } from "react";
import QuestionCard from "@/components/QuestionCard"


function Home() {
  const [questionList, setQuestionList] = useState([]);
  const [jsList, setJsList] = useState([]);
  const [vueList, setVueList] = useState([]);
  const [reactList, setReactList] = useState([]);
  const [httpList, setHttpList] = useState([]);
  const getQuestionList = () => {
    fetch('/api/question')
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          setQuestionList(res.sort((a, b) => a.id - b.id));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getQuestionList();
  }, []);

  useEffect(() => {
    const jsItems = questionList.filter(item => item.tags === "JavaScript");
    const vueItems = questionList.filter(item => item.tags === "Vue");
    const reactItems = questionList.filter(item => item.tags === "React");
    const httpItems = questionList.filter(item => item.tags === "HTTP");
    setJsList(jsItems);
    setVueList(vueItems);
    setReactList(reactItems);
    setHttpList(httpItems);
  }, [questionList]);
  return (
    <div className="w-full h-full  overflow-auto">
      <section className=" gap-4 p-6 space-y-4
    md:columns-2">
        <QuestionCard questionList={jsList} type="JavaScript" />
        <QuestionCard questionList={vueList} type="Vue" />
        <QuestionCard questionList={httpList} type="HTTP" />
        <QuestionCard questionList={reactList} type="React" />
      </section>
    </div>
  )
}

export default Home