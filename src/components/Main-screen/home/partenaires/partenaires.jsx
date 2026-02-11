import React, { forwardRef } from "react";

const Partenaires = forwardRef((props, ref) => {
  const organizersLogos = [
    {
      name: "Nexus",
      src: "/images & logos/nexus.png",
      link: "https://www.instagram.com/nexus_fsegt/",
    },
    {
      name: "Enctus",
      src: "/images & logos/enactus.jpg",
      link: "https://www.instagram.com/enac.fsegt/?fbclid=IwY2xjawPt3UBleHRuA2FlbQIxMABicmlkETFwdzJLNW9rWGRMOW4zWTBNc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHhWiFuu6_3qDDw4Laen-M_YyMQFpzjm6CreEAUzwj7dHcNJZDbIidv_qZvPr_aem_TAWJdZRaISw8VUmoabESwA",
    },
    {
      name: "4C",
      src: "/images & logos/4c.jpg",
      link: "https://www.facebook.com/4CFSEGT",
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
    },
  ];
  return (
    <section
      id='partenaires'
      ref={ref}
      style={{
        padding: "100px 20px",
        background: "linear-gradient(180deg, #ffffff, #f3f4f6)",
      }}
    >
      <div className='organisateurs-container'>
        <h2 className='organisateurs-title'>Partenaires</h2>
        <p className='organisateurs-subtitle'>
          Les clubs et institutions Partenaires du Job Fair 2026
        </p>
        <div className='organisateurs-grid'>
          {organizersLogos.map((logo, index) => (
            <a
              key={index}
              href={logo.link}
              target='_blank'
              rel='noopener noreferrer'
              className='organisateur-card'
              id='par'
            >
              <img src={logo.src} alt={logo.name} />
              <span>{logo.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
});
export default Partenaires;
