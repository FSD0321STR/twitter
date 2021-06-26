import React from "react";
import useAuth from "../hooks/useAuth";

function UserProfilePage() {
  const { email, lastLogin } = useAuth();
  return (
    <div>
      Last login at <code>{lastLogin.toISOString()}</code> with email{" "}
      <code>{email}</code>
    </div>
  );
}

export default UserProfilePage;
