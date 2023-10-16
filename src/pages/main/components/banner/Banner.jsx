import { CompanyLogo } from "../../../../common/companyLogo/CompanyLogo";
import img from "./img.svg";
import styles from "./Banner.module.scss";
import { PremiumLogo } from "../../../../common/premiumLogo/PremiumLogo";
import { PrimaryButton } from "../../../../common/primaryButton/PrimaryButton";

export const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.logo}>
        <CompanyLogo width={88.2} height={35} />
      </div>
      <div className={styles.content}>
        <div className={styles.titleWrapper}>
          <p className={styles.text}>Попробуйте наш новый кофе</p>
          <PrimaryButton>СКАЧАТЬ ПРИЛОЖЕНИЕ</PrimaryButton>
        </div>
        <img alt="" src={img} className={styles.cup} />
        <div className={styles.premLogo}>
          <PremiumLogo />
        </div>
      </div>
    </section>
  );
};
