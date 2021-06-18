import React from "react";
import Menu from "../src/components/template/menu/menu";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../src/components/template/footer/footer";
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
          <Footer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
