import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="reservation" element={<Reservation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
