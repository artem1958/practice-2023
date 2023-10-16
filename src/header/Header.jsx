import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import burger from "./burger.svg";
import { useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={styles.appHeader}>
        <MenuItems />
      </header>

      <img
        alt=""
        src={burger}
        onClick={() => setOpen(!open)}
        width={35}
        height={35}
        className={styles.burger}
      />
      {open && (
        <div className={styles.mobileMenu}>
          <p className={styles.mobileMenuTitle}>Меню</p>
          <MenuItems onMenuClick={() => setOpen(false)} />
        </div>
      )}
    </>
  );
};

function MenuItems({ onMenuClick }) {
  const linkClassName = ({ isActive }) =>
    isActive ? styles.active : styles.navLink;
  return (
    <>
      <NavLink onClick={onMenuClick} className={linkClassName} to={"/"}>
        ГЛАВНАЯ
      </NavLink>
      <NavLink onClick={onMenuClick} className={linkClassName} to={"/about"}>
        О НАС
      </NavLink>
      <NavLink onClick={onMenuClick} className={linkClassName} to={"/food"}>
        ЕДА
      </NavLink>
      <NavLink
        onClick={onMenuClick}
        className={linkClassName}
        to={"/fast-food"}
      >
        ФАСТ-ФУД
      </NavLink>
      <NavLink
        onClick={onMenuClick}
        className={linkClassName}
        to={"/ice-cream"}
      >
        МОРОЖЕНОЕ
      </NavLink>
    </>
  );
}
