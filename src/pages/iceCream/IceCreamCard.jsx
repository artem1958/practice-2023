import { PrimaryButton } from "../../common/primaryButton/PrimaryButton";
import styles from "./IceCream.module.scss";

export const IceCreamCard = ({ cost, img }) => {
  return (
    <div className={styles.iceCreamCard}>
      <img alt="" src={img} />
      <p className={styles.iceCreamCardTitle}>МОРОЖЕНОЕ</p>
      <div className={styles.iceCreamCardOrderPanel}>
        <span>{cost}</span>
        <PrimaryButton>ЗАКАЗАТЬ</PrimaryButton>
      </div>
    </div>
  );
};
