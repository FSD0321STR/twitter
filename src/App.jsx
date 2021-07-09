import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "./components/tweets/tweets/list/feed/feed.jsx";
import Welcome from "../src/components/user/welcome/welcomePage";
import UserProfilePage from "../src/components/user/profile/userProfile/userProfile";
import PrivateRoute from "./components/privateRoute";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import AuthProvider from "./components/authProvider";

async function handleLogout() {
  await Auth.signOut();

  userHasAuthenticated(false);

  history.push("/");
}

function App() {
  const history = useHistory();
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <PrivateRoute path="/List">
            <Feed />
          </PrivateRoute>
          <PrivateRoute path="/userPage">
            <UserProfilePage />
          </PrivateRoute>
          <PrivateRoute path="/Explorer">
            <Feed />
          </PrivateRoute>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
