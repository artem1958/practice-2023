import { PrimaryButton } from "../primaryButton/PrimaryButton";
import styles from "./Performance.module.scss";

export const Performance = ({
  title,
  description = "Закажите прямо сейчас",
  img
}) => {
  return (
    <section className={styles.performance}>
      <p className={styles.performanceTitle}>{title}</p>
      <p className={styles.performanceDescription}>{description}</p>
      <PrimaryButton>ЗАКАЗАТЬ</PrimaryButton>
      <img alt="" src={img} />
    </section>
  );
};
