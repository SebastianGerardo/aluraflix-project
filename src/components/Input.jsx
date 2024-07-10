import styles from "./Input.module.css";

export const Input = ({ label, children, ...props }) => {
  return (
    <label className={styles.input}>
      <span className={styles.input_label}>{label}</span>
      {children ? (
        children
      ) : (
        <input className={styles.input_box} type="text" {...props} />
      )}
    </label>
  );
};
