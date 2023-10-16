import styles from "./ExploreMenu.module.scss";
import { FoodCard } from "./FoodCard";
import food from "./img/food.svg";
import fastFood from "./img/fast-food.svg";
import iceCream from "./img/ice-cream.svg";
import coffees from "./img/cofees.svg";
import { PrimaryButton } from "../../../../common/primaryButton/PrimaryButton";
import { CoffeCard } from "./CoffeCard";
import expresso from "./img/expresso.svg";
import caramel from "./img/caramel.svg";
import iceCoffe from "./img/iceCoffe.svg";
import { CompanyLogo } from "../../../../common/companyLogo/CompanyLogo";
import { Contacts } from "../../../../common/contacts/Contacts";

export const ExploreMenu = () => {
  return (
    <section className={styles.exploreMenu}>
      <div className={styles.layout}>
        <p className={styles.mainTitle}>Исследуйте наше меню</p>

        <div className={styles.foodCards}>
          <FoodCard title={"Еда"} description={"Вкусно!"} img={food} />
          <FoodCard
            title={"Фаст-фуд"}
            description={"Самые вкусные бургеры!"}
            img={fastFood}
          />
          <FoodCard
            title={"Мороженое"}
            description={"Насладитесь нашим мороженым!"}
            img={iceCream}
          />
        </div>

        <div className={styles.orderFood}>
          <img alt="" src={coffees} />
          <div className={styles.orderFoodDescription}>
            <p>Закажите свою любимую пищу</p>
            <PrimaryButton>ЗАКАЗАТЬ</PrimaryButton>
          </div>
        </div>

        <div className={styles.ourCoffe}>
          <p className={styles.ourCoffeTitle}>НАШ КОФЕ</p>
          <div className={styles.ourCoffeCards}>
            <CoffeCard
              title={"Двойной Эспрессо"}
              meta={"#1 продажа"}
              img={expresso}
              cost={230}
            />
            <CoffeCard
              title={"Карамель Фраппе"}
              meta={"#2 продажа"}
              img={caramel}
              cost={310}
            />
            <CoffeCard
              title={"Ледяной Кофе"}
              meta={"#3 продажа"}
              img={iceCoffe}
              cost={270}
            />
          </div>
        </div>

        <div className={styles.downloadApp}>
          <div className={styles.downloadAppTitle}>Свежая еда у Вас дома</div>
          <PrimaryButton>СКАЧАТЬ НАШЕ ПРИЛОЖЕНИЕ</PrimaryButton>
        </div>

        <footer className={styles.footer}>
          <div className={styles.footerLogo}>
            <CompanyLogo className={styles.footerLogoImg} />
            <div className={styles.footerLogoText}>Самый вкусный кофе!</div>
          </div>
          <Contacts />
        </footer>
      </div>
    </section>
  );
};
