'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import ContactForm from '@/components/forms/ContactForm'

const ContactDashboard = () => {
  const [contact, setContact] = useState({})
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    fetchContact()
  }, [])

  const fetchContact = async () => {
    const res = await axios.get('/api/admin-contact')
    setContact(res.data.contact[0]||{})
  }

  const handleFormSubmit = async (formData: FormData) => {
    setUploading(true)
    try {
      await axios.put('/api/admin-contact', formData)
      toast.success('Contact Information updated successfully!')
      fetchContact()
    } catch (error: any) {
      console.error(error)
      toast.error(
        error.response.data.error.message ===
          'Contact validation failed: category: Path `category` is required.'
          ? 'Please select a category'
          : 'Failed to update Contact Information.'
      )
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold my-8">Manage Contact Information</h1>
      <ContactForm
        onSubmit={handleFormSubmit}
        loading={uploading}
        initialData={contact}
      />
    </div>
  )
}

export default ContactDashboard
