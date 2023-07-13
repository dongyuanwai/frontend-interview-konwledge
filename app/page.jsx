import QuestionCard from "@/components/QuestionCard"
function Home() {
  return (
    <section className="w-full  gap-6 p-6 space-y-6
    columns-2">
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
    </section>
  )
}

export default Home