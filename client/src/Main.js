import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function Main() {
  return (
    <>
      <Header />
      <Sidebar />
      <Hero />
      <Products />
      <About />
      <Footer />
    </>
  );
}

export default Main;
