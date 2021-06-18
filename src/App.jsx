import React from "react";
import Menu from "../src/components/template/menu/menu";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../src/components/template/footer/footer"
import EditProfileForm from '../src/components/user/profile/edit/editAccordion'
import TweetCard from "../src/components/tweets/card/card";


function App() {
  return (
    <div>
      <Menu />
      <TweetCard />
      <EditProfileForm />
      <Footer />

    </div>
  );
}

export default App;
