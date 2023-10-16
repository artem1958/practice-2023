import { FoodCard } from "../../common/foodCard/FoodCard";
import { Menu } from "../../common/menu/Menu";
import { Performance } from "../../common/performance/Performance";
import food from "./image/food.svg";
import food1 from "./image/food1.svg";
import food2 from "./image/food2.svg";
import orbit from "./image/orbit.svg";
import { Contacts } from "../../common/contacts/Contacts";

export const Food = () => {
  return (
    <section>
      <Performance title={"ИССЛЕДУЙТЕ НАШИ БЛЮДА"} img={food} />
      <Menu>
        <FoodCard
          title={"БЛИН"}
          description={"С клубникой и кремом"}
          cost={39}
          img={food}
        />
        <FoodCard
          title={"ЗАВТРАК"}
          description={"Состав: стейк, картошка фри, блины, яйца"}
          cost={310}
          img={food1}
        />
        <FoodCard
          title={"КАША"}
          description={"Овсяная"}
          cost={49}
          img={food2}
        />
      </Menu>
      <Menu centered title="ДОПОЛНИТЕЛЬНОЕ">
        <FoodCard title={"ЖВАЧКА"} cost={25} img={orbit} />
      </Menu>
      <footer style={{marginRight: 10 }} className={"footer"}>
        <Contacts />
      </footer>
    </section>
  );
};
