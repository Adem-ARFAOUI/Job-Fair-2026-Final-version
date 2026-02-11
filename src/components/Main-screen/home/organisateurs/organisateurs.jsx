import React, { forwardRef } from "react";
import "./organisateurs.css";

// Tu ajoutes / modifies les logos ici

const Organisateurs = forwardRef((props, ref) => {
  const organisateursData = [
    {
      name: "Apecialized Arab Women Association",
      logo: "/images & logos/afas-logo.jpg",
      website: "https://www.facebook.com/profile.php?id=100072063352431",
      categorie: "Association",
    },
    {
      name: "Club Ambassadeurs Vesos TN | FSEGT",
      logo: "/images & logos/sos-logo.png",
      website:
        "https://www.instagram.com/clubs.ambassadeurs.sos.village?igsh=YndieGl4dmRsbGgz",
      categorie: "Association",
      id: "sos",
    },
    {
      name: "Association tunisienne pour les objectifs de développement durable",
      logo: "/images & logos/ATODD.png",
      website: "https://atodd.tn",
      categorie: "Association",
    },
  ];

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

      <div style={{ marginTop: "100px" }}>
        <h2 className='organisateurs-title'>Associations</h2>
        <p className='organisateurs-subtitle'>
          Associations participant au Job Fair 2026
        </p>
        <div className='organisateurs-grid' style={{ marginBottom: "50px" }}>
          {organisateursData.map((organisateur) => (
            <a
              href={organisateur.website}
              target='_blank'
              className='organisateur-card'
            >
              <img src={organisateur.logo} alt='logo' id={organisateur.id} />
              <h3>{organisateur.name}</h3>
              <span>{organisateur.categorie}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Organisateurs;
