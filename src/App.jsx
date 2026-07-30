import "./styles/globals.css";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";

import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/ScrollTop/ScrollTop";

function Home() {
  return (
    <main className="site">

      <Hero />

      <Portfolio />

      <About />

      <Contact />

    </main>
  );
}

function App() {

  const location = useLocation();

  return (

    <div id="top" className="app">

      <Background />

      <Navbar />

      <AnimatePresence mode="wait">

        <Routes
          location={location}
          key={location.pathname}
        >

          <Route
            path="/"
            element={<Home />}
          />

        </Routes>

      </AnimatePresence>

      <Footer />

      <ScrollTop />

    </div>

  );

}

export default App;