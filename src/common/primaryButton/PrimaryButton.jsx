import styles from "./PrimaryButton.module.scss";

export const PrimaryButton = ({ width, height, children, className }) => {
  return (
    <button
      className={styles.button + " " + className}
      style={{ width: width, height: height }}
    >
      {children}
    </button>
  );
};
