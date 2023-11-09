
export async function getQuizQuestion(id) {
    const data = await fetch(`/api/quiz/${id}`)

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}


const { signal } = new AbortController()
export async function getRandomQuizQuestion() {
    const data =await fetch(`/api/quiz/random`,{ signal })
  if(!data.ok){
    throw new Error('Failed to fetch data')
  }
  return data.json()
}
