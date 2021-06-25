import React from "react";
import Menu from "../src/components/template/menu/menu";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../src/components/template/footer/footer";
/* <<<<<<< HEAD */
import EditProfileForm from "../src/components/user/profile/edit/editAccordion";
import InputCard from "../src/components/tweets/card/inputCard";
import Welcome from "./components/user/welcome/welcomePage";
import TweetCard from "../src/components/tweets/card/card";
import UserProfile from "./components/user/profile/userProfile/userProfile";
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
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/Agustin"></Route>
          <Route path="/Pedro">
            <Menu />
            <InputCard />
            <UserProfile />
            <EditProfileForm />
            <TweetCard />
          </Route>
          <Route path="/Jose">
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
