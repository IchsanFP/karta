import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout"; 
import Biodata from "./pages/Biodata"; 
import BiodataDiv from "./pages/BiodataDiv"; 

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/detail/:id" element={<Biodata />} />
      <Route path="/detaildiv/:id" element={<BiodataDiv />} />
    </Routes>
  );
}
