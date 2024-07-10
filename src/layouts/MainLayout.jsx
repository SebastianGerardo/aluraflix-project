import { Outlet } from "react-router-dom";
// components
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const MainLayout = () => (
  <div>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);
