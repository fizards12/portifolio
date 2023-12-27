import { NavLink } from "react-router-dom";
const NavIcon = ({ Icon, className, to, name, onClick}) => {
  return (
    <NavLink to={to} className={className} onClick={onClick}>
      <Icon />
      <span>{name}</span>
    </NavLink>
  );
};

export default NavIcon;
