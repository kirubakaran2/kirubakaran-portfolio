import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bgimg from '../assets/images/space.jpeg';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
        },
      }
    );

    // Animate paragraph
    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: 'top 90%',
        },
      }
    );
  }, []);

  return (
    <div
      id="about"
      className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden px-6"
    >
      {/* Background Image */}
      <img
        src={bgimg}
        alt="space background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
      />

      {/* Overlay for better readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50" />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-3xl">
        <h1
          ref={headingRef}
          className="text-white text-5xl md:text-6xl font-bold mb-6"
        >
          About Me
        </h1>
        <p
          ref={paragraphRef}
          className="text-gray-300 text-lg md:text-xl leading-relaxed font-medium"
        >
          Hello, I'm <span className="text-green-400 font-semibold">Kirubakaran</span> 👋 — a passionate developer who loves turning ideas into reality through code.
          <br /><br />
          🚀 Building SaaS products, web apps, and software solutions using modern frameworks.
          <br /><br />
          🔍 Exploring cybersecurity and emerging technologies for secure applications.
          <br /><br />
          💡 Passionate about creative problem-solving and exceptional user experiences.
        </p>
      </div>
    </div>
  );
}

export default About;
