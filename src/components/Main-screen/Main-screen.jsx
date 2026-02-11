import React from "react";
import { useRef, useState } from "react";
import Header from "./Header/Header";
import Home from "./home/home";
import Enterprises from "./enterprises/enterprises.jsx";
import Contact from "./contact/Contact";
import Programme from "./Programme/programme";
import Speakers from "./Speakers/speakers.jsx";

const MainScreen = () => {
  // const sponsorsRef = useRef(null);
  // const homeRef = useRef(null);
  // const enterprisesRef = useRef(null);
  // const organisateursRef = useRef(null);
  // const contactRef = useRef(null);*

  const [activeSection, setActiveSection] = useState("home");
  const [homeTarget, setHomeTarget] = useState(null);
  const homeRefs = {
    organisateurs: useRef(null),
    partenaires: useRef(null),
    sponsors: useRef(null),
  };

  return (
    <>
      {/* <Header
        sections={{
          home: homeRef,
          enterprises: enterprisesRef,
          organisateurs: organisateursRef,
          contact: contactRef,
        }}
      />
      <main>
        <section ref={homeRef} id='home'>
          <Home />
        </section>
        {/* <section ref={enterprisesRef} id='enterprises'>
          <Enterprises />
        </section> */}
      {/*<section ref={organisateursRef} id='organisateurs'>
          <Organisateurs />
        </section>
        <section ref={contactRef} id='contact'>
          <Contact />
        </section>
      </main> */}
      <div>
        {/* Header avec passage de la fonction pour changer la section */}
        <Header
          setActiveSection={setActiveSection}
          activeSection={activeSection}
          setHomeTarget={setHomeTarget}
          homeRefs={homeRefs}
        />

        {/* Rendu conditionnel des sections */}
        {activeSection === "home" && (
          <Home
            homeRefs={homeRefs}
            homeTarget={homeTarget}
            videoSrc='/images & logos/job-vid.mp4'
            setActiveSection={setActiveSection}
          />
        )}
        {activeSection === "entreprises" && <Enterprises />}
        {activeSection === "speakers" && <Speakers />}
        {activeSection === "programme" && <Programme />}

        {/* Footer commun */}
        <Contact />
      </div>
    </>
  );
};
export default MainScreen;
