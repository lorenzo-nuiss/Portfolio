import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <div className="page404">
        <Player autoplay loop src="./404-page.json" id="Lottie-404" />
        <h2>La page que vous demandez est introuvable.</h2>
        <Link to="/">
          <button className="btn2">Retourner à l'accueil</button>
        </Link>
      </div>
    </>
  );
}
