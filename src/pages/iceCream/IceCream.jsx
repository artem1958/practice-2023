import { Menu } from "../../common/menu/Menu";
import { Performance } from "../../common/performance/Performance";
import { IceCreamCard } from "./IceCreamCard";
import commonIce from "./image/commonIce.svg";
import ice1 from "./image/ice1.svg";
import ice2 from "./image/ice2.svg";
import ice3 from "./image/ice3.svg";
import ice4 from "./image/ice4.svg";
import { Contacts } from "../../common/contacts/Contacts";

export const IceCream = () => {
  return (
    <section>
      <Performance title={"НАСЛАДИТЕСЬ НАШИМ МОРОЖЕНЫМ"} img={commonIce} />
      <Menu>
        <IceCreamCard cost={115} img={ice1} />
        <IceCreamCard cost={55} img={ice2} />
        <IceCreamCard cost={29} img={ice3} />
        <IceCreamCard cost={129} img={ice4} />
      </Menu>
      <footer style={{ marginTop: 15, marginRight: 20 }} className={"footer"}>
        <Contacts />
      </footer>
    </section>
  );
};
