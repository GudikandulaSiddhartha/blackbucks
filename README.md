# 🚀 Blackbucks | TapTap — Skills, Jobs & Career Growth

A modern, interactive React platform built for the **Blackbucks / TapTap Hackathon** and student career acceleration. Features real-world cloud architectures, interactive DevOps skill assessments, placement readiness calculators, and responsive glassmorphism UI.

![Blackbucks Banner](https://img.shields.io/badge/Platform-Blackbucks%20%7C%20TapTap-8b5cf6?style=for-the-badge&logo=react)
![AWS Ready](https://img.shields.io/badge/AWS-S3%20%7C%20CloudFront%20%7C%20EKS-232f3e?style=for-the-badge&logo=amazon-aws)
![Vite](https://img.shields.io/badge/Built%20With-Vite%20%2B%20React%2019-646cff?style=for-the-badge&logo=vite)
![Status](https://img.shields.io/badge/Build-Passing-10b981?style=for-the-badge)

---

## ✨ Key Features

- **⚡ Modern Dark Glassmorphic UI**: High-contrast, responsive interface styled with Plus Jakarta Sans typography and glowing ambient gradients.
- **☁️ Cloud & DevOps Focus**: Modules and curricula tailored for AWS (S3 static hosting, CloudFront CDN, Route 53, Amazon EKS, and Terraform IaC).
- **📝 Interactive TapTap Skill Quiz**: Live 4-question interactive assessment engine with instant scoring, feedback, and explanation modals.
- **📊 Placement Readiness Calculator**: Dynamic scoring algorithm factoring in college year, academic CGPA, DSA problems solved, and cloud familiarity.
- **🎓 Specialized Learning Cohorts**: Tracks for Cloud & DevOps (EKS/Terraform), Full-Stack Engineering, and AI/Data Science.
- **📬 Student Cohort Registration**: Form handling with real-time validation and confirmation states.

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev) + [Vite](https://vitejs.dev)
- **Styling**: Modern CSS3 (CSS Variables, Flexbox/Grid, Glassmorphism backdrop filters)
- **Icons**: [Lucide React](https://lucide.dev)
- **Cloud Hosting Target**: AWS S3 + CloudFront CDN + Route 53 (HTTPS enabled)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org) installed (v18 or higher recommended).

### 1. Clone the repository
```bash
git clone https://github.com/GudikandulaSiddhartha/blackbucks.git
cd blackbucks
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 4. Build for Production (Deploy to AWS S3)
```bash
npm run build
```
The compiled, optimized static assets will be in the `dist/` directory, ready to be uploaded directly to an **Amazon S3 static website bucket** or distributed via **Amazon CloudFront**.

---

## 🌐 AWS Deployment Architecture

This project is designed to be hosted on AWS using a serverless static website pattern:

```
[ User Browser ]
       | (HTTPS)
       v
[ Amazon Route 53 ] (DNS Alias)
       |
       v
[ Amazon CloudFront ] (Global CDN Edge Caching)
       |
       v
[ Amazon S3 Bucket ] (Static Web Assets: HTML, JS, CSS)
```

---

## 👨‍💻 Author

- **Gudikandula Siddhartha** — [GitHub Profile](https://github.com/GudikandulaSiddhartha)
- Built for **TapTap: Skills, Jobs & Career Growth (Round 1 Hackathon)**
