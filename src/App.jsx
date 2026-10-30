import React, { useState } from 'react';
import {
  Code,
  Cloud,
  CheckCircle2,
  Trophy,
  Users,
  Compass,
  ArrowRight,
  Terminal,
  Cpu,
  ShieldCheck,
  Zap,
  Sparkles,
  BookOpen,
  Send,
  Star,
  ExternalLink,
  ChevronRight,
  HelpCircle,
  Award,
  Layers,
  Server
} from 'lucide-react';
import './App.css';

// Sample quiz questions focused on Cloud, AWS, DevOps & Full Stack
const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Which AWS service provides a fully managed Kubernetes control plane?",
    options: ["Amazon ECS", "Amazon EKS", "AWS Fargate", "Amazon EC2"],
    correct: 1,
    explanation: "Amazon EKS (Elastic Kubernetes Service) automatically manages the availability and scalability of the Kubernetes control plane nodes."
  },
  {
    id: 2,
    question: "In AWS static website hosting, which CDN service caches content at 400+ edge locations globally?",
    options: ["Amazon Route 53", "AWS Direct Connect", "Amazon CloudFront", "AWS Global Accelerator"],
    correct: 2,
    explanation: "Amazon CloudFront is AWS's high-speed global Content Delivery Network (CDN) that accelerates distribution of static and dynamic web content."
  },
  {
    id: 3,
    question: "Which Infrastructure as Code (IaC) tool uses declarative HCL files to automate AWS provisioning?",
    options: ["Ansible", "Terraform", "Puppet", "Docker"],
    correct: 1,
    explanation: "HashiCorp Terraform enables developers to define cloud infrastructure using declarative HCL (HashiCorp Configuration Language)."
  },
  {
    id: 4,
    question: "Where are Docker container images securely stored before deploying to Amazon EKS pods?",
    options: ["Amazon S3", "Amazon EBS", "Amazon ECR", "AWS CodeCommit"],
    correct: 2,
    explanation: "Amazon Elastic Container Registry (ECR) is a managed container image registry service that is secure, scalable, and reliable."
  }
];

