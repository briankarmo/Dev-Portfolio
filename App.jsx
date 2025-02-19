import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="portfolio"><Portfolio /></section>
        <section id="experience"><Experience /></section>
        <section id="contact"><Contact /></section>
      </main>
      <SocialLinks />
    </>
  );
}

export default App;
