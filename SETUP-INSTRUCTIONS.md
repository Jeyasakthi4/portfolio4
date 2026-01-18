# Portfolio Setup Instructions

## ✅ Completed Tasks

1. **Removed Cybersecurity Workshop Portal** from projects section
2. **Created files directory structure** in `public/files/`
3. **Updated project image paths** to use the new files structure
4. **Fixed Hero component** window error for server-side rendering
5. **Added download resume functionality**

## 📁 Files Directory Structure Created

```
public/files/
├── README.md              # Detailed instructions for file management
├── images/                # Project screenshots and photos
│   └── .gitkeep          # Placeholder file
├── certificates/          # Academic and professional certificates
│   └── .gitkeep          # Placeholder file
├── documents/            # Additional documents
│   └── .gitkeep          # Placeholder file
└── resume/               # Resume files
    └── .gitkeep          # Placeholder file
```

## 🚀 Next Steps for You

### 1. Add Your Files

**Profile Photo** (Optional):
- Add your professional photo as `public/files/images/profile-photo.jpg`
- Uncomment the image line in `src/components/hero.tsx` (line 75-76)

**Project Screenshots**:
- Add `public/files/images/student-management-system.jpg`
- Add `public/files/images/portfolio-website.jpg`

**Resume**:
- Add your resume as `public/files/resume/lingala-bishma-goud-resume.pdf`
- The download button in the hero section will work automatically

**Certificates**:
- Add your Google Cybersecurity certificate
- Add your academic certificates
- Add any workshop certificates

### 2. Update Project Links

In `src/components/projects.tsx`, update the GitHub and demo links:
- Replace `github: "#"` with your actual GitHub repository URLs
- Replace `demo: "#"` with live demo URLs if available

### 3. Add LinkedIn URL

In multiple components, replace LinkedIn `href: "#"` with your actual LinkedIn profile URL:
- `src/components/hero.tsx` (line 155)
- `src/components/contact.tsx` (line 45)
- `src/components/footer.tsx` (line 15)

### 4. Deploy to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio setup"

# Add your GitHub repository
git remote add origin https://github.com/Jeyasakthi4/portfolio.git

# Push to GitHub
git push -u origin main
```

### 5. Deploy to Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Import your portfolio repository
4. Deploy automatically
5. Your portfolio will be live at `https://your-portfolio.vercel.app`

### 6. Deploy to Netlify (Alternative)

1. Go to [netlify.com](https://netlify.com)
2. Sign up with your GitHub account
3. Drag and drop your `portfolio` folder or connect GitHub repo
4. Deploy automatically

## 📝 File Naming Guidelines

- Use lowercase letters
- Use hyphens (-) instead of spaces
- Be descriptive but concise
- Include your name in important documents

**Examples**:
- ✅ `lingala-bishma-goud-resume.pdf`
- ✅ `student-management-dashboard.jpg`
- ✅ `google-cybersecurity-certificate.pdf`
- ❌ `IMG_001.jpg`
- ❌ `Resume.pdf`

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📞 Support

If you need help with any of these steps, feel free to ask!

**Your Portfolio URL**: http://localhost:3000 (development)

---

**Created**: January 2025
**For**: Lingala Bishma Goud
**Portfolio**: Full Stack Developer & Cybersecurity Enthusiast
