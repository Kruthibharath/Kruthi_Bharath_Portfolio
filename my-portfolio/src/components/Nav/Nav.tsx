import { NavLink } from "react-router-dom";

export const Nav: React.FC = () => {
  return (
    <ul>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/aboutMe">About Me</NavLink>
      </li>
      <li>
        <NavLink to="/experience">Work Experience</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Details</NavLink>
      </li>
    </ul>
  );
};
