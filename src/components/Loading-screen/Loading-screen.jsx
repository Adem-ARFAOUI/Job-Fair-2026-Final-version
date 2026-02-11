import React, { useEffect } from "react";
import "./Loading-screen.css";

const LoadingScreen = ({ onFinish }) => {
  useEffect(() => {
    const elements = [
      { el: document.querySelector(".main-icon"), delay: 0 },
      { el: document.getElementById("loading-parag"), delay: 900 },
      { el: document.getElementById("loading-text"), delay: 1600 },
      { el: document.querySelector(".neon-line"), delay: 1900 },
      { el: document.querySelector(".tagline"), delay: 2300 },
      { el: document.querySelector(".org-logos"), delay: 3000 },
      { el: document.getElementById("Designer-name"), delay: 4800 },
    ];

    elements.forEach(({ el, delay }) => {
      setTimeout(() => {
        el?.classList.remove("hidden");
        el?.classList.add("reveal");
      }, delay);
    });

    setTimeout(() => {
      document.querySelector(".loading-screen").classList.add("fade-out");

      setTimeout(() => {
        onFinish();
      }, 700);
    }, 6500);
  }, [onFinish]);

  return (
    <div className='loading-screen'>
      {/* Background */}
      <div className='bg-image'></div>
      <div className='bg-overlay'></div>

      {/* Glass card */}
      <div className='loading-content glass'>
        <img
          src='/images & logos/nexus.png'
          alt='Nexus IT Club'
          className='main-icon hidden'
        />

        <p id='loading-parag' className='hidden subtitle'>
          NEXUS IT CLUB PRESENTS
        </p>

        <h1 id='loading-text' className='hidden title glow'>
          JOB FAIR 2026
        </h1>

        <div className='neon-line hidden'></div>

        <p className='tagline hidden'>Where Talent Meets Opportunity</p>

        <div className='org-logos hidden'>
          <img src='/images & logos/utm-logo.png' alt='UTM' />
          <img src='/images & logos/dds-logo.png' alt='DDS' />
          <img src='/images & logos/fsegt-logo.jpg' alt='FSEGT' />
        </div>

        <p id='Designer-name' className='hidden designer'>
          Designed by <span>Adem Arfaoui</span>
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
