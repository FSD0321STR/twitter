import React from "react";
import Menu from "../src/components/template/menu/menu.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../src/components/template/footer/footer";
import Welcome from "./components/users/welcome/welcomePage";

function App() {
  return (
    <div>
      <Menu />
      <Welcome />
      <Footer/>
    </div>
  );
}

export default App;
