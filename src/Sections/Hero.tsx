import React from 'react';
import Background from '../components/Background';

function Hero() {

  return (

    <section className="relative z-10 h-screen flex flex-col items-center justify-center text-center pointer-events:none">
      {/* Heading */}
      <h1 className="font-heading text-[11vw] leading-none">
        Kirubakaran
        <span className="text-green"></span>
        <span className="material-symbols-outlined align-middle text-[1.2em]">
          lightning_stand
        </span>
      </h1>

      {/* Paragraph */}
      <p
        className="font-semibold text-center mt-8 text-[4vw] md:text-[1.2rem] text-gray-300 max-w-2xl leading-relaxed px-4"
      >
        Crafting digital experiences that blend innovation with elegant{" "}
        <span className="text-green">Solutions.</span>
        <br />
        Turning complex ideas into seamless reality.
      </p>
      <button onClick={() => window.open('https://drive.google.com/file/d/1BJ8Si2LYy3EPj7SSTUsWX7jdmqeu5rLj/view?usp=drive_link', '_blank')} className='pointer-events-auto z-80 mt-2 text-orange px-10 py-2 border-2 bg-transparent rounded-full font-semibold hover:bg-black hover:text-white transition flex items-center gap-2'>Download CV</button>
    </section>
  );
}

export default Hero;
