import "./App.css";
import Clients from "./components/Clinets/Clients";
import Footer from "./components/footer/Footer";
import Home from "./components/Home/Home";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonial/Testimonial";

function App() {
  return (
    <>
      <Home />
      <Services />
      <Testimonial />
      <Clients />
      <Footer />
    </>
  );
}

export default App;
