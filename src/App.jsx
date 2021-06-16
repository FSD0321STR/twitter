import React from "react";
import Menu from "../src/components/template/menu/menu.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../src/components/template/footer/footer"
//import EditProfile from "../src/components/user/profile/edit/edit.jsx";
import TweetCard from "../src/components/tweets/card/card.jsx";


function App() {
  return (
    <div>
      <Menu />
      <TweetCard />
      <Footer />

    </div>
  );
}

export default App;
