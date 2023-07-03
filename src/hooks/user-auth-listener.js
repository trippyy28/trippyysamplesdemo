import { useState, useEffect, useContext } from "react";
import FirebaseContext from "../contexts/firebase";

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const { firebase } = useContext(FirebaseContext);
  const { auth } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
      //console.log(authUser, "sahdasd");
    });

    return () => listener();
  }, [firebase]);

  return { user };
}
