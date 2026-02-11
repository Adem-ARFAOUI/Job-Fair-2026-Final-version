import React, { useState } from "react";
import "./enterprises.css";

const Enterprises = () => {
  const enterprisesData = [
    {
      name: "BNA",
      category: "Banque",
      description:
        "Banque Nationale Agricole, pilier du financement agricole et du développement économique en Tunisie.",
      website: "http://www.bna.tn/",
      logoClass: "logo-bna",
    },
    {
      name: "ATB",
      category: "Banque",
      description:
        "Arab Tunisian Bank proposant des services bancaires pour particuliers et entreprises.",
      website: "https://www.atb.tn/",
      logoClass: "logo-atb",
    },
    {
      name: "STB",
      category: "Banque",
      description:
        "Société Tunisienne de Banque, institution bancaire publique historique.",
      website: "https://www.stb.com.tn",
      logoClass: "logo-stb",
    },
    {
      name: "Attijari Bank",
      category: "Banque",
      description:
        "Banque universelle appartenant au groupe Attijariwafa Bank.",
      website: "https://www.attijaribank.com.tn",
      logoClass: "logo-attijari",
    },
    {
      name: "UIB",
      category: "Banque",
      description:
        "Union Internationale de Banques, filiale du groupe Société Générale.",
      website: "https://www.uib.com.tn",
      logoClass: "logo-uib ",
    },
    {
      name: "Zitouna Bank",
      category: "Banque",
      description:
        "Banque islamique.",
      website: "https://www.banquezitouna.com",
      logoClass: "logo-zitouna",
    },
    {
      name: "BH",
      category: "Banque",
      description:
        "Banque publique tunisienne spécialisée dans le financement de l’habitat et des projets immobiliers.",
      website: "https://www.bh-bank.tn",
      logoClass: "logo-bh",
    },
    {
      name: "BH Leasing",
      category: "Finance",
      description:
        "Société de leasing offrant des solutions de financement pour entreprises.",
      website: "https://www.bhleasing.tn/",
      logoClass: "logo-bh-leasing",
    },

    {
      name: "Enda Tao",
      category: "Finance",
      description:
        "Établissement de paiement offrant une solution mobile pour favoriser l’inclusion financière.",
      website: "https://www.endatao.tn/",
      logoClass: "logo-endatoa",
    },

    {
      name: "CDC",
      category: "Finance",
      description: "Caisse des dépots et consignations.",
      website: "https://www.cdc.tn/fr",
      logoClass: "logo-cdc",
    },

    {
      name: "KPMG",
      category: "Audit & Consulting",
      description:
        "Cabinet international spécialisé en audit, conseil et accompagnement des entreprises.",
      website: "https://kpmg.com/tn",
      logoClass: "logo-kpmg",
    },

    {
      name: "PwC",
      category: "Audit & Consulting",
      description:
        "Cabinet mondial d’audit et de conseil aidant les organisations à améliorer leur performance.",
      website: "https://tunisie.pwc.fr/fr/",
      logoClass: "logo-pwc",
    },

    {
      name: "TGS-CWG",
      category: "Audit & Consulting",
      description:
        "Réseau mondial de cabinets indépendants offrant audit, conseil et expertise.",
      website: "https://tgs-global.com/bureaux/office-tunis-tgs-cwg/",
      logoClass: "logo-tgs",
    },

    {
      name: "Consulting Management & Governance (CMG)",
      category: "Audit & Consulting",
      description:
        "Cabinet de conseil spécialisé en gouvernance et management stratégique.",

      logoClass: "logo-cmg",
    },
    {
      name: "Audit & Management Skills (CMG)",
      category: "Audit & Consulting",
      description:
        "Cabinet offrant des services d’audit, de formation et de développement des compétences.",

      logoClass: "logo-ams",
    },

    {
      name: "AISE",
      category: "Audit & Consulting",
      description:
        "Cabinet de conseil spécialisé en communication institutionnelle et stratégique.",
      website: "https://aise.tn/",
      logoClass: "logo-asie",
    },

    {
      name: "Medianet",
      category: "IT & Digital",
      description:
        "Entreprise tunisienne spécialisée en développement web et solutions digitales.",
      website: "https://www.medianet.tn",
      logoClass: "logo-medianet",
    },
    {
      name: "TICDCE",
      category: "IT & Digital",
      description:
        "Centre dédié aux technologies de l’information et à la transformation digitale.",
      website: "https://www.facebook.com/TICDCE2018?locale=fr_FR",
      logoClass: "logo-ticdce",
    },
    {
      name: "Digital Bundel",
      category: "IT & Digital",
      description:
        "Entreprise fournissant des solutions digitales pour les entreprises et les startups.",
      website: "https://digitalbundle.tn/",
      logoClass: "logo-db",
    },
    {
      name: "Wimbee",
      category: "IT & Digital",
      description:
        "Solution digitale axée sur la performance commerciale et marketing.",
      website: "https://www.wimbeetech.com/fr",
      logoClass: "logo-wimbee",
    },
    {
      name: "Becooder",
      category: "IT & Digital",
      description:
        "Entreprise spécialisée en développement logiciel et solutions web modernes.",
      website: "https://www.beecoders.tn/",
      logoClass: "logo-becooder",
    },
    {
      name: "DIDON DATA",
      category: "IT & Digital",
      description:
        "Entreprise spécialisée en data, systèmes d’information et solutions analytiques.",

      logoClass: "logo-didon-data",
    },
    {
      name: "GluGoConnect",
      category: "IT & Digital",
      description:
        "Startup proposant des solutions de connectivité et de services numériques.",
      website: "https://glugoconnect.com",
      logoClass: "logo-glugo",
    },
    {
      name: "Téléperformance",
      category: "Services",
      description:
        "Leader mondial de l’externalisation des services de relation client.",
      website: "https://www.facebook.com/TeleperformanceTunisieOfficielle/",
      logoClass: "logo-telep",
    },
    {
      name: "Auto Sans Risque",
      category: "Services",
      description:
        "Plateforme médiatique proposant des actualités et conseils automobiles..",
      website: "https://www.auto-sans-risque.com/",
      logoClass: "logo-auto-sans-risque",
    },
    {
      name: "La Poste Tunisienne",
      category: "Services",
      description:
        "Institution publique offrant des services postaux et financiers.",
      website: "https://www.poste.tn",
      logoClass: "logo-poste",
    },

    {
      name: "PGS International",
      category: "Industrie",
      description:
        "Entreprise industrielle spécialisée dans l’automatisation et les solutions pour l’énergie.",
      website: "https://pgsintl.com/",
      logoClass: "logo-pgs",
    },
    {
      name: "LBM",
      category: "Industrie",
      description:
        "Entreprise tunisienne spécialisée dans la fabrication de biscuits et produits alimentaires.",
      website: "https://lbm-industrie.com.tn/",
      logoClass: "logo-lbm",
    },
    {
      name: "Nespresso",
      category: "Industrie",
      description: "Marque internationale spécialisée dans le café premium.",
      website: "https://www.nespresso.com",
      logoClass: "logo-nespresso",
    },
    {
      name: "Wall Street English",
      category: "Formation",
      description: "Centre de formation spécialisé en anglais professionnel.",
      website: "https://www.wallstreetenglish.com",
      logoClass: "logo-wse",
    },

    {
      name: "Irys Assurance",
      category: "Assurance",
      description:
        "Compagnie d’assurance proposant des solutions pour particuliers et professionnels.",
      website: "https://www.iryscourtage.com.tn/",
      logoClass: "logo-iris",
    },
    {
      name: "MAE Assurance",
      category: "Assurance",
      description:
        "MAE Assurance propose une large gamme de solutions pour protéger les particuliers, les professionnels et les associations.",
      website: "https://www.mae.tn/",
      logoClass: "logo-mae",
    },

    {
      name: "Tunisie Telecom",
      category: "Télécommunications",
      description:
        "Opérateur national de télécommunications et services internet.",
      website: "https://www.tunisietelecom.tn",
      logoClass: "logo-telecom",
    },

    {
      name: "AT-ODD",
      category: "Association",
      description:
        "Association œuvrant pour la promotion des objectifs de développement durable en Tunisie.",
      website: "https://atodd.tn",
      logoClass: "logo-atodd",
    },
    {
      name: "Association des Femmes Arabes Spécialisées",
      category: "Association",
      description:
        "Organisation soutenant l’autonomisation et le leadership des femmes arabes.",

      logoClass: "logo-afas",
    },
    {
      name: "Trah",
      category: "Online Shop",
      description: "Boutique de cadeaux personnalisés .",
      website: "https://www.instagram.com/trahshop_/",
      logoClass: "logo-trah",
    },
  ];

  // hadhaya fazet el filtre par secteur :

  const categories = [
    "All",
    "Banque",
    "Finance",
    "Audit & Consulting",
    "IT & Digital",
    "Services",
    "Industrie",
    "Assurance",
    "Télécommunications",
    "Formation",
    "Association",
    "Online Shop",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEnterprises =
    selectedCategory === "All"
      ? enterprisesData
      : enterprisesData.filter((e) => e.category === selectedCategory);

  return (
    <>
      <section className='enterprises' id='enterprises'>
        <div className='enterprises-wrapper'>
          <div className='enterprises-header'>
            <h2>Entreprises Participantes</h2>
            <p>
              Découvrez les entreprises partenaires participant au Job Fair 2026
            </p>

            <select
              className='enterprise-filter'
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className='enterprises-grid'>
            {filteredEnterprises.map((enterprise, index) => (
              <div
                key={enterprise.name}
                className={`enterprise-card cat-${enterprise.category
                  .replace(/&/g, "and")
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <a
                  href={enterprise.website}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='enterprise-logo'
                >
                  <div className={enterprise.logoClass} id='img' />
                </a>
                <h3>{enterprise.name}</h3>
                <p>{enterprise.description}</p>
                <span className='enterprise-category'>
                  {enterprise.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Enterprises;
