import { useState, useEffect } from "react";
import {
  doc,
  updateDoc,
  db,
  ref,
  storage,
  deleteObject,
} from "../firebase/config";
import { toast } from "react-toastify";
// import UseMyUserContext from "../hooks/UseUserContext";

export const useUpdateDoc = () => {
  // const { dispatch } = UseMyUserContext();
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const updateUser = async (id, formData) => {
    const docRef = doc(db, "UsersTestCss", id);
    setError(null);
    setIsPending(true);

    await updateDoc(docRef, formData)
      .then(() => {
        toast("Datos estan Actualizando...");
        if (!isCancelled) {
          setIsPending(false);
          setError(null);
        }
      })

      .catch((error) => {
        console.log(error.message);
        toast.error("Error no se actualizo la Info...", error.message);
        if (!isCancelled) {
          setError(err.message);
          console.log(err);
          setIsPending(false);
        }
      });
  };

  useEffect(() => {
    setIsCancelled(false);
    return () => setIsCancelled(true);
  }, []);

  return { updateUser, error, isPending };
};

export const delOldUserPic = (userOldPic) => {
  console.log(userOldPic);
  const deserRef = ref(storage, `userImages/${userOldPic}`);
  console.log(userOldPic);
  if (userOldPic === "") {
    toast("No exite foto de perfil");
  } else {
    try {
      deleteObject(deserRef);
      toast("Borrando foto de Perfil");
    } catch (error) {
      console.log(error.message);
      toast.error("no se pudo borrar la foto..");
    }
  }
};
