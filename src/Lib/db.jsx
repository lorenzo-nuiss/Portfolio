import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { db, storage } from "./Firebase";

export const getUrlImg = (images) => {
  return getDownloadURL(ref(storage, images))
    .then((url) => {
      return url;
    })
    .catch((error) => {
      console.error("err : ", error.message);
    });
};

// fonction de base trop contraignante a supprimer -------------
// getDownloadURL(ref(storage, "SwooshRickEtMorty.jpeg"))
// .then((url) => {
//   const img = document.getElementById("myimg");
//   img.setAttribute("src", url);
//   // Or inserted into an <img> element
// })
// .catch((error) => {
//   console.error("err : ", error.message);
//   return;
// });

// const querySnapshot = await getDocs(collection(db, "Projets"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });

export const dataProjets = async () => {
  const querySnapshot = await getDocs(collection(db, "Projets"));
  return querySnapshot;
};