export default function App() {
  // Quiz State
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  // Readiness Calculator State
  const [year, setYear] = useState('3rd');
  const [cgpa, setCgpa] = useState('8.2');
  const [dsaProblems, setDsaProblems] = useState('120');
  const [cloudSkill, setCloudSkill] = useState('intermediate');
  const [calculatedScore, setCalculatedScore] = useState(null);

  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', college: '', track: 'Cloud & DevOps (AWS / EKS)' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Quiz Handlers
  const handleOptionClick = (idx) => {
    if (showAnswer) return;
    setSelectedOption(idx);
    setShowAnswer(true);
    if (idx === QUIZ_QUESTIONS[currentQ].correct) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQ < QUIZ_QUESTIONS.length - 1) {
      setCurrentQ((prev) => prev + 1);
      setSelectedOption(null);
      setShowAnswer(false);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setSelectedOption(null);
    setShowAnswer(false);
    setScore(0);
    setQuizFinished(false);
  };

  // Calculate Placement Readiness
  const calculateReadiness = (e) => {
    e.preventDefault();
    const gpaVal = parseFloat(cgpa) || 7.0;
    const dsaVal = parseInt(dsaProblems) || 50;
    
    let base = 50;
    base += (gpaVal - 6.0) * 8; // GPA bonus
    base += Math.min(dsaVal / 4, 30); // DSA bonus max 30

    if (cloudSkill === 'advanced') base += 15;
    else if (cloudSkill === 'intermediate') base += 10;
    else base += 5;

    const finalScore = Math.min(Math.round(base), 98);
    setCalculatedScore(finalScore);
  };

  // Submit contact form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <div className="app-container">
      {/* Background Decorative Glow Orbs */}
      <div className="glow-orb" style={{ top: '80px', left: '-150px', width: '450px', height: '450px', background: 'rgba(139, 92, 246, 0.22)' }} />
      <div className="glow-orb" style={{ top: '650px', right: '-150px', width: '500px', height: '500px', background: 'rgba(6, 182, 212, 0.16)' }} />
      <div className="glow-orb" style={{ top: '1600px', left: '20%', width: '600px', height: '600px', background: 'rgba(99, 102, 241, 0.14)' }} />

      <div className="content-wrapper">
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="container nav-content">
            <a href="#hero" className="logo-brand">
              <div className="logo-icon">
                <Sparkles size={24} color="#fff" />
              </div>
              <div>
                <div className="logo-text">BLACKBUCKS</div>
                <div className="logo-sub">TapTap Career Engine</div>
              </div>
            </a>

            <div className="nav-links">
              <a href="#features" className="nav-link">Platform</a>
              <a href="#tracks" className="nav-link">Cloud & Tech Tracks</a>
              <a href="#quiz" className="nav-link">Skill Assessment</a>
              <a href="#calculator" className="nav-link">Readiness Calculator</a>
              <a href="#placements" className="nav-link">Placements</a>
            </div>

            <div className="nav-actions">
              <a href="#quiz" className="btn-secondary" style={{ padding: '8px 18px', fontSize: '0.88rem' }}>
                Quick Test
              </a>
              <a href="#contact" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.88rem' }}>
                Join Cohort
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" className="hero-section">
          <div className="container">
            <div className="hero-badge-wrap">
              <span className="badge">
                <Zap size={15} color="#c084fc" />
                TapTap Skill Assessment & Campus Placement 2026
              </span>
            </div>

            <h1 className="hero-title">
              Empowering Students With <span className="text-gradient">Industry-Grade Cloud</span> & Microservice Architectures
            </h1>

            <p className="hero-subtitle">
              Master enterprise AWS infrastructure, Kubernetes orchestration on EKS, automated Terraform pipelines, and full-stack development with hands-on practice.
            </p>

            <div className="hero-buttons">
              <a href="#quiz" className="btn-primary">
                Take Cloud Skill Quiz <ArrowRight size={18} />
              </a>
              <a href="#tracks" className="btn-secondary">
                View Curriculum Tracks
              </a>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
              <div className="glass-panel stat-card">
                <div className="stat-number text-gradient">150,000+</div>
                <div className="stat-label">Students Trained</div>
              </div>
              <div className="glass-panel stat-card">
                <div className="stat-number text-gradient-cyan">500+</div>
                <div className="stat-label">Partner Colleges</div>
              </div>
              <div className="glass-panel stat-card">
                <div className="stat-number text-gradient">250+</div>
                <div className="stat-label">Hiring Corporate Partners</div>
              </div>
              <div className="glass-panel stat-card">
                <div className="stat-number text-gradient-cyan">₹18.4 LPA</div>
                <div className="stat-label">Highest Placement Package</div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features" className="section">
          <div className="container">
            <div className="section-header">
              <div className="section-tag">Core Capabilities</div>
              <h2 className="section-title">Built for Real-World Tech Readiness</h2>
              <p className="section-desc">
                From basic cloud hosting to production-ready Amazon EKS clusters, our modules bridge the gap between academic theory and enterprise engineering.
              </p>
            </div>

            <div className="features-grid">
              <div className="glass-panel feature-card">
                <div className="feature-icon-box">
                  <Cloud size={28} />
                </div>
                <h3 className="feature-title">AWS & Cloud Virtual Labs</h3>
                <p className="feature-text">
                  Hands-on sandbox labs covering S3 Static Website Hosting, Route 53 DNS records, CloudFront CDN caching, and ACM SSL certificates.
                </p>
                <div className="feature-pill">AWS Free Tier Compatible &rarr;</div>
              </div>

              <div className="glass-panel feature-card">
                <div className="feature-icon-box" style={{ color: 'var(--accent-cyan)', borderColor: 'rgba(6, 182, 212, 0.3)', background: 'rgba(6, 182, 212, 0.12)' }}>
                  <Server size={28} />
                </div>
                <h3 className="feature-title">Amazon EKS & Kubernetes</h3>
                <p className="feature-text">
                  Multi-AZ worker node groups, Horizontal Pod Autoscaling (HPA), rolling zero-downtime updates, and ingress traffic management with AWS ALB.
                </p>
                <div className="feature-pill">Kubernetes Blueprint &rarr;</div>
              </div>

              <div className="glass-panel feature-card">
                <div className="feature-icon-box" style={{ color: 'var(--accent-pink)', borderColor: 'rgba(236, 72, 153, 0.3)', background: 'rgba(236, 72, 153, 0.12)' }}>
                  <Terminal size={28} />
                </div>
                <h3 className="feature-title">Terraform IaC Automation</h3>
                <p className="feature-text">
                  Declarative infrastructure code to spin up VPCs, subnets, NAT gateways, security groups, and IAM roles in repeatable configurations.
                </p>
                <div className="feature-pill">Infrastructure as Code &rarr;</div>
              </div>

              <div className="glass-panel feature-card">
                <div className="feature-icon-box">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="feature-title">IAM & Cluster RBAC Security</h3>
                <p className="feature-text">
                  Enterprise-grade security controls integrating AWS Identity and Access Management with native Kubernetes Role-Based Access Control.
                </p>
                <div className="feature-pill">Zero-Trust Cloud &rarr;</div>
              </div>

              <div className="glass-panel feature-card">
                <div className="feature-icon-box" style={{ color: 'var(--accent-cyan)', borderColor: 'rgba(6, 182, 212, 0.3)', background: 'rgba(6, 182, 212, 0.12)' }}>
                  <Trophy size={28} />
                </div>
                <h3 className="feature-title">TapTap Hackathons & Challenges</h3>
                <p className="feature-text">
                  Compete in live coding rounds, system architecture assessments, and real-time hackathons evaluated directly by top recruiting panels.
                </p>
                <div className="feature-pill">Leaderboards & Badges &rarr;</div>
              </div>

              <div className="glass-panel feature-card">
                <div className="feature-icon-box" style={{ color: 'var(--accent-pink)', borderColor: 'rgba(236, 72, 153, 0.3)', background: 'rgba(236, 72, 153, 0.12)' }}>
                  <Users size={28} />
                </div>
                <h3 className="feature-title">Campus Placement Acceleration</h3>
                <p className="feature-text">
                  Direct interview shortcuts, mock evaluations, resume feedback, and corporate hiring drives with over 250+ top tech employers.
                </p>
                <div className="feature-pill">Placement Guarantee &rarr;</div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Cloud Skill Quiz Section */}
        <section id="quiz" className="section" style={{ background: 'rgba(18, 20, 38, 0.6)' }}>
          <div className="container">
            <div className="section-header">
              <div className="section-tag">Interactive Evaluation</div>
              <h2 className="section-title">TapTap Cloud & DevOps Quiz</h2>
              <p className="section-desc">
                Test your knowledge on AWS, Amazon EKS, and modern cloud deployment right now.
              </p>
            </div>

            <div className="glass-panel quiz-container">
              {!quizFinished ? (
                <>
                  <div className="quiz-header">
                    <span className="quiz-badge">Question {currentQ + 1} of {QUIZ_QUESTIONS.length}</span>
                    <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Score: {score}</span>
                  </div>

                  <h3 className="quiz-question">{QUIZ_QUESTIONS[currentQ].question}</h3>

                  <div className="quiz-options">
                    {QUIZ_QUESTIONS[currentQ].options.map((opt, idx) => {
                      let btnClass = "quiz-option";
                      if (showAnswer) {
                        if (idx === QUIZ_QUESTIONS[currentQ].correct) btnClass += " correct";
                        else if (idx === selectedOption) btnClass += " wrong";
                      }
                      return (
                        <button
                          key={idx}
                          className={btnClass}
                          onClick={() => handleOptionClick(idx)}
                          disabled={showAnswer}
                        >
                          <span>{opt}</span>
                          {showAnswer && idx === QUIZ_QUESTIONS[currentQ].correct && (
                            <CheckCircle2 size={18} color="#10b981" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {showAnswer && (
                    <div className="quiz-feedback">
                      <strong>Explanation: </strong>
                      {QUIZ_QUESTIONS[currentQ].explanation}
                    </div>
                  )}

                  {showAnswer && (
                    <button className="btn-primary" onClick={nextQuestion} style={{ width: '100%' }}>
                      {currentQ === QUIZ_QUESTIONS.length - 1 ? "View Final Result" : "Next Question"}
                    </button>
                  )}
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <Award size={64} color="#8b5cf6" style={{ margin: '0 auto 16px' }} />
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px' }}>
                    Quiz Complete!
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                    You scored <strong style={{ color: '#fff' }}>{score} out of {QUIZ_QUESTIONS.length}</strong>!
                  </p>
                  <p style={{ fontSize: '0.95rem', color: score >= 3 ? '#a7f3d0' : '#fca5a5', marginBottom: '28px' }}>
                    {score >= 3
                      ? "Excellent! You have solid foundational knowledge for AWS & EKS deployments."
                      : "Good attempt! Review the S3, CloudFront and EKS concepts to improve your score."}
                  </p>
                  <button className="btn-primary" onClick={restartQuiz}>
                    Retry Assessment
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Tracks & Specializations */}
        <section id="tracks" className="section">
          <div className="container">
            <div className="section-header">
              <div className="section-tag">Learning Pathways</div>
              <h2 className="section-title">Specialized Engineering Cohorts</h2>
              <p className="section-desc">
                Curated industry roadmaps designed with hiring managers from Tier-1 IT companies.
              </p>
            </div>

            <div className="tracks-grid">
              <div className="glass-panel track-card">
                <div className="track-header">
                  <span className="track-badge" style={{ background: 'rgba(139, 92, 246, 0.2)', color: '#c084fc' }}>
                    Most Popular
                  </span>
                  <Cloud size={24} color="#8b5cf6" />
                </div>
                <h3 className="track-title">Cloud Architecture & DevOps</h3>
                <p className="track-desc">
                  Design highly available infrastructures, configure Terraform state management, provision Amazon EKS clusters, and build automated CI/CD pipelines.
                </p>
                <div className="tech-tags">
                  <span className="tech-tag">AWS EKS</span>
                  <span className="tech-tag">Terraform</span>
                  <span className="tech-tag">Kubernetes</span>
                  <span className="tech-tag">CloudFront</span>
                  <span className="tech-tag">Docker</span>
                </div>
                <a href="#contact" className="btn-secondary" style={{ marginTop: 'auto', width: '100%' }}>
                  Enroll in Track
                </a>
              </div>

              <div className="glass-panel track-card">
                <div className="track-header">
                  <span className="track-badge" style={{ background: 'rgba(6, 182, 212, 0.2)', color: '#67e8f9' }}>
                    High Demand
                  </span>
                  <Code size={24} color="#06b6d4" />
                </div>
                <h3 className="track-title">Full Stack Web Engineering</h3>
                <p className="track-desc">
                  Modern React 19 architecture, micro-frontends, REST & GraphQL APIs, TypeScript, state management, and S3-based static web distribution.
                </p>
                <div className="tech-tags">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">Tailwind</span>
                  <span className="tech-tag">PostgreSQL</span>
                </div>
                <a href="#contact" className="btn-secondary" style={{ marginTop: 'auto', width: '100%' }}>
                  Enroll in Track
                </a>
              </div>

              <div className="glass-panel track-card">
                <div className="track-header">
                  <span className="track-badge" style={{ background: 'rgba(236, 72, 153, 0.2)', color: '#f472b6' }}>
                    Emerging Tech
                  </span>
                  <Cpu size={24} color="#ec4899" />
                </div>
                <h3 className="track-title">AI & Data Engineering</h3>
                <p className="track-desc">
                  Big data pipelines, vector databases, model deployment on AWS SageMaker, and integrating LLMs into modern web and mobile apps.
                </p>
                <div className="tech-tags">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">PyTorch</span>
                  <span className="tech-tag">AWS Glue</span>
                  <span className="tech-tag">Vector DB</span>
                  <span className="tech-tag">FastAPI</span>
                </div>
                <a href="#contact" className="btn-secondary" style={{ marginTop: 'auto', width: '100%' }}>
                  Enroll in Track
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Placement Readiness Calculator */}
        <section id="calculator" className="section" style={{ background: 'rgba(18, 20, 38, 0.6)' }}>
          <div className="container">
            <div className="section-header">
              <div className="section-tag">Self-Assessment</div>
              <h2 className="section-title">Placement Readiness Calculator</h2>
              <p className="section-desc">
                Evaluate your current campus hiring prospects and discover customized action steps.
              </p>
            </div>

            <div className="glass-panel calc-card">
              <div className="calc-grid">
                <form onSubmit={calculateReadiness}>
                  <div className="form-group">
                    <label className="form-label">Current College Year</label>
                    <select className="form-select" value={year} onChange={(e) => setYear(e.target.value)}>
                      <option value="1st">1st Year (Foundations)</option>
                      <option value="2nd">2nd Year (Core Skills)</option>
                      <option value="3rd">3rd Year (Interview Prep)</option>
                      <option value="4th">4th Year (Placement Drives)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Academic CGPA (Out of 10.0)</label>
                    <input
                      type="number"
                      step="0.1"
                      min="5.0"
                      max="10.0"
                      className="form-input"
                      value={cgpa}
                      onChange={(e) => setCgpa(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Coding & DSA Problems Solved</label>
                    <input
                      type="number"
                      min="0"
                      max="1000"
                      className="form-input"
                      value={dsaProblems}
                      onChange={(e) => setDsaProblems(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Cloud / DevOps Familiarity</label>
                    <select className="form-select" value={cloudSkill} onChange={(e) => setCloudSkill(e.target.value)}>
                      <option value="beginner">Beginner (S3, Basic HTML)</option>
                      <option value="intermediate">Intermediate (CloudFront, Docker, APIs)</option>
                      <option value="advanced">Advanced (Amazon EKS, Terraform, CI/CD)</option>
                    </select>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                    Calculate Readiness
                  </button>
                </form>

                <div className="calc-result-box">
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                    ESTIMATED CAMPUS READINESS
                  </div>
                  <div className="readiness-score text-gradient">
                    {calculatedScore !== null ? `${calculatedScore}%` : '85%'}
                  </div>
                  <p style={{ fontSize: '0.92rem', color: '#cbd5e1', marginTop: '12px' }}>
                    {calculatedScore !== null && calculatedScore >= 80
                      ? "High Placement Probability! You are well-positioned for product companies & premium tier packages."
                      : "Moderate Readiness. Recommended to complete 2 hands-on AWS / EKS projects and solve 50+ medium DSA problems."}
                  </p>
                  <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '8px' }}>
                    <span className="badge" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#6ee7b7', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
                      Verified by TapTap AI
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Student Testimonials */}
        <section id="placements" className="section">
          <div className="container">
            <div className="section-header">
              <div className="section-tag">Success Stories</div>
              <h2 className="section-title">Placed With Blackbucks</h2>
              <p className="section-desc">
                Thousands of students cracked their dream tech roles through Blackbucks training programs and TapTap assessments.
              </p>
            </div>

            <div className="testimonials-grid">
              <div className="glass-panel testimonial-card">
                <p style={{ fontStyle: 'italic', color: '#cbd5e1', fontSize: '0.94rem' }}>
                  "The AWS EKS and Terraform project gave me exact talking points during my technical rounds. The recruiters were amazed that an undergraduate had hands-on multi-AZ Kubernetes deployment experience."
                </p>
                <div className="student-meta">
                  <div className="student-avatar">GS</div>
                  <div>
                    <div className="student-name">G. Siddhartha</div>
                    <div className="student-role">Cloud DevOps Engineer &bull; Placed</div>
                  </div>
                </div>
              </div>

              <div className="glass-panel testimonial-card">
                <p style={{ fontStyle: 'italic', color: '#cbd5e1', fontSize: '0.94rem' }}>
                  "TapTap assessments simulated real corporate hackathon rounds. The instant score breakdown helped me identify weak spots in system design and cloud hosting."
                </p>
                <div className="student-meta">
                  <div className="student-avatar" style={{ background: 'var(--grad-surface)', border: '1px solid var(--accent-cyan)' }}>AK</div>
                  <div>
                    <div className="student-name">Aravind Kumar</div>
                    <div className="student-role">Full Stack Developer &bull; ₹12 LPA</div>
                  </div>
                </div>
              </div>

              <div className="glass-panel testimonial-card">
                <p style={{ fontStyle: 'italic', color: '#cbd5e1', fontSize: '0.94rem' }}>
                  "From understanding basic S3 buckets to writing custom Terraform scripts, Blackbucks structured curriculum turned complex cloud concepts into intuitive, fun projects."
                </p>
                <div className="student-meta">
                  <div className="student-avatar" style={{ background: 'linear-gradient(135deg, #ec4899, #8b5cf6)' }}>PR</div>
                  <div>
                    <div className="student-name">Pooja Reddy</div>
                    <div className="student-role">Site Reliability Engineer &bull; Placed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration & Contact Form */}
        <section id="contact" className="contact-section">
          <div className="container">
            <div className="glass-panel contact-card">
              <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <span className="badge" style={{ marginBottom: '12px' }}>
                  <Sparkles size={14} /> Join Next Cohort
                </span>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '8px' }}>
                  Get Started With Blackbucks
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  Register to get access to TapTap coding assessments, cloud sandboxes, and campus drive updates.
                </p>
              </div>

              {!formSubmitted ? (
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Siddhartha G."
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. student@college.edu"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">College / Institution</label>
                    <input
                      type="text"
                      placeholder="e.g. Engineering College of Technology"
                      className="form-input"
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Interested Learning Track</label>
                    <select
                      className="form-select"
                      value={formData.track}
                      onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                    >
                      <option value="Cloud & DevOps (AWS / EKS)">Cloud & DevOps (AWS / EKS / Terraform)</option>
                      <option value="Full Stack React Development">Full Stack React Development</option>
                      <option value="AI & Machine Learning">AI & Machine Learning</option>
                      <option value="Campus Recruitment Training (CRT)">Campus Recruitment Training (CRT)</option>
                    </select>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', padding: '14px' }}>
                    <Send size={18} /> Submit Registration
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                  <CheckCircle2 size={56} color="#10b981" style={{ margin: '0 auto 16px' }} />
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '8px' }}>
                    Registration Successful!
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                    Thank you, <strong style={{ color: '#fff' }}>{formData.name}</strong>! Your application for the <strong style={{ color: 'var(--accent-cyan)' }}>{formData.track}</strong> track has been logged. Our mentorship team will email access credentials shortly.
                  </p>
                  <button className="btn-secondary" onClick={() => setFormSubmitted(false)}>
                    Register Another Student
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <div className="logo-brand" style={{ marginBottom: '14px' }}>
                  <div className="logo-icon" style={{ width: '36px', height: '36px' }}>
                    <Sparkles size={20} color="#fff" />
                  </div>
                  <div>
                    <div className="logo-text" style={{ fontSize: '1.2rem' }}>BLACKBUCKS</div>
                    <div className="logo-sub">TapTap Career Engine</div>
                  </div>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', maxWidth: '320px', lineHeight: 1.6 }}>
                  Enabling next-generation tech careers through real-world cloud architectures, adaptive assessments, and verified skill certifications.
                </p>
              </div>

              <div>
                <div className="footer-col-title">Platforms</div>
                <ul className="footer-links">
                  <li><a href="#features">TapTap Assessment</a></li>
                  <li><a href="#quiz">Skill Quiz Engine</a></li>
                  <li><a href="#calculator">Readiness Check</a></li>
                  <li><a href="#tracks">Cloud Lab Blueprints</a></li>
                </ul>
              </div>

              <div>
                <div className="footer-col-title">Cloud Curricula</div>
                <ul className="footer-links">
                  <li><a href="#tracks">Amazon EKS & K8s</a></li>
                  <li><a href="#tracks">AWS S3 & CloudFront</a></li>
                  <li><a href="#tracks">Terraform Automation</a></li>
                  <li><a href="#tracks">Route 53 & SSL/TLS</a></li>
                </ul>
              </div>

              <div>
                <div className="footer-col-title">Company</div>
                <ul className="footer-links">
                  <li><a href="#placements">Placement Success</a></li>
                  <li><a href="#contact">Campus Partnerships</a></li>
                  <li><a href="#contact">Contact Support</a></li>
                  <li><a href="https://github.com/GudikandulaSiddhartha/blackbucks" target="_blank" rel="noreferrer">GitHub Repo</a></li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              <div>&copy; {new Date().getFullYear()} Blackbucks Educational Services. Built for TapTap Hackathon.</div>
              <div style={{ display: 'flex', gap: '20px' }}>
                <a href="#hero" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy Policy</a>
                <a href="#hero" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terms of Service</a>
                <a href="#hero" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Security</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
