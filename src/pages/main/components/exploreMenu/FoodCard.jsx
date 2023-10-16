import { PrimaryButton } from "../../../../common/primaryButton/PrimaryButton";
import styles from "./ExploreMenu.module.scss";

export const FoodCard = ({ title, description, img }) => {
  return (
    <div className={styles.foodCard}>
      <div className={styles.foodCardLayout}>
        <p className={styles.foodCardTitle}>{title}</p>
        <p className={styles.foodCardDesc}>{description}</p>
        <div className={styles.foodCardContent}>
          <img alt="" src={img} width={112} height={105} />
          <PrimaryButton>ПОДРОБНЕЕ</PrimaryButton>
        </div>
      </div>
    </div>
  );
};
