import { useEffect, useRef, useState } from "react";
import "reactjs-popup/dist/index.css";
import { useStore } from "@nanostores/react";
import {
  ButtonContainersI,
  ErrorText,
  InputContainer,
  InputDark,
  InputIcon,
  InputsBlock,
  ModalContainer,
  ModalSubtitle,
  ModalTitle,
} from "../Style/Project";

import { counter, setAttempt } from "../Store/Counter";
import { dropdownFunction } from "../Script/InputDropdown";

const VISIBLE = 1;
const HIDDEN = 2;
const ENTERING = 3;
const LEAVING = 4;

export default function FirstContent({
  visible,
  children,
  duration = 300,
  animateEnter = false,
  from = { opacity: 0 },
  numberArrayRobot,
}) {
  const KEY = "198801da856e6b3ceb73ef7b0b438e84";
  const childRef = useRef(children);
  const [ville, setVille] = useState("");
  const [robotChecker, setRobotChecker] = useState([
    ["cinq plus un", "six", "6"],
    ["six moins cinq", "un", "1"],
  ]);
  const [numberArray, setNumberArray] = useState(numberArrayRobot);
  const [answerRobotUser, setAnswerRobotUser] = useState("");

  const [logoMeteo, setlogoMeteo] = useState("");
  const [inputValid, setInputValid] = useState();
  const [robotValid, setRobotValid] = useState();
  const [listCity, setListCity] = useState([]);

  const [state, setState] = useState(
    visible ? (animateEnter ? ENTERING : VISIBLE) : HIDDEN
  );

  if (visible) {
    childRef.current = children;
  }

  const stateAttempt = useStore(counter).locked;
  useEffect(() => {
    if (!visible) {
      setState(LEAVING);
    } else {
      setState((s) => (s === HIDDEN ? ENTERING : VISIBLE));
    }
  }, [visible]);

  const autocompletion = async () => {
    const response = await fetch(
      `https://vicopo.selfbuild.fr/cherche/${ville}`
    );

    const data = await response.json();
    setListCity(data.cities);
  };

  useEffect(() => {
    if (ville) {
      setInputValid(true);
      if (ville.length > 2) {
        autocompletion();
      }
    }
  }, [ville]);

  const getMeteo2 = async () => {
    const APIKEY2 = "35f8122b6ca463975984e9cbf23bacea";
    let villeAtach = ville.replaceAll(" ", "-");
    villeAtach = villeAtach.replaceAll("-st-", "-saint-");
    villeAtach = villeAtach.replaceAll("-st-", "-saint-");
    villeAtach = villeAtach.replaceAll("St-", "Saint-");
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${villeAtach}&units=metric&lang=fr&appid=${APIKEY2}`
    );

    if (!response.ok) {
      setlogoMeteo(null);
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    if (data.success == false) {
      setlogoMeteo(null);
      throw new Error(`HTTP error: ${response.status}`);
    }
    let icon = data.weather[0].icon;
    setlogoMeteo(`http://openweathermap.org/img/wn/${icon}@2x.png`);
  };

  // autre api pour la meteo, mais tres limité en nombre de requete
  // const getMeteo = async () => {
  //   try {
  //     const response = await fetch(
  //       `http://api.weatherstack.com/current?access_key=${KEY}&query=${ville}`
  //     );
  //     if (!response.ok) {
  //       throw new Error(`HTTP error: ${response.status}`);
  //     }
  //     const data = await response.json();

  //     if (data.success == false) {
  //       console.log("plus de call disponible");
  //       throw new Error(`HTTP error: ${response.status}`);
  //     }

  //     setlogoMeteo(data.current.weather_icons[0]);
  //   } catch (error) {
  //     console.error(`Could not get : ${error}`);
  //     return;
  //   }
  // };

  // bouton pour valider si robot et ville
  const handleSubmit = (e) => {
    if (!ville || !answerRobotUser) {
      setInputValid(false);
      return;
    }

    if (
      !stateAttempt &&
      (answerRobotUser == robotChecker[numberArray][1] ||
        answerRobotUser == robotChecker[numberArray][2])
    ) {
      setRobotValid(true);
      getMeteo2();
      setState(LEAVING);
    } else {
      setAttempt();

      // iciii ---------
      setRobotValid(false);
    }
  };

  const handleSubmitMail = () => {
    window.location.href = "mailto:nuissier.lorenzo.77@gmail.com";
  };
  useEffect(() => {
    if (state === LEAVING) {
      const timer = setTimeout(() => {
        setState(HIDDEN);
      }, duration);
      return () => {
        clearTimeout(timer);
      };
    } else if (state === ENTERING) {
      setState(VISIBLE);
    }
  }, [state]);

  // crée le dropdown des villes
  useEffect(() => {
    let input = document.getElementById("input_City");
    dropdownFunction(input);
  }, []);

  let className = "fade out";
  if (state === VISIBLE) {
    className = "fade";
  }
  let style = {
    transitionDuration: `${duration}ms`,
    transitionProperty: "all",
  };
  if (state !== VISIBLE) {
    if (from.opacity !== undefined) {
      style.opacity = from.opacity;
    }
    // style.transform = `translateX(10px)`;
    style.transform = `translateX(${from.x ?? 0}px)`;
  }

  let style2 = {
    transitionDuration: `${duration}ms`,
    transitionProperty: "opacity",
  };
  if (state === VISIBLE) {
    if (from.opacity !== undefined) {
      style2.opacity = from.opacity;
    }
  }
  let styleImg = {
    position: "absolute",
    borderRadius: "50%",
    top: "-2px",
    width: "70px",
    right: "10px",
    opacity: "0.6",
    filter: "grayscale(10%)",
  };

  const dataListClick = (e) => {
    setVille(e.target.value);
    document.getElementById("dataCity").style.display = "none";
  };

  const copyToClipboard = () => {
    let mail = "nuissier.lorenzo.77@gmail.com";
    navigator.clipboard.writeText(mail);

    setTimeout(() => {
      document.getElementById("idtooltiptext").style.visibility = "visible";
      document.getElementById("idtooltiptext").style.opacity = "1";
    }, 100);

    setTimeout(() => {
      document.getElementById("idtooltiptext").style.visibility = "hidden";
      document.getElementById("idtooltiptext").style.opacity = "0";
    }, 2000);
  };

  const firstContent = () => {
    return (
      <>
        <ModalTitle className="xl-txt">Contactez moi par mail</ModalTitle>
        <ModalContainer className={className} style={style}>
          <ModalSubtitle className="small-txt">
            Veuillez repondre à ces 2 questions afin que je m assure que vous
            n’êtes pas un robot.
          </ModalSubtitle>
          <InputsBlock className="inputBlock">
            <InputContainer>
              <label htmlFor="robot">
                Combien font {robotChecker[numberArray][0]} ?
              </label>
              <InputDark
                id="input_robot"
                autoComplete="off"
                name="robot"
                type="text"
                required
                placeholder="Repondez en chiffre ou en lettre"
                onChange={(e) => setAnswerRobotUser(e.target.value)}
              />
            </InputContainer>

            <InputContainer>
              <label htmlFor="ville">
                Dans quelle ville vous situez-vous ?
              </label>
              <InputDark
                type="text"
                autoComplete="off"
                role="combobox"
                list=""
                id="input_City"
                name="ville_user"
                value={ville}
                placeholder="Séléctionner votre ville"
                onChange={(e) => setVille(e.target.value)}
              />
              <datalist id="dataCity" role="listbox">
                {/* {dataListInput} */}
                {listCity.map((data, index) => (
                  <option
                    value={
                      data.city.charAt(0) + data.city.slice(1).toLowerCase()
                    }
                    key={index}
                    onClick={dataListClick}
                  >
                    {data.city.charAt(0) + data.city.slice(1).toLowerCase()}
                  </option>
                ))}
              </datalist>
            </InputContainer>
          </InputsBlock>
          {inputValid === false ? (
            <ErrorText>Veuilliez remplir les champs avant.</ErrorText>
          ) : null}
          {robotValid === false ? (
            <ErrorText>La réponse à la question est incorrecte.</ErrorText>
          ) : null}
          <ButtonContainersI onClick={handleSubmit} className="btnAnmi1">
            <InputIcon className="fa-solid fa-arrow-right" />
            Valider
          </ButtonContainersI>
        </ModalContainer>
      </>
    );
  };

  const secondContent = () => {
    return (
      <>
        <ModalTitle className="xl-txt">Contactez moi par mail</ModalTitle>
        <ModalContainer style={style2}>
          <ModalSubtitle className="small-txt">
            Cliquez sur le bouton en dessous pour m’envoyer un message
            directement sur mon adresse mail
          </ModalSubtitle>
          {logoMeteo ? (
            <img style={styleImg} src={logoMeteo} alt="icone de la meteo" />
          ) : (
            <></>
          )}

          <ButtonContainersI onClick={handleSubmitMail} btnAnmi1>
            <InputIcon className="fa-solid fa-envelope" />
            nuissier.lorenzo.77@gmai.com
          </ButtonContainersI>
          <p className="fixedTooltip">
            Ou copier mon{" "}
            <u onClick={copyToClipboard}>adresse mail en cliquant içi</u>.
            <span className="tooltiptext" id="idtooltiptext">
              adresse mail copié !
            </span>
          </p>
        </ModalContainer>
      </>
    );
  };

  if (state === HIDDEN) {
    return secondContent();
  } else {
    return firstContent();
  }
}
