import React from 'react';
import Background from '../components/Background';

function Hero() {

  return (

    <section className="relative z-10 h-screen flex flex-col items-center justify-center text-center">
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
    </section>
  );
}

export default Hero;
