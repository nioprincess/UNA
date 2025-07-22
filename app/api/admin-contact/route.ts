import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/lib/utils/dbConnect'
import { NextResponse } from 'next/server'
import ContactInfo from '@/lib/models/Contact'

export async function GET() {
  await dbConnect()

  try {
    const contact = await ContactInfo.find({})
    return NextResponse.json({ contact })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch contact' },
      { status: 500 }
    )
  }
}

export async function PUT(request: Request) {
  await dbConnect()

  try {
    const formData = await request.formData()
    const id = formData.get('id')
    const facebook = formData.get('facebook')
    const linkedin = formData.get('linkedin')
    const instagram = formData.get('instagram')
    const twitter = formData.get('twitter')
    const location = formData.get('location')
    const phoneNumber = formData.get('phoneNumber')
    const email = formData.get('email')
    

    const updateData: { [key: string]: any } = {
      facebook,
      linkedin,
      instagram,
      twitter,
      location,
      phoneNumber,
      email,
    }

    const updatedContact = await ContactInfo.findByIdAndUpdate(id, updateData, {
      new: true,
    })

    if (!updatedContact) {
      return NextResponse.json({ error: 'Contact not found' }, { status: 404 })
    }

    return NextResponse.json(updatedContact)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to update Contact Information' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  await dbConnect()

  try {
    const formData = await request.formData()
    const facebook = formData.get('facebook')
    const linkedin = formData.get('linkedin')
    const instagram = formData.get('instagram')
    const twitter = formData.get('twitter')
    const location = formData.get('location')
    const phoneNumber = formData.get('phoneNumber')
    const email = formData.get('email')

    const newContact = new ContactInfo({
      facebook,
      linkedin,
      instagram,
      twitter,
      location,
      phoneNumber,
      email,
    })

    const savedContact = await newContact.save()

    return NextResponse.json(savedContact, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to create Contact Information' },
      { status: 500 }
    )
  }
}
