import Navigation1 from "../components/Navigation1";
import FrameComponent from "../components/FrameComponent";
import MenuChangePassword from "../components/MenuChangePassword";
import MenuInfor from "../components/MenuInfor";
import styles from "./Settings.module.css";

const Settings = () => {
  return (
    <div className={styles.settings}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarBackground} />
        <div className={styles.user}>
          <div className={styles.userImage}>
            <div className={styles.userStatus}>
              <img
                className={styles.maskGroupIcon}
                loading="lazy"
                alt=""
                src="/mask-group@2x.png"
              />
            </div>
            <div className={styles.userName}>
              <button className={styles.nguyenThaiSon} id="user">
                Nguyen Thai Son
              </button>
              <div className={styles.userRole}>
                <a className={styles.admin}>Admin</a>
              </div>
            </div>
          </div>
        </div>
        <Navigation1 />
        <div className={styles.actions}>
          <FrameComponent />
        </div>
      </div>
      <section className={styles.footer}>
        <div className={styles.menuContent}>
          <MenuChangePassword />
          <MenuInfor />
        </div>
      </section>
    </div>
  );
};

export default Settings;