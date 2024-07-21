import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const ADMIN_USERNAME = process.env.ADMIN_USERNAME
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD

const ADMIN_PASSWORD_HASH = bcrypt.hashSync(ADMIN_PASSWORD as string, 10)

const users = [{ username: ADMIN_USERNAME, passwordHash: ADMIN_PASSWORD_HASH }]

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json()

    const user = users.find((user) => user.username === username)

    if (user && bcrypt.compareSync(password, user.passwordHash)) {
      const token = jwt.sign(
        { username: user.username },
        process.env.JWT_SECRET as string,
        { expiresIn: '1h' }
      )
      const response = NextResponse.json(
        { message: 'Sign-in successful' },
        { status: 200 }
      )

      response.cookies.set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 3600,
        path: '/',
      })

      return response
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  } catch (error) {
    console.error('Error during sign-in:', error)
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 })
  }
}
