import questions from '@/data/quiz.json'
import { NextResponse } from 'next/server'

export async function GET() {
  try{
    return NextResponse.json({
      randomQuestionList: questions.data.map(d=>d.id)
    })
  }catch(error){
    return NextResponse('Internal Server Error',{status: 500})
  }
}
