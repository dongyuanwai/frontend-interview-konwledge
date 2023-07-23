"use client";
import { useState, useEffect } from "react";
import QuestionCard from "@/components/QuestionCard"

import feList from "@/public/fe_interview.json"

function Home() {
  const [questionList, setQuestionList] = useState([]);
  const [jsList, setJsList] = useState([]);
  const [vueList, setVueList] = useState([]);
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
    const httpItems = questionList.filter(item => item.tags === "HTTP");
    setJsList(jsItems);
    setVueList(vueItems);
    setHttpList(httpItems);
  }, [questionList]);
  return (
    <section className="w-full  gap-4 p-6 space-y-4
    columns-2">
      <QuestionCard questionList={jsList} />
      <QuestionCard questionList={vueList} />
      <QuestionCard questionList={httpList} />
      <QuestionCard />
    </section>
  )
}

export default Home