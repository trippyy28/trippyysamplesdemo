import React, { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

import { Link, useHistory } from "react-router-dom";
import FirebaseContext from "../contexts/firebase";

const Login = () => {
  const { firebase } = useContext(FirebaseContext);
  const { auth } = useContext(FirebaseContext);
  const { firestore } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const isInvalid = password === "" || emailAddress === "";

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, emailAddress, password);
      history.push("/");
    } catch (error) {
      setEmailAddress("");
      setPassword("");
      setError(error.message);
    }
  };

  return (
    <>
      <div className="">
        <div className="">
          <div className="">
            {error && <p className="">{error}</p>}

            <form method="POST" onSubmit={handleLogin}>
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
                Log In
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

export default Login;
