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
import FAQ from "./FAQ";

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
          panel2.style.maxHeight = panel2.scrollHeight + 500 + "px";
        }
      });
    }
  }, [stateLoad]);

  const [faqs, setFaqs] = useState([
    {
      question: "2023",
      answer: `Je fais ma derni??re ann??e en alternance, si tout ce passe bien, je d??croche mon dipl??me niveau bac +4.`,
      answer2: `J'ai d??j?? pu r??aliser ce site, fais en React et avec
                        Firebase pour la base de donn??es pr??sente dans la page
                        "Projets".`,
      answer3: `j'ai aussi r??alis?? un projet en react native en cours.`,
      open: true,
    },
    {
      question: "2022",
      answer:
        "Je rentre en alternance pour le diplome de concepteur d'application multim??dia chez Doranco niveau bac+4 qui se termine en 2023.",
      answer2: null,
      answer3: null,
      part1Title: "En entreprise : ",
      part1Array: [
        "Application en React, Node.js Mongo DB en base de donn??e",
        "Application Svelte et Sveltekit Mongo DB en base de donn??e",
        "Cr??ation de plusieurs sites Wordpress",
        "Conception de chartes graphiques et de maquettes",
        "D??ploiement sur serveur nginx",
      ],
      part2Title: "?? l'ecole : ",
      part2Array: [
        "Principes de conception de bases de donn??es",
        "Java : middleware, persistance des donn??es avec hibernate, Web Services SOAP et REST",
        "Cours et projet en React.js",
        "D??veloppement Android Java",
        "Cours de React Native",
      ],
      open: false,
    },
    {
      question: "2021",
      answer: "En alternance de 2020 ?? 2021.",
      answer2: null,
      answer3: null,
      part1Title: "En entreprise : ",
      part1Array: [
        "R??alisations de cahier des charges",
        "Gestion de projet",
        " Cr??ations de sites web wordpress (divi et elementor)",
        "Conception de chartes graphiques et de maquettes",
      ],
      part2Title: "?? l'ecole : ",
      part2Array: [
        "Principes de conception de bases de donn??es",
        "Design de site (UX/UI)",
        "SEO",
        "Mysql",
        "Javascript et Jquery",
        "Cours + projets en Symfony",
      ],
      open: false,
    },
    {
      question: "2020",
      answer:
        "En alternance de 2020 ?? 2021 pour la formation developpeur d'application multim??dia bac +2.",
      answer2: null,
      answer3: null,
      part1Title: "En entreprise : ",
      part1Array: [
        "Chef de projet pour des applications",
        "Am??lioration du site de l'entreprise",
        "r??daction de contenu",
      ],
      part2Title: "?? l'ecole : ",
      part2Array: [
        "Analyse et conception UML",
        "Design patterns et architectures applicatives",
        "Base de donn??es SQL",
        "Gestion de projets ( M??thodes Agiles, Scrum,... )",
        "D??veloppement logiciel Java",
        "HTML / CSS, Scss",
        "Bootstrap",
      ],
      open: false,
    },
    {
      question: "2019",
      answer: `je travaille en tant qu'int??rimaire pendant plusieurs mois. Cette exp??rience
      m'a donn?? une bonne compr??hension du monde professionnel et m'a permis de d??velopper mes comp??tences en mati??re
      de travail en ??quipe et de communication.`,
      answer2: `Apr??s cela, j'ai suivi une formation de 2 mois pour
      apprendre les bases du web et de l'informatique. Cette
      formation m'a fourni les connaissances n??cessaires pour
      comprendre les technologies modernes et pour d??velopper
      ma culture informatique.`,
      answer3: `Ensuite, j'ai continu?? ?? me former en autodidacte en
      suivant des cours en ligne, en regardant des vid??os et
      en cr??ant mon premier site web en utilisant HTML et CSS.`,
      open: false,
    },
    {
      question: "2018 et avant",
      answer: `En 2015 j'obtiens mon bac STMG (Baccalaur??at sciences et
        technologies du management et de la gestion) sp??cialit??
        marketing.`,
      answer2: `Je souhaitais poursuivre mes ??tudes en faisant un BTS
      MUC en alternance mais je me rends compte que ce n'est
      pas ce qui me pla??t, je d??cide de faire quelques jobs
      comme (??quipier polyvalent, adjoint technique, street
      marketing, etc???) en ayant toujours en t??te une reprise
      d'??tudes.`,
      answer3: ` Afin d'??tre s??r de me diriger dans la bonne branche,
      j'ai fait un POP (parcours d'orientation personnalis??) ??
      la Mission locale. Le bilan de mes comp??tences m'a aid?? ?? construire mon
      projet professionnel et me conforte dans le choix du
      m??tier de d??veloppeur.`,
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

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
                  Un d??but en 2018 avec peu de connaissances en informatique,
                  mais une passion d??vorante pour apprendre et grandir. Voici
                  mon portfolio, un voyage ?? travers mes aventures num??riques
                  jusqu'?? aujourd'hui.
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
                  D??couvrez mes experiences dans l'informatique
                </p>
                <span className="background-txt">Experiences</span>
              </div>

              <div className="faqs">
                {faqs.map((faq, index) => (
                  <FAQ
                    faq={faq}
                    index={index}
                    key={index}
                    toggleFAQ={toggleFAQ}
                  />
                ))}
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
                          Bon pour l'instant pas grand chose, mais ?? la fin de
                          l'ann??e cette section debordera !
                          <br />
                          <span>
                            <br />
                            ??l'ecole:
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
                          donn??e
                          <br />
                          Application Svelte et Sveltekit Mongo DB en base de
                          donn??e
                          <br />
                          Cr??ation de plusieurs sites Wordpress
                          <br />
                          Conception de chartes graphiques et de maquettes
                          <br />
                          D??ploiement sur serveur nginx
                          <br />
                          <br />
                          <span>??l'ecole:</span>
                          <br />
                          Principes de conception de bases de donn??es
                          <br />
                          Java : middleware, persistance des donn??es avec
                          hibernate, Web Services SOAP et REST
                          <br />
                          Cours et projet en React.js
                          <br />
                          D??veloppement Android Java
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
                          R??alisations de cahier des charges
                          <br />
                          Gestion de projet
                          <br />
                          Cr??ations de sites web wordpress (divi et elementor)
                          <br />
                          Conception de chartes graphiques et maquettages figma
                          <br />
                        </p>
                        <br />
                        <p>
                          <span>??l'ecole:</span>
                          <br />
                          Principes de conception de bases de donn??es
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
                          Je travaille en tant qu'op??rateur de production mes
                          t??ches sont : <br />
                          Traitement informatique des commandes
                          <br />
                          Gestion des stocks avec divers logiciels
                          <br />
                        </p>
                        <p>
                          <span>?? l'ecole:</span>
                          <br />
                          Analyse et conception UML
                          <br />
                          Design patterns et architectures applicatives
                          <br />
                          M??thodes Agiles
                          <br />
                          Gestion de projets ( M??thodes Agiles, Scrum,... )
                          <br />
                          Base de donn??es SQL
                          <br />
                          D??veloppement logiciel Java
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
                          Au cours de ma carri??re, j'ai travaill?? en tant
                          qu'int??rimaire pendant plusieurs mois. Cette
                          exp??rience m'a donn?? une bonne compr??hension du monde
                          professionnel et m'a permis de d??velopper mes
                          comp??tences en mati??re de travail en ??quipe et de
                          communication. <br />
                          <br />
                          Apr??s cela, j'ai suivi une formation de 2 mois pour
                          apprendre les bases du web et de l'informatique. Cette
                          formation m'a fourni les connaissances n??cessaires
                          pour comprendre les technologies modernes et pour
                          d??velopper ma culture informatique. <br />
                          <br />
                          Enfin, j'ai continu?? ?? me former en autodidacte en
                          suivant des cours en ligne, en regardant des vid??os et
                          en cr??ant mon premier site web en utilisant HTML et
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
                          En 2015 j'obtiens mon bac STMG (Baccalaur??at sciences
                          et technologies du management et de la gestion)
                          sp??cialit?? marketing.
                          <br />
                          Je souhaitais poursuivre mes ??tudes en faisant un BTS
                          MUC en alternance mais je me rends compte que ce n'est
                          pas ce qui me pla??t, je d??cide de faire quelques jobs
                          comme (??quipier polyvalent, adjoint technique, street
                          marketing, etc???) en ayant toujours en t??te une reprise
                          d'??tudes.
                          <br />
                          Afin d'??tre s??r de me diriger dans la bonne branche,
                          j'ai fait un POP (parcours d'orientation personnalis??)
                          ?? la Mission locale.
                          <br />
                          <br />
                          Le bilan de mes comp??tences m'a aid?? ?? construire mon
                          projet professionnel et me conforte dans le choix du
                          m??tier de d??veloppeur.
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
                <p className="small-txt">D??couvrez mes experiences</p>
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
                  Quelques extraits de mes r??alisations
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
