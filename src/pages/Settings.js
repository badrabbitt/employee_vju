import Sidebar from "../components/Sidebar";
import MenuChangePassword from "../components/MenuChangePassword";
import MenuInfor from "../components/MenuInfor";
import styles from "./Settings.module.css";

const Settings = () => {
  return (
    <div className={styles.settings}>
      <main className={styles.settings1}>
        <div className={styles.background} />
        <Sidebar />
        <div className={styles.footer}>
          <div className={styles.footerContent}>
            <MenuChangePassword />
            <MenuInfor />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
