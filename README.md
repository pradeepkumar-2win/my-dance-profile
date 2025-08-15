# My Dance Profile - Next.js Portfolio Website

A beautiful, responsive dance portfolio website built with Next.js, showcasing dance performances, gallery, writings, and contact information.

## 🚀 First Time Setup Guide for beginners

This guide is designed for beginners who are new to coding. Follow these steps carefully to set up your development environment on macOS.

## 📋 Prerequisites

- macOS computer
- Basic familiarity with using Terminal (we'll guide you through this)
- GitHub account (create one at [github.com](https://github.com) if you don't have one)

## 🔧 Step 1: Install Development Tools

### 1.1 Install Homebrew (Package Manager for macOS)

Homebrew helps you install software packages easily. Open Terminal and run:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

After installation, you might need to add Homebrew to your PATH. Run these commands:

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

### 1.2 Install Node.js and npm

Node.js is the JavaScript runtime, and npm is the package manager. Install using Homebrew:

```bash
brew install node
```

Verify installation:
```bash
node --version
npm --version
```

### 1.3 Install nvm (Node Version Manager) - Optional but Recommended

nvm helps you manage different Node.js versions:

```bash
brew install nvm
```

Add to your shell profile:
```bash
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zprofile
echo '[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"' >> ~/.zprofile
echo '[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"' >> ~/.zprofile
```

Restart Terminal or run:
```bash
source ~/.zprofile
```

### 1.4 Install Yarn (Alternative Package Manager)

Yarn is an alternative to npm that's often faster:

```bash
npm install -g yarn
```

Verify installation:
```bash
yarn --version
```

## 🔑 Step 2: GitHub Setup

### 2.1 Create SSH Key

SSH keys allow secure communication between your computer and GitHub. Generate one:

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

**Important**: When prompted for a passphrase, you can press Enter for no passphrase (easier for beginners), or create a memorable one.

### 2.2 Add SSH Key to SSH Agent

Start the SSH agent and add your key:

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

### 2.3 Copy SSH Public Key

Display your public key:

```bash
cat ~/.ssh/id_ed25519.pub
```

**Select and copy the entire output** (it starts with `ssh-ed25519` and ends with your email).

### 2.4 Add SSH Key to GitHub

1. Go to [github.com](https://github.com) and sign in
2. Click your profile picture → **Settings**
3. In the left sidebar, click **SSH and GPG keys**
4. Click **New SSH key**
5. Give it a title (e.g., "My MacBook")
6. Paste your public key in the "Key" field
7. Click **Add SSH key**

### 2.5 Test SSH Connection

Test if everything works:

```bash
ssh -T git@github.com
```

You should see: "Hi username! You've successfully authenticated..."

## 📚 Step 3: Git Basics

Git is a version control system that tracks changes in your code. Here are the essential commands:

### 3.1 Configure Git

Set up your identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"
```

### 3.2 Basic Git Commands

| Command | Purpose | Example |
|---------|---------|---------|
| `git init` | Start tracking a folder | `git init` |
| `git clone` | Download a project from GitHub | `git clone git@github.com:username/repo.git` |
| `git add` | Stage files for commit | `git add .` (adds all files) |
| `git commit` | Save your changes | `git commit -m "Add new feature"` |
| `git push` | Upload changes to GitHub | `git push origin main` |
| `git pull` | Download latest changes | `git pull origin main` |
| `git status` | Check what's changed | `git status` |
| `git log` | View commit history | `git log --oneline` |

### 3.3 Git Workflow

1. **Make changes** to your code
2. **Check status**: `git status`
3. **Stage changes**: `git add .`
4. **Commit changes**: `git commit -m "Description of changes"`
5. **Push to GitHub**: `git push origin main`

## 🏗️ Step 4: Project Setup

### 4.1 Clone the Project

Navigate to where you want to store your projects:

```bash
cd ~/Documents
# or wherever you prefer
```

Clone the project:
```bash
git clone git@github.com:your-username/my-dance-profile.git
cd my-dance-profile
```

### 4.2 Install Dependencies

Install the required packages:

```bash
npm install
# or
yarn install
```

### 4.3 Start Development Server

Run the project locally:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website!

## 📁 Project Structure

```
my-dance-profile/
├── src/
│   ├── app/                 # Main application pages
│   │   ├── about/          # About page
│   │   ├── gallery/        # Photo gallery
│   │   ├── writing/        # Blog articles
│   │   ├── guestbook/      # Visitor messages
│   │   ├── contact/        # Contact form
│   │   └── components/     # Reusable components
│   └── globals.css         # Global styles
├── public/                  # Static files (images, etc.)
├── content/                 # Content data (profile.json)
└── package.json            # Project dependencies
```

## 🎨 Customization

### Update Profile Information

Edit `content/profile.json` to change:
- Your name and bio
- Contact information
- Social media links
- Dance styles and experience

### Add Your Photos

1. Place your dance photos in `public/images/`
2. Update the gallery in `src/app/gallery/page.tsx`
3. Add your own content to the writing and guestbook pages

## 🚀 Deployment

### Deploy to Vercel (Recommended for Beginners)

1. Push your changes to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "New Project"
5. Import your repository
6. Deploy!

## 🆘 Common Issues & Solutions

### "Permission denied" error
- Make sure you're using SSH: `git clone git@github.com:username/repo.git`
- Not HTTPS: `git clone https://github.com/username/repo.git`

### "Command not found"
- Restart Terminal after installing tools
- Check if tools are in your PATH: `echo $PATH`

### Port 3000 already in use
- Stop other development servers
- Or use a different port: `npm run dev -- -p 3001`

## 📚 Learning Resources

- [GitHub Guides](https://guides.github.com/) - Learn Git and GitHub
- [Next.js Tutorial](https://nextjs.org/learn) - Learn Next.js
- [Tailwind CSS](https://tailwindcss.com/docs) - Learn CSS framework
- [MDN Web Docs](https://developer.mozilla.org/) - Learn web development

## 🤝 Getting Help

- Check the [Issues](https://github.com/your-username/my-dance-profile/issues) page
- Ask questions in class or to your instructor
- Use Google to search for error messages
- Stack Overflow is great for programming questions

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding! 🎉** Remember, everyone starts somewhere. Take it step by step, and don't hesitate to ask for help!
