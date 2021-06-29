import React from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

async function handleLogout() {
  await useAuth.signOut();

  userHasAuthenticated(false);

  const useistory.push("/");
}

export default handleLogout;
