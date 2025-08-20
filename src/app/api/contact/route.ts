import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Email configuration
const emailConfig = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'showprofilehsr@gmail.com', // Your Gmail address
    pass: process.env.GMAIL_APP_PASSWORD // Gmail App Password (not regular password)
  }
}

// Email templates
const emailTemplates = {
  contact: (data: { name: string; email: string; subject: string; message: string }) => ({
    subject: `[CONTACT] ${data.name} - ${data.subject}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #667eea; }
          .message-box { background: #f8f9ff; padding: 15px; border-left: 4px solid #667eea; margin: 20px 0; }
          .footer { background: #f5f5f5; padding: 15px; text-align: center; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>New Contact Form Submission</h1>
          <p>Dance Profile Website</p>
        </div>
        
        <div class="content">
          <div class="field">
            <span class="label">Name:</span> ${data.name}
          </div>
          
          <div class="field">
            <span class="label">Email:</span> ${data.email}
          </div>
          
          <div class="field">
            <span class="label">Subject:</span> ${data.subject}
          </div>
          
          <div class="field">
            <span class="label">Message:</span>
          </div>
          
          <div class="message-box">
            ${data.message.replace(/\n/g, '<br>')}
          </div>
          
          <p><strong>Form Type:</strong> Contact Form</p>
          <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
        </div>
        
        <div class="footer">
          <p>This message was sent from your dance profile website.</p>
          <p>You can reply directly to this email to respond to ${data.name}.</p>
        </div>
      </body>
      </html>
    `
  }),
  
  guestbook: (data: { name: string; email: string; type: string; message: string }) => ({
    subject: `[GUESTBOOK] ${data.name} - ${data.type}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #4facfe; }
          .message-box { background: #f0f9ff; padding: 15px; border-left: 4px solid #4facfe; margin: 20px 0; }
          .type-badge { display: inline-block; padding: 5px 10px; border-radius: 15px; font-size: 12px; font-weight: bold; }
          .type-testimonial { background: #dcfce7; color: #166534; }
          .type-feedback { background: #dbeafe; color: #1e40af; }
          .type-message { background: #f3e8ff; color: #7c3aed; }
          .footer { background: #f5f5f5; padding: 15px; text-align: center; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>New Guestbook Message</h1>
          <p>Dance Profile Website</p>
        </div>
        
        <div class="content">
          <div class="field">
            <span class="label">Name:</span> ${data.name}
          </div>
          
          <div class="field">
            <span class="label">Email:</span> ${data.email}
          </div>
          
          <div class="field">
            <span class="label">Message Type:</span> 
            <span class="type-badge type-${data.type}">${data.type.charAt(0).toUpperCase() + data.type.slice(1)}</span>
          </div>
          
          <div class="field">
            <span class="label">Message:</span>
          </div>
          
          <div class="message-box">
            ${data.message.replace(/\n/g, '<br>')}
          </div>
          
          <p><strong>Form Type:</strong> Guestbook</p>
          <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
        </div>
        
        <div class="footer">
          <p>This message was sent from your dance profile website guestbook.</p>
          <p>You can reply directly to this email to respond to ${data.name}.</p>
        </div>
      </body>
      </html>
    `
  })
}

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport(emailConfig)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { formType, ...formData } = body

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Get email template
    const template = emailTemplates[formType as keyof typeof emailTemplates]
    if (!template) {
      return NextResponse.json(
        { error: 'Invalid form type' },
        { status: 400 }
      )
    }

    const emailContent = template(formData)

    // Create transporter
    const transporter = createTransporter()

    // Send email
    const info = await transporter.sendMail({
      from: `"Dance Profile Website" <${emailConfig.auth.user}>`,
      to: emailConfig.auth.user, // Send to yourself
      replyTo: formData.email, // Set reply-to as visitor's email
      subject: emailContent.subject,
      html: emailContent.html,
      text: `
        New message from your website:
        
        Name: ${formData.name}
        Email: ${formData.email}
        ${formData.subject ? `Subject: ${formData.subject}` : ''}
        ${formData.type ? `Type: ${formData.type}` : ''}
        
        Message:
        ${formData.message}
        
        ---
        This message was sent from your dance profile website.
        You can reply directly to this email to respond to ${formData.name}.
      `
    })

    console.log('Email sent:', info.messageId)

    return NextResponse.json({ 
      success: true, 
      messageId: info.messageId,
      message: 'Message sent successfully!' 
    })

  } catch (error) {
    console.error('Email sending error:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    )
  }
}
