import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-around h-11 items-center border-b-2 shadow-lg mb-2 bg-green-200">
        <div>
          <NavLink to="/">Logo</NavLink>
        </div>
        <div className="flex gap-7">
          <NavLink to="/login">Login </NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
