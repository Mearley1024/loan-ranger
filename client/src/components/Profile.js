// src/components/Profile.js

import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { User } from "../components/User/User.js"

const Profile = () => {
  const { loading, user, key } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return ( 
    <Fragment>
    <div className="container">
        <LoanType2/>
        <LoanType1/>
    </div>
    <img src={user.picture} alt="Profile" />
    <h2>{user.name}</h2>
    <p>{user.email}</p>
    <code>{JSON.stringify(user, null, 2)}</code>  
    </Fragment>
  );
  
  
};
export const User = (props) => {
    const { key } = useAuth0();
    localStorage.setItem("userId" , key);
    return (
            <div>
             { <code>{JSON.stringify(key, null, 2,)}</code> }
            </div>
        )
    }
  
// localStorage.setItem("ID", Profile.code);
console.log(User)

export default Profile;