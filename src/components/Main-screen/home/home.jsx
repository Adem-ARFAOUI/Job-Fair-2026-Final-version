import React, { useEffect } from "react";
import "./home.css";
import Organisateurs from "./organisateurs/organisateurs";
import Sponsors from "./Sponsors/sponsors";
import Partenaires from "./Partenaires/partenaires";

const Home = ({ homeRefs, homeTarget, videoSrc, setActiveSection }) => {
  useEffect(() => {
    if (homeTarget && homeRefs[homeTarget]?.current) {
      homeRefs[homeTarget].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [homeTarget]);

  return (
    <>
      <section className='home' id='home'>
        {/* Video background */}
        <video className='home-video' autoPlay loop muted playsInline>
          <source src={videoSrc} type='video/mp4' />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className='home-overlay'></div>

        {/* Content */}
        <div className='home-content'>
          <h1 className='home-title'>
            Pivoting your Career
            <br />
            <span>with AI and Sustainability</span>
          </h1>
          <p className='home-subtitle'>12 février 2026 • Amphi 2 FSEGT</p>
          <div className='home-actions'>
            <a
              href='#'
              className='btn-primary'
              onClick={(e) => {
                e.preventDefault();
                setActiveSection("entreprises");
              }}
            >
              Découvrir les entreprises
            </a>
          </div>
        </div>
      </section>
      <Organisateurs ref={homeRefs.organisateurs} />
      <Partenaires ref={homeRefs.partenaires} />
      <Sponsors ref={homeRefs.sponsors} />
    </>
  );
};

export default Home;
