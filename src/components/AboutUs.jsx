import React from "react";
import "../css/aboutus.css"; 

const AboutUs = () => {
  return (
    <div className="about-section" id="about-section">
      <div className="about-bg" />
      <h1 className="about-title">About Us</h1>
      <p className="about-intro">
        Welcome to Trackify — a platform built to empower students and educators with data-driven insights.
      </p>

      <div className="about-content">
  <h2>🎯 My Purpose</h2>
  <p>
    I built this platform to help students understand their academic performance through clear insights and clean design. By turning data into simple, visual feedback, I aim to make learning more personal, focused, and motivating.
  </p>

  <h2>🚀 What This Platform Offers</h2>
  <ul>
    <li>📊 Interactive charts for subject-wise and test-wise progress</li>
    <li>🎯 Key takeaways on strengths, weaknesses, and growth areas</li>
    <li>📝 Printable reports for offline sharing and documentation</li>
    <li>📱 A responsive layout that works across all devices</li>
  </ul>

  <h2>👨‍💻 About Me</h2>
  <p>
    I'm a passionate developer and student who understands the struggle of tracking academic growth. I designed this tool to bridge that gap—making it easier to stay organized, focused, and ahead.
  </p>

  <h2>🔮 What’s Coming Next</h2>
  <p>
    I'm working on adding AI-powered performance predictions, smart study recommendations, and real-time integration with school systems to take this platform to the next level.
  </p>
</div>

    </div>
  );
};

export default AboutUs;
