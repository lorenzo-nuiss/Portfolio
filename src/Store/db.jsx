import { action, map } from "nanostores";
import { dataProjets } from "../Lib/db";

export const projetsStore = map({
  projets: [],
});
export const loadDataProject = () => {
  dataProjets().then((data) => {
    data.forEach((doc) => {
      let descriptionBis = "";
      if (doc.data().descriptionBis) {
        descriptionBis = doc.data().descriptionBis;
      }
      let projetObj = {
        title: doc.data().title,
        subtitle: doc.data().subtitle,
        description: doc.data().description,
        descriptionBis: descriptionBis,
        images: doc.data().images,
        link: doc.data().link,
      };
      setProjets(projetObj);
    });
  });
};

export const setProjets = action(
  projetsStore,
  "setProjets",
  (store, projet) => {
    const newProjet = {
      title: projet.title,
      subtitle: projet.subtitle,
      description: projet.description,
      descriptionBis: projet.descriptionBis,
      images: projet.images,
      link: projet.link,
    };

    store.setKey("projets", [newProjet, ...store.get().projets]);
  }
);
