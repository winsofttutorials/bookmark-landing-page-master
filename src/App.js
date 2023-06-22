import React from "react";
import "./App.css";
import {
  Hero,
  Features,
  Download,
  Faq,
  GetStarted,
  Footer,
} from "./components";

const App = () => {
  return (
    <>
      <section className="App">
        <Hero />
        <Features />
        <Download />
        <Faq />
        <GetStarted />
        <Footer />
      </section>
    </>
  );
};

export default App;
