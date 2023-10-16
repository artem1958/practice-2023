import styles from "./About.module.scss";
import email from "../../common/contacts/email.svg";
import { Map, YMaps, Placemark } from "@pbe/react-yandex-maps";
import { Contacts } from "../../common/contacts/Contacts";
import { PremiumLogo } from "../../common/premiumLogo/PremiumLogo";
import { CompanyLogo } from "../../common/companyLogo/CompanyLogo";
import cupGroup from "./image/cupGroup.svg";
import cup from "./image/cup.svg";
import cupBlur from "./image/cupBlur.svg";
export const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutTitle}>О НАС</div>
      <p className={styles.aboutDescription}>
      У нас качественные товары. <div className="" />
      <n>Наши магазины в каждом городе.</n> <div className="" /><n>Если у вас есть идеи по улучшению, то просим отправлять их на почту.</n>
      </p>
      <div className={styles.aboutMail}>
        <img alt="" src={email} />
        kuznetsov.artem.pie12@mail.ru
      </div>
      <YMaps>
  <Map
    width={"50%"}
    defaultState={{
      center: [53.34510446349056, 83.78227755137306],
      zoom: 16,
    }}
  >
    <Placemark geometry={[53.34510446349056, 83.78227755137306]} />
  </Map>
</YMaps>
      <footer className={styles.footer}>
        <Contacts />
        <PremiumLogo className={styles.footerPremium} width={101} height={79.1} />
      </footer>
      <CompanyLogo className={styles.companyLogo} width={150.43} height={60} />
      <img
        className={styles.cupGroup}
        alt=""
        src={cupGroup}
        width={339}
        height={242}
      />
      <img className={styles.cup} alt="" src={cup} width={215} height={274} />
      <img
        className={styles.cupBlur}
        alt=""
        src={cupBlur}
        width={200}
        height={219}
      />
      <PremiumLogo className={styles.premiumLogo} width={100} height={79} />
      <footer className={styles.mobileFooter}>
        <img alt="" src={email} />
        kuznetsov.artem.pie12@mail.ru
      </footer>
    </section>
  );
};
