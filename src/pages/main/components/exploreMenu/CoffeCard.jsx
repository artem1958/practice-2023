import { PrimaryButton } from "../../../../common/primaryButton/PrimaryButton";
import styles from "./ExploreMenu.module.scss";

export const CoffeCard = ({ title, meta, cost, img }) => {
  return (
    <div className={styles.coffeCard}>
      <img className={styles.coffeCardImage} alt="" src={img} />
      <div className={styles.coffeCardDescription}>
        <div className={styles.coffeCardDescriptionWrapper}>
          <p className={styles.coffeCardDescriptionMeta}>{meta}</p>
          <p className={styles.coffeCardDescriptionTitle}>{title}</p>
        </div>
      </div>
      <div className={styles.centered}>
        <div className={styles.coffeCardOrderPanel}>
          <div className={styles.coffeCardOrderPanelCost}>{cost}</div>
          <PrimaryButton>ЗАКАЗАТЬ</PrimaryButton>
        </div>
      </div>
    </div>
  );
};
