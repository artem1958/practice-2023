import styles from "./Menu.module.scss";

export const Menu = ({ title = "МЕНЮ", children, centered }) => {
  return (
    <section className={styles.menu}>
      <p className={styles.menuTitle}>{title}</p>
      <div
        className={styles.menuItems}
        style={centered ? { justifyContent: "center" } : undefined}
      >
        {children}
      </div>
    </section>
  );
};
