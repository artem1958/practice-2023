import styles from "./MainPage.module.scss";
import { Banner } from "./components/banner/Banner";
import { ExploreMenu } from "./components/exploreMenu/ExploreMenu";

export const MainPage = () => {
  return (
    <section className={styles.mainPage}>
      <Banner />
      <ExploreMenu />
    </section>
  );
};
