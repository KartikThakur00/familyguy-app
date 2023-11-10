
export async function getQuizQuestion(id) {
    const data = await fetch(`/api/quiz/${id}`)

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}

export async function getRandomQuizQuestion() {
  const data =await fetch(`/api/quiz/random`).then(res=>res.json())
  const random =Math.floor(Math.random()* data.randomQuestionList.length)
  const question= data.randomQuestionList[random]
  if(!data){
    throw new Error('Failed to fetch data')
  }
  return question
}
