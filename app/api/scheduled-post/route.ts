import { db } from '@/lib/prisma'
import { TScheduledPost } from '@/types/types'
import { NextRequest, NextResponse } from 'next/server'

/**
 *
 * @param req.body -> contains data of the post to be scheduled
 * @returns schedulePost
 */
export async function POST(req: NextRequest) {
  try {
    const body: any = await req?.json()

    const schedulePost: TScheduledPost = await db.scheduledPost.create({
      data: { ...body },
    })

    return NextResponse.json({ schedulePost }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}

/**
 *
 * @param req -> userId : based on userId we will fetch the all the posts of user which are on schedule
 * @returns fetched scheduled posts
 */
export async function GET(req: NextRequest) {
  try {
    const searchParams = new URLSearchParams(req.nextUrl.search)
    const userId: any = searchParams.get('UserId')
    const scheduledPost = await db.scheduledPost.findMany({
      where: {
        userId,
      },
    })
    return NextResponse.json({ scheduledPost }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}

/**
 *
 * @param req: id -> id for unschedule the scheduled post from schedule
 *           : deleteData -> if user deletes the post then it will be deleted from linkedinPost and from scheduledPost
 * @returns :if unschedule happens then  unscheduled: true
 *          :if delete happens then  delete: true 
 */
export async function DELETE(req: NextRequest) {
  try {
    const searchParams = new URLSearchParams(req.nextUrl.search)
    const id: any = searchParams.get('id')
    const deleteData: any = searchParams.get('deleteData')
    const checkScheduledPost: any = await db.scheduledPost.findUnique({
      where: {
        id,
      },
    })

    const postId: string = checkScheduledPost?.scheduledPost?.id

    if (!checkScheduledPost) {
      return NextResponse.json(
        { error: 'Something went wrong' },
        { status: 500 }
      )
    }
    await db.scheduledPost.delete({
      where: {
        id: checkScheduledPost?.id,
      },
    })

    if (deleteData === 'true') {
      await db.linkedinPost.delete({
        where: {
          id: postId,
        },
      })
      return NextResponse.json({ delete: true }, { status: 200 })
    }
    return NextResponse.json({ unscheduled: true }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
