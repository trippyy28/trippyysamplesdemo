import React, { useState, useContext } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useHistory } from "react-router-dom";
import FirebaseContext from "../contexts/firebase";
import { doesUserNameExist } from "../services/firebase";

const Signup = () => {
  const { firebase } = useContext(FirebaseContext);
  const { firestore } = useContext(FirebaseContext);
  const { auth } = useContext(FirebaseContext);
  const [username, setUsername] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const isInvalid = password === "" || emailAddress === "";

  const handleSignUp = async (event) => {
    event.preventDefault();

    const usernameExists = await doesUserNameExist(username);
    if (!usernameExists.length) {
      try {
        const createdUserResult = await createUserWithEmailAndPassword(
          auth,
          emailAddress,
          password
        );

        await updateProfile(createdUserResult.user, {
          displayName: username,
        });

        // Use collection to get a CollectionReference
        const usersCollection = collection(firestore, "users");
        const userRef = doc(usersCollection, createdUserResult.user.uid);

        await setDoc(userRef, {
          userId: createdUserResult.user.uid,
          username: username.toLowerCase(),
          emailAddress: emailAddress.toLowerCase(),
          dateCreated: Date.now(),
          cart: [], // Initialize the cart with an empty array
        });

        history.push("/");
      } catch (error) {
        setError(error.message);
      }
    } else {
      setUsername("");
      setEmailAddress("");
      setPassword("");
      setError("That username is already taken, please try another!");
    }
  };

  return (
    <>
      <div className="">
        <div className="">
          <div className="">
            {error && <p className="">{error}</p>}

            <form method="POST" onSubmit={handleSignUp}>
              <input
                value={username}
                onChange={({ target }) =>
                  setUsername(target.value.toLowerCase())
                }
                aria-label="Enter your username"
                className=""
                type="text"
                placeholder="Username"
              />

              <input
                value={emailAddress}
                onChange={({ target }) => setEmailAddress(target.value)}
                aria-label="Enter your email address"
                className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                type="text"
                placeholder="Email address"
              />

              <input
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                aria-label="Enter your password"
                className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                type="password"
                placeholder="Password"
              />

              <button disabled={isInvalid} type="submit" className="">
                Sign UP
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
