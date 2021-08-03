import React, { useRef, useState, useContext } from "react";

import { Link, useHistory } from "react-router-dom";
import FirebaseContext from "../contexts/firebase";
import { doesUserNameExist } from "../services/firebase";
const Signup = () => {
  const { firebase } = useContext(FirebaseContext);
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
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
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password);

        await createdUserResult.user.updateProfile({
          displayName: username,
        });

        await firebase.firestore().collection("users").add({
          userId: createdUserResult.user.uid,
          username: username.toLowerCase(),
          fullName,
          emailAddress: emailAddress.toLowerCase(),
          following: [],
          followers: [],
          dateCreated: Date.now(),
        });
        history.push("/");
        // we have to do a redirect to the dashboard
      } catch (error) {
        setFullName("");
        setError(error.message);
      }
    } else {
      setUsername("");
      setFullName("");
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
                value={fullName}
                onChange={({ target }) => setFullName(target.value)}
                aria-label="Enter your full name"
                className=""
                type="text"
                placeholder="Full name"
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
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
};

export default Signup;
