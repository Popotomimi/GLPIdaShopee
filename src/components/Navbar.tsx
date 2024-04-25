import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/"> Home </NavLink>
      <NavLink to={"/forms"}> Novo chamado </NavLink>
      <NavLink to={"/dashboard"}> Painel </NavLink>
    </nav>
  );
};

export default Navbar;
