'use client'
import { Answer } from '@/components/Answer'
import { Container } from '@/components/Container'
import { getQuizQuestion } from '@/lib/quiz'
import { useEffect, useState } from 'react'
 

export default function QuizQuestion({ params }) {

  const [question, setQuestion] = useState();

  useEffect(() => {
    async function fetchData() {
      let data = await getQuizQuestion(params.id)
      let {question} = data
      setQuestion(question);
    }
    fetchData();
  }, [params.id]);
  return (
    <Container as='main' className='flex flex-col gap-5 py-5'>
      <h1 className='text-lg font-semibold'>{question?.title}</h1>
      <Answer answers={question?.answers} questionId={params.id}/>

    </Container>
  )
}
