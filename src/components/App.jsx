import Header from "./Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./Footer";
import Livre from "./Livre";
import { BrowserRouter, Routes,Route } from "react-router-dom";

const App = () => {
  const basename = import.meta.env.MODE === "production" ? "/entrainementP8" : "";
  return (
    <BrowserRouter basename={basename}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/livre/:id" element={<Livre />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;