// Email service utility functions

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface GuestbookFormData {
  name: string
  email: string
  type: string
  message: string
}

// Submit contact form
export const submitContactForm = async (formData: ContactFormData) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formType: 'contact',
        ...formData
      }),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.error || 'Failed to send message')
    }

    return { success: true, data: result }
  } catch (error) {
    console.error('Contact form submission error:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to send message' 
    }
  }
}

// Submit guestbook form
export const submitGuestbookForm = async (formData: GuestbookFormData) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formType: 'guestbook',
        ...formData
      }),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.error || 'Failed to send message')
    }

    return { success: true, data: result }
  } catch (error) {
    console.error('Guestbook form submission error:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to send message' 
    }
  }
}
