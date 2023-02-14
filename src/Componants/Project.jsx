import { useStore } from "@nanostores/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUrlImg } from "../Lib/db";
import { loadDataProject, projetsStore } from "../Store/db";
import { InputIcon } from "../Style/Project";
import FAQ from "./FAQ";
import LineContent from "./LineContent";

loadDataProject();
export default function Projects() {
  const [tabProject, setTabProject] = useState();
  const [tabProjectS, setTabProjectS] = useState();
  const [loadImg, setLoadimg] = useState(0);

  const state = useStore(projetsStore).projets;
  function lightning() {
    var element = document.body;
    element.classList.toggle("light-mode");
  }

  useEffect(() => {
    return () => {
      // code to clean up effects and subscriptions
    };
  }, []);

  useEffect(() => {
    if (!isEmpty(state) && loadImg === 0) {
      setTabProject(state);
      setLoadimg(1);
    }
  }, [state]);

  const loadAllimg = () => {
    let testArray2 = [];
    state.forEach((allImages, index) => {
      // tabProject[index].images;
      if (allImages.images) {
        allImages.images.forEach((img, i) => {
          getUrlImg(img)
            .then((url) => {
              let t = tabProject[index].images[i];
              testArray2 = [...tabProject, (tabProject[index].images[i] = url)];
              // console.log(testArray2);
              setTabProject({ ...tabProject, t: url });
              return url;
            })
            .catch((error) => {
              console.error("err : ", " ", img, " ", error.message);
            });
        });
      }
    });
  };
  useEffect(() => {
    if (loadImg === 1) {
      loadAllimg();
      setLoadimg(2);
    } else if (loadImg === 2) {
      if (tabProject) {
        setTabProjectS(tabProject);
        setLoadimg(2);
      }
    }
  }, [loadImg]);

  const [faqs, setFaqs] = useState([
    {
      question: "How many programmers does it take to screw a lightbulb?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: true,
    },
    {
      question: "Who is the most awesome person?",
      answer: "You! The viewer!",
      open: false,
    },
    {
      question:
        "How many questions does it take to makes a succesful FAQ Page?",
      answer: "This many!",
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

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  return (
    <>
      <Link to="/" id="btnHome">
        <InputIcon className="fa-solid fa-house" />
      </Link>
      <nav className="navbar">
        <h1>MES PROJETS</h1>
      </nav>
      <main className="wrapper" id="wrapperIdProjet">
        <label className="switch">
          <input type="checkbox" onClick={lightning} />
          <span></span>
        </label>
        <nav className="navbarMobile">
          <InputIcon className="fa-solid fa-code" />
          <h1 className="xl-txt">MES PROJETS</h1>
        </nav>
        {loadImg == 2 && tabProjectS && !isEmpty(tabProjectS) ? (
          tabProjectS.map((project, index) => (
            <LineContent
              key={index}
              number={index}
              title={project.title}
              id={"line" + index}
              link={project.link ? project.link : null}
              subtitle={project.subtitle}
              descriptionBis={
                project.descriptionBis ? project.descriptionBis : null
              }
              description={project.description}
              // descriptionBis={descriptionBis}
              images={project.images}
            />
          ))
        ) : (
          <div className="loader-animation"></div>
        )}

        <div className="faqs">
          {faqs.map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </main>
    </>
  );
}
