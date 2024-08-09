import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST() {
  cookies().delete('token')
  const response = NextResponse.json(
    { message: 'Signed out successfully' },
    { status: 200 }
  )
  return response
}
