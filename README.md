# Modern Portfolio Website

A modern, responsive portfolio website built with React.js and Sanity.io CMS. This project showcases a professional portfolio with smooth animations, responsive design, and a content management system for easy updates.

## 🚀 Features

- Modern and responsive design
- Smooth animations using Framer Motion
- Content Management System (CMS) using Sanity.io
- Interactive UI components with Reactstrap
- Custom icons using React Icons
- Tooltips for enhanced user experience
- File download capabilities
- Optimized performance

## 🛠️ Tech Stack

- **Frontend:**
  - React.js
  - Reactstrap
  - Framer Motion
  - SASS/SCSS
  - React Icons
  - React Tooltip

- **Backend:**
  - Sanity.io CMS
  - Sanity Client
  - Sanity Image URL

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- Sanity CLI (for CMS setup)

## 🔧 Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd Portfolio_Site
```

2. Install frontend dependencies:
```bash
cd react_portfolio/frontend_react
npm install
```

3. Install backend dependencies:
```bash
cd ../backend_sanity
npm install
```

4. Set up environment variables:
Create a `.env` file in the frontend_react directory with your Sanity project details:
```
REACT_APP_SANITY_PROJECT_ID=your_project_id
REACT_APP_SANITY_DATASET=production
```

## 🚀 Running the Project

1. Start the frontend development server:
```bash
cd react_portfolio/frontend_react
npm start
```

2. Start the Sanity Studio (in a separate terminal):
```bash
cd react_portfolio/backend_sanity
npm run dev
```

The frontend will be available at `http://localhost:3000` and the Sanity Studio at `http://localhost:3333`.

## 📝 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## 🌐 Deployment

The project can be deployed to various platforms:

1. Frontend: Deploy to platforms like Vercel, Netlify, or GitHub Pages
2. Backend: Deploy Sanity Studio to Sanity.io


## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👤 Author

Vishal Patel

- GitHub: [@vishalpatel011](https://github.com/vishalpatel011)
- LinkedIn: https://www.linkedin.com/in/vishalpatel011/
- Email: patelv254@gmail.com

---

Made with ❤️ by Vishal Patel
