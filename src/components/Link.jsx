import { NavLink } from "react-router-dom";
import styles from "./Link.module.css";

export const Link = ({ children, ...props }) => (
  <NavLink
    {...props}
    className={({ isActive }) => `${styles.button} ${isActive && styles.button_active}`}
  >
    {children}
  </NavLink>
);
