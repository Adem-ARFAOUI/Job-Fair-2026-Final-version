import React, { forwardRef } from "react";
import "./organisateurs.css";

// Tu ajoutes / modifies les logos ici

const Organisateurs = forwardRef((props, ref) => {


  return (
    <section
      className='organisateurs'
      id='organisateurs'
      ref={ref}
      style={{ padding: "100px 20px" }}
    >
      <div>
        <h2 className='organisateurs-title'>Organisateur</h2>
        <p className='organisateurs-subtitle'>Organisateur du Job Fair 2026</p>
        <div className='organisateurs-grid' style={{ marginBottom: "50px" }}>
          <a
            href='https://www.facebook.com/direction.stagefsegt.1'
            target='_blank'
            className='organisateur-card'
            id='org'
          >
            <img src='/images & logos/dds-logo.png' alt='logo' />
            <h3>Direction des Stages</h3>
            <span>Organisateur</span>
          </a>
        </div>
      </div>

      <div>
        <h2 className='organisateurs-title'>Partenaire</h2>
        <p className='organisateurs-subtitle'>Partenaire du Job Fair 2026</p>
        <div className='organisateurs-grid' style={{ marginBottom: "50px" }}>
          <a
            href='https://www.facebook.com/4CFSEGT'
            target='_blank'
            className='organisateur-card'
            id='org'
          >
            <img src='/images & logos/4c.jpg' alt='logo' />
            <h3>Direction des Stages</h3>
            <span>Organisateur</span>
          </a>
        </div>
      </div>
      
    </section>
  );
});

export default Organisateurs;
