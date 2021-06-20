import React from "react";
import Menu from "../src/components/template/menu/menu";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../src/components/template/footer/footer";
/* <<<<<<< HEAD */
import Feed from "../src/components/template/tweets/list/feed/feed.jsx";
import EditProfileForm from "../src/components/user/profile/edit/editAccordion";
import InputCard from "../src/components/tweets/card/inputCard";
import Welcome from "./components/users/welcome/welcomePage";
import TweetCard from "../src/components/tweets/card/card";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/Agustin"></Route>
        <Route path="/Pedro">
          <Menu />
          <InputCard />
          <EditProfileForm />
          <TweetCard />
        </Route>
        <Route path="/Jose">
          <Menu />
          <Feed />
          <Footer />
        </Route>
      </Switch>
    </BrowserRouter>
    // >>>>>>> 69224346b8bac94c85b2859c2244d70f9247696d
  );
}

export default App;
