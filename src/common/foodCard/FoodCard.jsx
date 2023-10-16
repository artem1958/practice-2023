import { PrimaryButton } from "../primaryButton/PrimaryButton";
import styles from "./FoodCard.module.scss";

export const FoodCard = ({ title, description, img, cost }) => {
  return (
    <div className={styles.foodCard}>
      <img className={styles.foodCardImg} alt="" src={img} />
      <p className={styles.foodCardTitle}>{title}</p>
      <p className={styles.foodCardDescription}>{description}</p>
      <div className={styles.foodCardOrderPanel}>
        <span>{cost}</span>
        <PrimaryButton>ЗАКАЗАТЬ</PrimaryButton>
      </div>
    </div>
  );
};
