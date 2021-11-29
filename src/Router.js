import { HashRouter, Routes, Route } from "react-router-dom";
import Homepage from "./homepage/Homepage";

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </HashRouter>
  )
}