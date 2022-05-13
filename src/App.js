import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items?search=" element={<Search />} />
        <Route path="/items/:id" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
