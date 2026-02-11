import React from "react";
import "./speakers.css";
import { speakers } from "./speakers.js";

const Speakers = () => {
  return (
    <section id='speakers' className='speakers'>
      <h2 className='speakers-title' style={{ marginTop: "50px" }}>
        Nos Speakers
      </h2>
      <p className='speakers-subtitle'>
        Des experts qui façonnent l’avenir du travail et de l’innovation
      </p>

      <div className='speakers-grid'>
        {speakers.map((speaker) => (
          <div className='speaker-card' key={speaker.id}>
            <div className='speaker-image-wrapper'>
              <img
                src={speaker.image}
                alt={speaker.name}
                className='speaker-image'
              />
            </div>

            <div className='speaker-content'>
              <h3>{speaker.name}</h3>
              <p className='speaker-topic'> {speaker.topic} </p>

              <ul>
                {speaker.roles.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;
