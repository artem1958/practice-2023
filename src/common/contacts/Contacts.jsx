import styles from "./Contacts.module.scss";
import email from "./email.svg";

export const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.contactsTitle}>СВЯЗЬ С НАМИ</div>
      <div className={styles.contactsMail}>
        <img alt="" src={email} />
        kuznetsov.artem.pie12@mail.ru
      </div>
    </div>
  );
};
