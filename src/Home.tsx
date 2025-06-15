import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="home-bg">
      <nav className="navbar">
        <div className="logo-area">
          <span className="logo-icon" aria-label="logo">💬</span>
          <span className="site-name">English Ready</span>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#offer">Offer</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <main className="hero">
        <h1>Practice English<br />in English</h1>
        <p className="subheadline">An immersive approach for those committed<br />to consistent practice.</p>
        <button className="cta-btn">Get started <span aria-hidden>»</span></button>
      </main>
    </div>
  );
} 