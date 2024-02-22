import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user || user.username === "")
    return (
      <div>
        <h4>please login</h4>
      </div>
    );

  return (
    <div>
      <h2>Welcome {user.username}</h2>
    </div>
  );
}

export default Profile;
