import Header from "./components/header/Header";
import Main from "./components/Main.jsx/Main";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Create from "./components/create/Create";

function App() {
  return (
    <div className="culum">
      <Header />
      <Hero />
      <Main />
      <Create />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
