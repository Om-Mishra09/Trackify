import React from 'react';
import '../css/home.css';
import { Typewriter } from 'react-simple-typewriter';
import Features from './Features';
import AboutUs from './AboutUs';


const Home = () => {
  return (
    <>
    <div className="home-container">
      <video
        className="bg-video"
        src="/videoplayback_trackify.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="content-overlay">
        {/* <Navbar /> */}

        <div className="typing-center">
          <h1 className="typing-text">
            <Typewriter
              words={['Welcome to Trackify!', 'Track Smarter!', 'Your progress Manager!']}
              loop={0} // 0 = Infinite
              cursor
              cursorStyle="|"
              typeSpeed={115}
              deleteSpeed={115}
              delaySpeed={1000}
            />
          </h1>
          <p className="fixed-subtext">Track academic progress. Visualize success. Empower students.</p>
        </div>
      </div>
    </div>
    <div className="scroll-down-arrow">↓</div>

    <Features />
    <AboutUs />
    </>
  );
};

export default Home;


