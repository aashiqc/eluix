import { NextResponse } from 'next/server'
import connect from '@/utils/db'
import Post from '@/models/Post'
 
export const GET =  async (request) =>  {
  
  try{
    await connect()

    const posts = await Post.find()


    return NextResponse.json(posts, { status: 200 })

   

  }catch (err) {
    return NextResponse.json('Internal Server Error', { status: 500 })

  }


  
}