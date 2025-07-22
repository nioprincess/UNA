import React, { useEffect, useState } from 'react'
import { Button, Input } from 'antd'

interface ContactFormProps {
  onSubmit: (data: FormData) => void
  initialData?: any
  loading: boolean
}

const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  initialData,
  loading,
}) => {
  const [facebook, setFacebook] = useState(initialData.facebook || '')
  const [linkedin, setLinkedin] = useState(initialData.linkedin || '')
  const [instagram, setInstagram] = useState(initialData.instagram || '')
  const [twitter, setTwitter] = useState(initialData.twitter || '')
  const [location, setLocation] = useState(initialData.location || '')
  const [phoneNumber, setPhoneNumber] = useState(initialData.phoneNumber || '')
  const [email, setEmail] = useState(initialData.email || '')

  useEffect(() => {
    setFacebook(initialData.facebook)
    setLinkedin(initialData.linkedin)
    setInstagram(initialData.instagram)
    setTwitter(initialData.twitter)
    setLocation(initialData.location)
    setPhoneNumber(initialData.phoneNumber)
    setEmail(initialData.email)
  }, [initialData])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('id', initialData._id)
    formData.append('facebook', facebook)
    formData.append('linkedin', linkedin)
    formData.append('instagram', instagram)
    formData.append('twitter', twitter)
    formData.append('location', location)
    formData.append('phoneNumber', phoneNumber)
    formData.append('email', email)
    onSubmit(formData)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 border shadow-lg rounded-lg p-4"
    >
      <div>
        <label className="block text-sm font-medium">Facebook</label>
        <Input
          placeholder="Enter facebook URL"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">LinkedIn</label>
        <Input
          placeholder="Enter LinkedIn URL"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Instagram</label>
        <Input
          placeholder="Enter Instagram URL"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Twitter</label>
        <Input
          placeholder="Enter Twitter URL"
          value={twitter}
          onChange={(e) => setTwitter(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Location</label>
        <Input
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Phone Number</label>
        <Input
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <Input
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Button
        type="primary"
        htmlType="submit"
        loading={loading}
        className="mt-4"
      >
        {'Update Contact Info'}
      </Button>
    </form>
  )
}

export default ContactForm
