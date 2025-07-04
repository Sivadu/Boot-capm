import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Hero />
      <About />
      <Curriculum />
      <Contact />
    </>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>2-Week Web Development Bootcamp for Kids</h1>
          <h3>For ages under 18 – Build your first website in just 14 days!</h3>
          <a
            href="https://forms.gle/8LD78NVWpM5Pg3jC9"
            className="btn btn-light mt-3 fs-3git hero-button"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
}


function About() {
  return (

    <section style={{ backgroundColor: "#000" }} className="text-white py-5" id="about">
      <div className="container text-center">
        <h2 className="mb-4 fw-bold text-white">🌟 About the Bootcamp</h2>

        <div className="about-glassbox mx-auto">
          <p className="mb-3 fs-5">🎯 <strong>Designed for Kids Under 18</strong> – No experience needed!</p>
          <p className="mb-3 fs-5">🛠️ Over <strong>2 exciting weeks</strong>, you'll explore how websites are built from scratch.</p>
          <p className="mb-3 fs-5">
            💡 Learn <span className="text-info">HTML</span>, <span className="text-info">CSS</span>, <span className="text-info">Bootstrap</span>, and <span className="text-info">JavaScript</span> with fun examples.
          </p>
          <p className="mb-3 fs-5">
            🚀 End with your <strong>own website</strong> hosted on <span className="text-success">GitHub Pages</span>.
          </p>
          <p className="about-note mb-3 f5">🧒 Perfect for beginners. Fun. Creative. Interactive!</p>
        </div>
      </div>
    </section>
  );
}


function Curriculum() {
  const topics = [
    {
      title: "HTML Basics – Structure & Tags",
      icon: "🌐",
      description: "Learn how to build the backbone of every webpage using tags, headings, lists, and more.",
    },
    {
      title: "CSS Styling – Colors, Fonts & Layout",
      icon: "🎨",
      description: "Make your website beautiful using colors, fonts, backgrounds, borders, and page layouts.",
    },
    {
      title: "Bootstrap – Make it Responsive",
      icon: "📱",
      description: "Use Bootstrap to make your websites look great on phones, tablets, and computers.",
    },
    {
      title: "JavaScript – Logic & Interaction",
      icon: "⚙️",
      description: "Add real interaction like buttons, image sliders, and input responses with JavaScript.",
    },
    {
      title: "What is GitHub? – Live Examples",
      icon: "💻",
      description: "Learn how to save, share, and manage code online using GitHub with real-time examples.",
    },
    {
      title: "Final Project – Host Your Website In GitHub",
      icon: "🚀",
      description: "Create and publish your own mini website from scratch using everything you've learned!",
    },
  ];

  return (
    <section id="curriculum" className="py-5 text-white bg-black">
      <div className="container">
        <h2 className="text-center mb-5">📘 What You’ll Learn</h2>
        <div className="row">
          {topics.map((topic, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="curriculum-card p-4 text-center h-100 shadow-sm rounded">
                <div className="curriculum-icon display-4 mb-3">{topic.icon}</div>
                <h5 className="fw-bold">{topic.title}</h5>
                <p className="text-white">{topic.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Contact() {
  return (
    <section className="contact-section py-5" id="contact">
      <div className="container text-white text-center">
        <h2 className="mb-4 fw-bold">📞 Have Questions? Let’s Talk!</h2>
        <p className="lead mb-4">
          Whether you're a parent or student, feel free to reach out. We’d love to help!
        </p>

        {/* ✅ Larger WhatsApp Button */}
        <a
          href="https://wa.me/8089432421"
          className="btn btn-success fw-bold shadow mb-4"
          style={{
            padding: '14px 36px',
            fontSize: '1.2rem',
            borderRadius: '8px'
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          📲 Chat with us on WhatsApp
        </a>

        <p className="mt-3" style={{ fontSize: '1.4rem' }}>
  📧 Email us:{" "}
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=meenakshy2421@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-warning fw-semibold"
  >
    meenakshy2421@gmail.com
  </a>
</p>

      </div>
    </section>
  );
}


export default App;
