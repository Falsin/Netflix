import { HashRouter, Routes, Route } from "react-router-dom";
import Homepage from "./homepage/Homepage";
import RegistPage from "./registPage/RegistPage";

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/registPage" element={<RegistPage />} />
      </Routes>
    </HashRouter>
  )
}