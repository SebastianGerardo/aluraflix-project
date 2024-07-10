import { categoriesCourses } from "../../../helpers/categoriesCourses";
import { CategoryCourses } from "./CategoryCourses";
import styles from "./Courses.module.css";

export const Courses = () => {
  return (
    <section className={styles.course_card}>
      {categoriesCourses.map((category) => (
        <CategoryCourses {...category} />
      ))}
    </section>
  );
};
