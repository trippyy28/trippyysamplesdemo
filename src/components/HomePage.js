import React ,{useContext} from "react";
import UserContext from "../contexts/user";
const HomePage = () => {
  const { user } = useContext(UserContext);
  console.log(user)
  var src = `https://youtube.com/embed/WTuC8vg3m_w?start=0&autoplay=0&modestbranding=1&autohide=1&showinfo=0&controls=0&mute-1`;
  return (
    <div>
      <h1>Hello {user.displayName}</h1>
      <iframe src={src} frameBorder="0" height="500%" width="50%"></iframe>
    </div>
  );
};

export default HomePage;
