import { FoodCard } from "../../common/foodCard/FoodCard";
import { Menu } from "../../common/menu/Menu";
import { Performance } from "../../common/performance/Performance";
import fastFood from "./image/fastFood.svg";
import fast1 from "./image/fast1.svg";
import fast2 from "./image/fast2.svg";
import fast3 from "./image/fast3.svg";
import fast4 from "./image/fast4.svg";
import fast5 from "./image/fast5.svg";
import fast6 from "./image/fast6.svg";
import sauce from "./image/sauce.svg";
import { Contacts } from "../../common/contacts/Contacts";

const cardImageSize = { width: 220, height: 171 };

export const FastFood = () => {
  return (
    <section>
      <Performance title={"ПОПРОБУЙТЕ НАШ ФАСТ-ФУД"} img={fastFood} />
      <Menu>
        <FoodCard
          title={"МЕГАБОКС"}
          description={"Состав: пепси, крылышки, соусы, картошка фри"}
          cost={415}
          img={fast1}
          imgSize={cardImageSize}
        />
        <FoodCard
          title={"ДЭ-КОМБО"}
          description={"Состав: пепси, крылышки, гамбургер, картошка фри"}
          cost={389}
          img={fast2}
          imgSize={cardImageSize}
        />
        <FoodCard
          title={"К-БОКС"}
          description={"Состав: пепси, крылышки, картошка фри"}
          cost={349}
          img={fast3}
          imgSize={cardImageSize}
        />
        <FoodCard
          title={"ЧИЗБУРГЕР"}
          description={"Состав: помидор, курица, петрушка, сыр"}
          cost={59}
          img={fast4}
          imgSize={cardImageSize}
        />
        <FoodCard
          title={"КРЫЛЫШКИ"}
          description={"Из куриного мяса"}
          cost={35}
          img={fast5}
          imgSize={cardImageSize}
        />
        <FoodCard
          title={"НАГГЕТСЫ"}
          description={"Из филе куриной грудки"}
          cost={45}
          img={fast6}
          imgSize={cardImageSize}
        />
      </Menu>
      <Menu centered title="ДОПОЛНИТЕЛЬНОЕ">
        <FoodCard
          title={"СОУС"}
          description={"Томатный"}
          cost={15}
          img={sauce}
          imgSize={cardImageSize}
        />
      </Menu>
      <footer style={{marginTop:-30, marginRight: 13 }} className={"footer"}>
        <Contacts />
      </footer>
    </section>
  );
};
