import { categoriesCourses } from "../../../helpers/categoriesCourses";
import { CategoryCourses } from "./CategoryCourses";
import styles from "./Courses.module.css";

export const Courses = ({ openModal }) => {
  return (
    <section className={styles.course_card}>
      {categoriesCourses.map((category) => (
        <CategoryCourses openModal={openModal} {...category} />
      ))}
    </section>
  );
};
