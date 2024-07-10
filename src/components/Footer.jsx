import styles from "./Footer.module.css";
import { ListNavigation } from "./ListNavigation";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src="./logo_footer.png" alt="logo" className={styles.logo_footer} />

      {/* MOBILE OPTIONS */}
      <ListNavigation />
    </div>
  );
};
