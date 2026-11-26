import NavBar from "./components/NavBar/NavBar";
import Rodape from "./components/Rodape/Rodape";
import Home from "./pages/Home/Home";
import Destinos from "./pages/Destinos/Destinos";
import Sobre from "./pages/Sobre/Sobre";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>

      <Rodape></Rodape>
    </div>
  );
}

export default App;
