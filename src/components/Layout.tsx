import { Outlet } from "react-router-dom";
import PokeNavbar from "./Navbar";

export default function Layout() {
  return (
    <>
      <PokeNavbar />
      <Outlet />
    </>
  );
}
