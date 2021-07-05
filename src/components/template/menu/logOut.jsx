import React from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

async function handleLogout() {
  await Auth.signOut();

  userHasAuthenticated(false);

  history.push("/");
}

export default handleLogout;
