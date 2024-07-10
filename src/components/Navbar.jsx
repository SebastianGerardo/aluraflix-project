import styles from "./Navbar.module.css";
import { Link } from "./Link";

export const Navbar = () => {
  return (
    <section className={styles.header}>
      <picture className={styles.header_logo}>
        <img src="./logo.png" alt="" />
      </picture>
      <ul className={styles.header_elements}>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/new-video">NUEVO VIDEO</Link>
        </li>
      </ul>
    </section>
  );
};
