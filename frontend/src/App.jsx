import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//components
import Nav from "./components/nav.jsx";
import Hero from "./components/hero.jsx";
import Mid from "./components/mid_hero.jsx";
import One from "./components/oneonone.jsx";
import Review from "./components/review.jsx";
import Footer from "./components/footer.jsx";
const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Mid />
      <One />
      <Review />
      <Footer />
    </>
  );
};
export default App;
