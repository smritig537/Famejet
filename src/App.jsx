import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact";
import Social from "./pages/Social";
import Resources from "./pages/Resources";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/social" element={<Social />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
