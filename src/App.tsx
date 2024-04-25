// Estilos
import "./styles.css";

// Hooks
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Componentes
import Forms from "./components/Forms";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Paginas
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
