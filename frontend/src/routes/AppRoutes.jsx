import ToolPage from "../pages/ToolPage/ToolPage";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/tools/:slug" element={<ToolPage />} />
    </Routes>
  );
}

export default AppRoutes;