// import animejsPlugins from "../Script/animeJs";
import anime from "animejs/lib/anime.es.js";
// Default theme
import "@splidejs/splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { animejsPlugins } from "../Script/animeJs";
// or only core styles
import "@splidejs/splide/css/core";
import { useEffect, useState } from "react";
import { animateActif } from "../Store/Anim";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import ModalContact from "./ModalContact";
import screenLocavores1 from "../Images/locavores-screen1.png";
import screenLocavores2 from "../Images/locavores-screen-2.png";
import screenAutosign1 from "../Images/Autosignature-screen1.png";
import screenAutosign2 from "../Images/Autosignature-screen4.png";
import screenAutosign3 from "../Images/Autosignature-screen3.png";

import screenAuto1 from "../Images/Autoecole-screen1.png";
import screenAuto2 from "../Images/Autoecole-screen2.png";
import screenAuto3 from "../Images/Autoecole-screen3.png";

export default function HomeNotAanim() {
  const [stateLoad, setStateLoad] = useState();

  useEffect(() => {
    setStateLoad(1);
    if (animateActif.get()) {
      window.location.reload();
    }
    animateActif.set(false);
  }, []);

  function lightning() {
    var element = document.body;
    element.classList.toggle("light-mode");
  }

  useEffect(() => {
    const panels = document.querySelectorAll(".option");

    panels.forEach((panel) => {
      panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
      });
    });

    function removeActiveClasses() {
      panels.forEach((panel) => {
        panel.classList.remove("active");
      });
    }

    var acc = document.getElementsByClassName("faqs-title");
    var i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel2 = this.nextElementSibling;

        if (panel2.style.maxHeight) {
          panel2.style.maxHeight = null;
        } else {
          panel2.style.maxHeight = panel2.scrollHeight + "px";
        }
      });
    }
  }, [stateLoad]);

  return (
    <>
      <main>
        <label className="switch">
          <input type="checkbox" onClick={lightning} />
          <span></span>
        </label>
        <div className="sections">
          <div className="section banner">
            <section className="wrapper">
              <div className="text-container">
                <h3 className="m-txt">Bienvenue sur mon portfolio</h3>
                <h1 className="xl-heading-txt xl-txt">
                  Salut, je suis <span>Lorenzo Nuissier</span> Developpeur.
                </h1>
                <h2 className="s-txt">
                  Un début en 2018 avec peu de connaissances en informatique,
                  mais une passion dévorante pour apprendre et grandir. Voici
                  mon portfolio, un voyage à travers mes aventures numériques
                  jusqu'à aujourd'hui.
                </h2>
                <ModalContact />
              </div>
              <div className="img-container">
                <Player
                  autoplay
                  loop
                  src="./coder2.json"
                  style={{ height: "auto", width: "80%" }}
                />{" "}
              </div>
            </section>
          </div>
          <div className="section">
            <section className="wrapper section-card">
              <div className="text-container">
                <h2 className="xl-txt">Mon parcours</h2>
                <p className="small-txt">
                  Découvrez mes experiences dans l'informatique
                </p>
                <span className="background-txt">Experiences</span>
              </div>

              <div className="faqs-grid">
                <div className="faqs-item ">
                  <a className="faqs-title" href="#custom">
                    2023
                  </a>

                  <div className="faqs-content">
                    <div className="faqs-content-inside">
                      <p>
                        Bon pour l'instant cette partie n'est pas très remplie,
                        mais à la fin de l'année cette section débordera !
                        <br />
                        Cette année j'ai réalisé ce site, fais en React et avec
                        Firebase pour la base de données présente dans la page
                        "Projet".
                        <br />
                        <span>
                          <br />A l'ecole:
                        </span>
                        <br />
                        Utilisation de firebase
                        <br />
                        Projet React Native
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="faqs-item ">
                  <a className="faqs-title" href="#custom">
                    2022
                  </a>

                  <div className="faqs-content">
                    <div className="faqs-content-inside">
                      <p>
                        <span>En entreprise :</span>
                        <br />
                        Application en React, Node.js Mongo DB en base de donnée
                        <br />
                        Application Svelte et Sveltekit Mongo DB en base de
                        donnée
                        <br />
                        Création de plusieurs sites Wordpress
                        <br />
                        Conception de chartes graphiques et de maquettes
                        <br />
                        Déploiement sur serveur nginx
                        <br />
                        <br />
                        <br />
                        <span>A l'ecole:</span>
                        <br />
                        Principes de conception de bases de données
                        <br />
                        Java : middleware, persistance des données avec
                        hibernate, Web Services SOAP et REST
                        <br />
                        Cours et projet en React.js
                        <br />
                        Développement Android Java
                        <br />
                      </p>
                    </div>
                  </div>
                </div>

                <div className="faqs-item ">
                  <a className="faqs-title" href="#custom">
                    2021
                  </a>

                  <div className="faqs-content">
                    <div className="faqs-content-inside">
                      <p>
                        <span>En entreprise :</span>
                        <br />
                        Réalisations de cahier des charges
                        <br />
                        Gestion de projet
                        <br />
                        Créations de sites web wordpress (divi et elementor)
                        <br />
                        Conception de chartes graphiques et maquettages figma
                        <br />
                      </p>
                      <br />
                      <p>
                        <span>A l'ecole:</span>
                        <br />
                        Principes de conception de bases de données
                        <br />
                        Design de site (UX/UI)
                        <br />
                        SEO
                        <br />
                        Mysql
                        <br />
                        Javascript et Jquery
                        <br />
                        Cours + projets en Symfony
                        <br />
                      </p>
                    </div>
                  </div>
                </div>

                <div className="faqs-item ">
                  <a className="faqs-title" href="#custom">
                    2020
                  </a>

                  <div className="faqs-content">
                    <div className="faqs-content-inside">
                      <p>
                        Je travaille en tant qu'opérateur de production et mes
                        tâches incluent le traitement informatique des commandes
                        et la gestion des stocks à l'aide de différents
                        logiciels.
                        <br />
                      </p>
                      <p>
                        <br />
                        <span>À l'ecole:</span>
                        <br />
                        Analyse et conception UML
                        <br />
                        Design patterns et architectures applicatives
                        <br />
                        Méthodes Agiles
                        <br />
                        Gestion de projets ( Méthodes Agiles, Scrum,... )
                        <br />
                        Base de données SQL
                        <br />
                        Développement logiciel Java
                        <br />
                        HTML / CSS, Scss et Bootstrap
                        <br />
                      </p>
                    </div>
                  </div>
                </div>

                <div className="faqs-item ">
                  <a className="faqs-title" href="#custom">
                    2019
                  </a>

                  <div className="faqs-content">
                    <div className="faqs-content-inside">
                      <p>
                        Au cours de ma carrière, j'ai travaillé en tant
                        qu'intérimaire pendant plusieurs mois. Cette expérience
                        m'a donné une bonne compréhension du monde professionnel
                        et m'a permis de développer mes compétences en matière
                        de travail en équipe et de communication. <br />
                        <br />
                        Après cela, j'ai suivi une formation de 2 mois pour
                        apprendre les bases du web et de l'informatique. Cette
                        formation m'a fourni les connaissances nécessaires pour
                        comprendre les technologies modernes et pour développer
                        ma culture informatique. <br />
                        <br />
                        Enfin, j'ai continué à me former en autodidacte en
                        suivant des cours en ligne, en regardant des vidéos et
                        en créant mon premier site web en utilisant HTML et CSS.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="faqs-item ">
                  <a className="faqs-title" href="#custom">
                    2018 et avant
                  </a>

                  <div className="faqs-content">
                    <div className="faqs-content-inside">
                      <p>
                        En 2015 j'obtiens mon bac STMG (Baccalauréat sciences et
                        technologies du management et de la gestion) spécialité
                        marketing.
                        <br />
                        Je souhaitais poursuivre mes études en faisant un BTS
                        MUC en alternance mais je me rends compte que ce n'est
                        pas ce qui me plaît, je décide de faire quelques jobs
                        comme (équipier polyvalent, adjoint technique, street
                        marketing, etc…) en ayant toujours en tête une reprise
                        d'études.
                        <br />
                        Afin d'être sûr de me diriger dans la bonne branche,
                        j'ai fait un POP (parcours d'orientation personnalisé) à
                        la Mission locale.
                        <br />
                        <br />
                        Le bilan de mes compétences m'a aidé à construire mon
                        projet professionnel et me conforte dans le choix du
                        métier de développeur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="options">
                <div className="option active">
                  <div className="shadow"></div>
                  <div className="label">
                    <div className="icon">
                      <span className=" txt-black">2023</span>
                    </div>
                    <div className="info">
                      <div className="main">Alternance</div>
                      <div className="sub">
                        <p>
                          Bon pour l'instant pas grand chose, mais à la fin de
                          l'année cette section debordera !
                          <br />
                          <span>
                            <br />A l'ecole:
                          </span>
                          <br />
                          Utilisation de firebase
                          <br />
                          Projet React Native
                          <br />
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="option">
                  <div className="shadow"></div>
                  <div className="label">
                    <div className="icon">
                      <span className=" txt-black">2022</span>
                    </div>
                    <div className="info">
                      <div className="main">Alternance</div>
                      <div className="sub">
                        <p>
                          <span>En entreprise :</span>
                          <br />
                          Application en React, Node.js Mongo DB en base de
                          donnée
                          <br />
                          Application Svelte et Sveltekit Mongo DB en base de
                          donnée
                          <br />
                          Création de plusieurs sites Wordpress
                          <br />
                          Conception de chartes graphiques et de maquettes
                          <br />
                          Déploiement sur serveur nginx
                          <br />
                          <br />
                          <span>A l'ecole:</span>
                          <br />
                          Principes de conception de bases de données
                          <br />
                          Java : middleware, persistance des données avec
                          hibernate, Web Services SOAP et REST
                          <br />
                          Cours et projet en React.js
                          <br />
                          Développement Android Java
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="option">
                  <div className="shadow"></div>
                  <div className="label">
                    <div className="icon">
                      <span className=" txt-black">2021</span>
                    </div>
                    <div className="info">
                      <div className="main">Alternance</div>
                      <div className="sub">
                        <p>
                          <span>En entreprise :</span>
                          <br />
                          Réalisations de cahier des charges
                          <br />
                          Gestion de projet
                          <br />
                          Créations de sites web wordpress (divi et elementor)
                          <br />
                          Conception de chartes graphiques et maquettages figma
                          <br />
                        </p>
                        <br />
                        <p>
                          <span>A l'ecole:</span>
                          <br />
                          Principes de conception de bases de données
                          <br />
                          Design de site (UX/UI)
                          <br />
                          SEO
                          <br />
                          Mysql
                          <br />
                          Javascript et Jquery
                          <br />
                          Cours + projets en Symfony
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="option">
                  <div className="shadow"></div>
                  <div className="label">
                    <div className="icon">
                      <span className=" txt-black">2020</span>
                    </div>
                    <div className="info">
                      <div className="main">Stage + Alternance</div>
                      <div className="sub">
                        <p>
                          Je travaille en tant qu'opérateur de production mes
                          tâches sont : <br />
                          Traitement informatique des commandes
                          <br />
                          Gestion des stocks avec divers logiciels
                          <br />
                        </p>
                        <p>
                          <span>À l'ecole:</span>
                          <br />
                          Analyse et conception UML
                          <br />
                          Design patterns et architectures applicatives
                          <br />
                          Méthodes Agiles
                          <br />
                          Gestion de projets ( Méthodes Agiles, Scrum,... )
                          <br />
                          Base de données SQL
                          <br />
                          Développement logiciel Java
                          <br />
                          HTML / CSS, Scss et Bootstrap
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="option">
                  <div className="shadow"></div>
                  <div className="label">
                    <div className="icon">
                      <span className="txt-black">2019</span>
                    </div>
                    <div className="info">
                      <div className="main"></div>
                      <div className="sub">
                        <p>
                          Au cours de ma carrière, j'ai travaillé en tant
                          qu'intérimaire pendant plusieurs mois. Cette
                          expérience m'a donné une bonne compréhension du monde
                          professionnel et m'a permis de développer mes
                          compétences en matière de travail en équipe et de
                          communication. <br />
                          <br />
                          Après cela, j'ai suivi une formation de 2 mois pour
                          apprendre les bases du web et de l'informatique. Cette
                          formation m'a fourni les connaissances nécessaires
                          pour comprendre les technologies modernes et pour
                          développer ma culture informatique. <br />
                          <br />
                          Enfin, j'ai continué à me former en autodidacte en
                          suivant des cours en ligne, en regardant des vidéos et
                          en créant mon premier site web en utilisant HTML et
                          CSS.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="option">
                  <div className="shadow"></div>
                  <div className="label">
                    <div className="icon">
                      <span className="txt-black">...</span>
                    </div>
                    <div className="info">
                      <div className="main">Etude et travaille</div>
                      <div className="sub">
                        <p>
                          En 2015 j'obtiens mon bac STMG (Baccalauréat sciences
                          et technologies du management et de la gestion)
                          spécialité marketing.
                          <br />
                          Je souhaitais poursuivre mes études en faisant un BTS
                          MUC en alternance mais je me rends compte que ce n'est
                          pas ce qui me plaît, je décide de faire quelques jobs
                          comme (équipier polyvalent, adjoint technique, street
                          marketing, etc…) en ayant toujours en tête une reprise
                          d'études.
                          <br />
                          Afin d'être sûr de me diriger dans la bonne branche,
                          j'ai fait un POP (parcours d'orientation personnalisé)
                          à la Mission locale.
                          <br />
                          <br />
                          Le bilan de mes compétences m'a aidé à construire mon
                          projet professionnel et me conforte dans le choix du
                          métier de développeur.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="section skills">
            <section className="wrapper">
              <div className="text-container">
                <h2 className="xl-txt">Mes competences</h2>
                <span className="background-txt">Skills</span>
                <p className="small-txt">Découvrez mes experiences</p>
              </div>
              <div className="wrapper-cards wrapper-all">
                <div className="card">
                  <div className="">
                    <h4 className="s-txt">Frontend</h4>
                  </div>
                  <div className="container-progress">
                    <div className="progress ninePercent">
                      <span
                        className="title timer"
                        data-from="0"
                        data-to="85"
                        data-speed="1800"
                      >
                        Html/Css
                      </span>
                      <div className="overlay"></div>
                      <div className="left"></div>
                      <div className="right"></div>
                    </div>
                    <div className="progress heightPercent">
                      <span
                        className="title timer"
                        data-from="0"
                        data-to="70"
                        data-speed="1500"
                      >
                        Bootstrap
                      </span>
                      <div className="overlay"></div>
                      <div className="left"></div>
                      <div className="right"></div>
                    </div>

                    <div className="progress sixPercent">
                      <span
                        className="title timer"
                        data-from="0"
                        data-to="60"
                        data-speed="1500"
                      >
                        Javascript
                      </span>
                      <div className="overlay"></div>
                      <div className="left"></div>
                      <div className="right"></div>
                    </div>

                    <div className="progress fivePercent">
                      <span
                        className="title timer"
                        data-from="0"
                        data-to="85"
                        data-speed="1800"
                      >
                        React
                      </span>
                      <div className="overlay"></div>
                      <div className="left"></div>
                      <div className="right"></div>
                    </div>
                    <div className="progress sixplusPercent">
                      <span
                        className="title timer"
                        data-from="0"
                        data-to="70"
                        data-speed="1500"
                      >
                        Svelte
                      </span>
                      <div className="overlay"></div>
                      <div className="left"></div>
                      <div className="right"></div>
                    </div>

                    <div className="progress sevenPercent">
                      <span
                        className="title timer"
                        data-from="0"
                        data-to="60"
                        data-speed="1500"
                      >
                        Sass
                      </span>
                      <div className="overlay"></div>
                      <div className="left"></div>
                      <div className="right"></div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="">
                    <h4 className="s-txt">Backend</h4>
                  </div>
                  <div className="container-progress">
                    <div className="progress heightPercent">
                      <span
                        className="title timer"
                        data-from="0"
                        data-to="85"
                        data-speed="1800"
                      >
                        Symfony
                      </span>
                      <div className="overlay"></div>
                      <div className="left"></div>
                      <div className="right"></div>
                    </div>
                    <div className="progress sixplusPercent">
                      <span
                        className="title timer"
                        data-from="0"
                        data-to="70"
                        data-speed="1500"
                      >
                        Java
                      </span>
                      <div className="overlay"></div>
                      <div className="left"></div>
                      <div className="right"></div>
                    </div>

                    <div className="progress sevenPercent">
                      <span
                        className="title timer"
                        data-from="0"
                        data-to="60"
                        data-speed="1500"
                      >
                        SQL
                      </span>
                      <div className="overlay"></div>
                      <div className="left"></div>
                      <div className="right"></div>
                    </div>

                    <div className="progress sixPercent">
                      <span
                        className="title timer"
                        data-from="0"
                        data-to="85"
                        data-speed="1800"
                      >
                        NodeJS
                      </span>
                      <div className="overlay"></div>
                      <div className="left"></div>
                      <div className="right"></div>
                    </div>
                    <div className="progress sixplusPercent">
                      <span
                        className="title timer"
                        data-from="0"
                        data-to="70"
                        data-speed="1500"
                      >
                        Sveltekit
                      </span>
                      <div className="overlay"></div>
                      <div className="left"></div>
                      <div className="right"></div>
                    </div>

                    <div className="progress sevenPercent">
                      <span
                        className="title timer"
                        data-from="0"
                        data-to="60"
                        data-speed="1500"
                      >
                        PHP
                      </span>
                      <div className="overlay"></div>
                      <div className="left"></div>
                      <div className="right"></div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="">
                    <h4 className="s-txt">Design et gestion</h4>
                  </div>
                  <div className="container-progress">
                    <div className="progress sevenPercent">
                      <span
                        className="title timer"
                        data-from="0"
                        data-to="85"
                        data-speed="1800"
                      >
                        UX / UI
                      </span>
                      <div className="overlay"></div>
                      <div className="left"></div>
                      <div className="right"></div>
                    </div>
                    <div className="progress fivePercent">
                      <span
                        className="title timer"
                        data-from="0"
                        data-to="70"
                        data-speed="1500"
                      >
                        Photoshop
                      </span>
                      <div className="overlay"></div>
                      <div className="left"></div>
                      <div className="right"></div>
                    </div>

                    <div className="progress sixplusPercent">
                      <span
                        className="title timer"
                        data-from="0"
                        data-to="60"
                        data-speed="1500"
                      >
                        Canva
                      </span>
                      <div className="overlay"></div>
                      <div className="left"></div>
                      <div className="right"></div>
                    </div>

                    <div className="progress sixPercent">
                      <span
                        className="title timer"
                        data-from="0"
                        data-to="85"
                        data-speed="1800"
                      >
                        Figma
                      </span>
                      <div className="overlay"></div>
                      <div className="left"></div>
                      <div className="right"></div>
                    </div>
                    <div className="progress fivePercent">
                      <span
                        className="title timer"
                        data-from="0"
                        data-to="70"
                        data-speed="1500"
                      >
                        SEO
                      </span>
                      <div className="overlay"></div>
                      <div className="left"></div>
                      <div className="right"></div>
                    </div>

                    <div className="progress sixPercent">
                      <span
                        id="gestionDeProjet"
                        className="title timer"
                        data-from="0"
                        data-to="60"
                        data-speed="1500"
                      >
                        Gestion de projet
                      </span>
                      <div className="overlay"></div>
                      <div className="left"></div>
                      <div className="right"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="wrapper-cards wrapper-mobile">
                <div className="card">
                  <div className="">
                    <h4 className="s-txt">Frontend</h4>
                  </div>
                  <div className="container-progress-mobile">
                    <p>Html/Css + Sass</p>
                    <div className="progress-mobile">
                      <div className="progress-value value-90"></div>
                    </div>
                    <p>Bootstrap</p>
                    <div className="progress-mobile">
                      <div className="progress-value value-85"></div>
                    </div>
                    <p>Javascript</p>
                    <div className="progress-mobile">
                      <div className="progress-value value-70"></div>
                    </div>
                    <p>React</p>
                    <div className="progress-mobile">
                      <div className="progress-value value-80"></div>
                    </div>
                    <p>Svelte</p>
                    <div className="progress-mobile">
                      <div className="progress-value value-65"></div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="">
                    <h4 className="s-txt">backend</h4>
                  </div>
                  <div className="container-progress-mobile">
                    <p>Html/Css + Sass</p>
                    <div className="progress-mobile">
                      <div className="progress-value value-90"></div>
                    </div>
                    <p>Bootstrap</p>
                    <div className="progress-mobile">
                      <div className="progress-value value-85"></div>
                    </div>
                    <p>Javascript</p>
                    <div className="progress-mobile">
                      <div className="progress-value value-70"></div>
                    </div>
                    <p>React</p>
                    <div className="progress-mobile">
                      <div className="progress-value value-80"></div>
                    </div>
                    <p>Svelte</p>
                    <div className="progress-mobile">
                      <div className="progress-value value-65"></div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="">
                    <h4 className="s-txt">Design et gestion</h4>
                  </div>
                  <div className="container-progress-mobile">
                    <p>Html/Css + Sass</p>
                    <div className="progress-mobile">
                      <div className="progress-value value-90"></div>
                    </div>
                    <p>Bootstrap</p>
                    <div className="progress-mobile">
                      <div className="progress-value value-85"></div>
                    </div>
                    <p>Javascript</p>
                    <div className="progress-mobile">
                      <div className="progress-value value-70"></div>
                    </div>
                    <p>React</p>
                    <div className="progress-mobile">
                      <div className="progress-value value-80"></div>
                    </div>
                    <p>Svelte</p>
                    <div className="progress-mobile">
                      <div className="progress-value value-65"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="section projet">
            <section className="wrapper">
              <div className="text-container">
                <h2 className="xl-txt">Mes projets</h2>
                <span className="background-txt">Projects</span>
                <p className="small-txt">
                  Quelques extraits de mes réalisations
                </p>
              </div>
              <div className="container-carousel">
                <div className="block1">
                  <div className="description">
                    <p>
                      Site web{" "}
                      <span className="subtitle">
                        {" "}
                        backend: Symfony, frontend: Twig, Javascript et
                        Bootstrap.
                      </span>
                    </p>
                  </div>
                  <Splide
                    id="splide"
                    className="splide"
                    aria-label="My Favorite Images"
                    options={{
                      type: "loop",
                      updateOnMove: true,
                      perPage: 1,
                    }}
                  >
                    <SplideSlide>
                      <img src={screenLocavores1} />
                    </SplideSlide>
                    <SplideSlide>
                      <img src={screenLocavores2} />
                    </SplideSlide>
                  </Splide>
                </div>

                <div className="block2">
                  <div className="description">
                    <p>
                      Apli PWA (Progressive Web App)
                      <span className="subtitle">
                        {" "}
                        backend: NodeJs Sveltekit, frontend: React, Svelte{" "}
                      </span>
                    </p>
                  </div>

                  <Splide
                    id="splide2"
                    className="splide"
                    aria-label="My Favorite Images"
                    options={{
                      type: "loop",
                      updateOnMove: true,
                      perPage: 1,
                    }}
                  >
                    <SplideSlide>
                      <img src={screenAutosign1} />
                    </SplideSlide>
                    <SplideSlide>
                      <img src={screenAutosign2} />
                    </SplideSlide>
                    <SplideSlide>
                      <img src={screenAutosign3} />
                    </SplideSlide>
                  </Splide>
                </div>
              </div>
              <div className="containerBtnProjets">
                <button
                  className="btn2"
                  onClick={() => (window.location.href = "/projets")}
                >
                  Voir tous mes projets
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
