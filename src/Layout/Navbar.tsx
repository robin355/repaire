import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="h-16">
      <nav className="w-full h-full max-w-[1230px] px-[20px] mx-auto flex justify-between items-center">
        <span className="text-3xl">Repaire</span>
        <ul className="space-x-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <Button>
            <NavLink to="/login">Login</NavLink>
          </Button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
