# SMTP Email Setup Guide for Your Dance Profile Website

## 🚀 What We've Implemented

Your website now has **real, functional forms** using **SMTP directly** - no external services or accounts needed! All submissions go to `showprofilehsr@gmail.com` with beautiful HTML email templates.

## 📧 Forms Now Working:

1. **Contact Page** (`/contact`) - Professional inquiries, performance bookings, collaborations
2. **Guestbook** (`/guestbook`) - Public messages, testimonials, feedback
3. **Homepage** - Clean contact button linking to dedicated contact page

## ⚙️ Setup Steps Required:

### Step 1: Enable 2-Step Verification on Gmail
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Security → 2-Step Verification
3. Enable if not already enabled

### Step 2: Generate Gmail App Password
1. In Google Account Settings → Security
2. 2-Step Verification → App passwords
3. Select "Mail" and "Other (Custom name)"
4. Name it "Dance Profile Website"
5. **Copy the 16-character password** (you'll need this)

### Step 3: Create Environment File
1. In your project root, create `.env.local`
2. Add this content:

```bash
# Gmail SMTP Configuration
GMAIL_USER=showprofilehsr@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password_here
NODE_ENV=development
```

**Replace `your_16_character_app_password_here` with the actual password from Step 2**

### Step 4: Test Your Forms
1. Start your development server: `npm run dev`
2. Test the contact form at `/contact`
3. Test the guestbook form at `/guestbook`
4. Check your email at `showprofilehsr@gmail.com`

## 🎯 How It Works:

### Contact Form Submissions:
- **Subject:** `[CONTACT] Visitor Name - Subject`
- **Beautiful HTML email** with your website branding
- **Reply-to set** to visitor's email for easy responses
- **Destination:** `showprofilehsr@gmail.com`

### Guestbook Submissions:
- **Subject:** `[GUESTBOOK] Visitor Name - Message Type`
- **Styled email** with message type badges
- **Organized content** for easy reading
- **Destination:** `showprofilehsr@gmail.com`

## ✨ Email Template Features:

### Built-in Templates:
- **Professional HTML emails** with your website colors
- **Responsive design** that works on all devices
- **Clear organization** of visitor information
- **Reply-to functionality** for easy communication

### Template Customization:
- **Colors match your website** theme
- **Professional branding** and layout
- **Easy to modify** in the codebase
- **No external dependencies**

## ✅ Benefits:

1. **No External Services** - Everything runs on your server
2. **Full Control** - Customize emails exactly how you want
3. **Professional Appearance** - Beautiful HTML email templates
4. **Reliable Delivery** - Direct SMTP connection to Gmail
5. **Cost Effective** - No monthly fees or service charges
6. **Privacy** - All data stays within your control

## 🔧 Troubleshooting:

### If emails don't arrive:
1. Check your `.env.local` file has correct values
2. Verify Gmail App Password is correct
3. Check spam folder
4. Ensure 2-Step Verification is enabled
5. Check server console for error messages

### If forms show errors:
1. Check browser console for error messages
2. Verify environment variables are loaded
3. Check server logs for SMTP errors
4. Ensure internet connection

### Common Issues:
- **"Invalid credentials"** - Check your App Password
- **"2-Step Verification required"** - Enable it in Google Account
- **"Less secure app access"** - Use App Passwords instead

## 🎉 You're All Set!

Once you complete the SMTP setup, your website will have:
- ✅ **Working contact forms** with real email delivery
- ✅ **Beautiful HTML email templates** built into your code
- ✅ **Professional communication** directly to your Gmail
- ✅ **No external dependencies** or monthly fees
- ✅ **Full control** over email appearance and functionality

All form submissions will be delivered directly to `showprofilehsr@gmail.com` with professional, branded email templates!

## 🔒 Security Notes:

- **Never commit** your `.env.local` file to git
- **App Passwords** are more secure than regular passwords
- **2-Step Verification** is required for App Passwords
- **Environment variables** keep your credentials secure
