import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  const tailwindClass =
    "p-2.5 w-full pl-[4.5rem] hover:bg-[#f0f0f0] rounded-full font-medium text-zinc-600 cursor-pointer";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${tailwindClass} ${isActive ? "bg-[#f0f0f0]" : ""}`
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
