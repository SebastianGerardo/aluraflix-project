import styles from "./CourseCard.module.css";

export const CourseCard = ({ image, color, ...props }) => {
  return (
    <div className={styles.course_card}>
      <div
        style={{
          border: `5px solid ${color}`,
          boxShadow: `0px 0px 17px 8px ${color} inset`,
        }}
        className={styles.course_card_picture}
      >
        <img src={image} alt="" />
      </div>
      <ul
        style={{
          border: `5px solid ${color}`,
          borderTop: "none"
        }}
        className={styles.course_card_list}
      >
        <li>
          <div className={styles.course_card_option}>
            <img src="./trash.svg" alt="" />
            Borrar
          </div>
        </li>
        <li>
          <div className={styles.course_card_option}>
            <img src="./edit.svg" alt="" />
            Editar
          </div>
        </li>
      </ul>
    </div>
  );
};
