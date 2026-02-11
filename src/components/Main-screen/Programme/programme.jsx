import React from "react";
import "./Programme.css";
import { program } from "./programme-data";
const Programme = () => {
  return (
    <div className='jobfair-container' style={{ paddingTop: "80px" }}>
      <header className='jobfair-header'>
        <h1>Programme du Job Fair</h1>
        <p>Découvrir notre programme complet et les sessions</p>
      </header>

      <section className='program-section'>
        {program.map((session, index) => (
          <div key={index} className={`session ${session.type}`}>
            <div className='session-time'>{session.time}</div>

            <div className='session-content'>
              <h2>{session.title}</h2>

              {session.speakers ? (
                session.speakers.map((speaker, i) => (
                  <div key={i} className='speaker-card'>
                    <div className='speaker-header'>
                      <h3>{speaker.name}</h3>
                      <span className='duration'>{speaker.duration}</span>
                    </div>

                    <p className='speaker-role'>
                      {speaker.role} <strong>{speaker.organization}</strong>
                    </p>

                    <p className='speaker-description'>{speaker.description}</p>
                  </div>
                ))
              ) : (
                <div className='session-description'>
                  <p>{session.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Programme;
