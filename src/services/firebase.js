import { firebase, firestore } from "../lib/firebase";
import { collection, where, getDocs, query } from "firebase/firestore";

export async function doesUserNameExist(username) {
  const q = query(
    collection(firestore, "users"),
    where("username", "==", username)
  );
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => doc.data()).length > 0;
}

export async function getUserByUserId(userId) {
  const q = query(
    collection(firestore, "users"),
    where("userId", "==", userId)
  );
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    docId: doc.id,
  }));
}
