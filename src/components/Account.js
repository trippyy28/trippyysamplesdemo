import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../contexts/user";
import FirebaseContext from "../contexts/firebase";
const Container = styled.div`
  font-family: marvin, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 25px;
  margin: 10px;
  padding: 10px;
`;
function Account() {
  const { user } = useContext(UserContext);
  const { auth } = useContext(FirebaseContext);
  return (
    <Container>
      {user ? (
        <div>
          <h3>{user.displayName}</h3>
          <h3>{user.email}</h3>
          <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
      ) : (
        <div>
          <h3>Please Sign In</h3>
        </div>
      )}
      )
    </Container>
  );
}

export default Account;
