import React, { forwardRef } from "react";

const Partenaires = forwardRef((props, ref) => {
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
    },
  ];
  const organizersLogos = [
    {
      name: "Nexus",
      src: "/images & logos/nexus.png",
      link: "https://www.instagram.com/nexus_fsegt/",
      categorie: "Association",
    },
    {
      name: "Enactus",
      src: "/images & logos/enactus.jpg",
      link: "https://www.instagram.com/enac.fsegt/?fbclid=IwY2xjawPt3UBleHRuA2FlbQIxMABicmlkETFwdzJLNW9rWGRMOW4zWTBNc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHhWiFuu6_3qDDw4Laen-M_YyMQFpzjm6CreEAUzwj7dHcNJZDbIidv_qZvPr_aem_TAWJdZRaISw8VUmoabESwA",
    },
    {
      name: "JCI",
      src: "/images & logos/jci-logo.png",
      link: "https://www.facebook.com/JcietudiantsFSEGT",
    },
    {
      name: "ASC",
      src: "/images & logos/asc1.png",
      link: "https://www.facebook.com/profile.php?id=100063620404645",
      id: "asc",
    },
  ];
  return (
    <section
      id='partenaires'
      ref={ref}
      style={{
        padding: "0px 20px",
        background: "background: linear-gradient(180deg, #ffffff, #f3f4f6);",
      }}
    >
      <div className='organisateurs-container'>
        <div className='organisateurs-grid'>
          {organizersLogos.map((logo, index) => (
            <a
              key={index}
              href={logo.link}
              target='_blank'
              rel='noopener noreferrer'
              className='organisateur-card'
              id={logo.id}
            >
              <img src={logo.src} alt={logo.name} />
              <span>{logo.name}</span>
            </a>
          ))}
        </div>
      </div>
      <div style={{ marginTop: "100px" }}>
        <h2 className='organisateurs-title'>Associations</h2>
        <p className='organisateurs-subtitle'>
          Associations participant au Job Fair 2026
        </p>
        <div className='organisateurs-grid' style={{ marginBottom: "100px" }}>
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
export default Partenaires;
