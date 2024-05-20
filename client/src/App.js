import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Hero />
      <Products />
      <About />
      <Footer />
    </div>
  );
}

export default App;
