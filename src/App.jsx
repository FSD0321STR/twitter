import React from "react";
import Menu from "../src/components/template/menu/menu.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../src/components/template/footer/footer";
import Feed from "../src/components/template/tweets/list/feed/feed.jsx";

function App() {
  return (
    <div>
      <Menu />
      <Feed />
      <Footer />
    </div>
  );
}

export default App;
