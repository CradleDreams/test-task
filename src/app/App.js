import HomeSlide from "../widgets/HomeSlide/HomeSlide";
import InfoSlide from "../widgets/InfoSlide/InfoSlide";
import ProductSlide from "../widgets/ProductSlide/ProductSlide";
import "./App.css"
import React from "react";

function App() {
  return (
    <>
      <img src={"images/logo.png"} className={"main-el"}/>
      <img src={"images/home.png"} className={"main-el"}/>
      
      <div className="wrapper">
        <section><HomeSlide/></section>
        <section><InfoSlide/></section>
        <section><ProductSlide/></section>
      </div>
    </>
  );
}

export default App;
