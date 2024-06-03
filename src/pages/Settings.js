import Content from "../components/Content";
import MenuChangePassword from "../components/MenuChangePassword";
import MenuInfor from "../components/MenuInfor";
import styles from "./Settings.module.css";

const Settings = () => {
  return (
    <div className={styles.settings}>
      <div className={styles.sidebarWrapper}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarInner}>
            <div className={styles.frameParent}>
              <div className={styles.maskGroupWrapper}>
                <img
                  className={styles.maskGroupIcon}
                  loading="lazy"
                  alt=""
                  src="/mask-group@2x.png"
                />
              </div>
              <div className={styles.userProfile}>
                <div className={styles.nguyenThaiSon}>Nguyen Thai Son</div>
                <div className={styles.userType}>
                  <div className={styles.admin}>Admin</div>
                </div>
              </div>
            </div>
          </div>
          <Content />
        </div>
      </div>
      <section className={styles.bottomBar}>
        <div className={styles.bottomLeftMenu}>
          <MenuChangePassword />
          <MenuInfor />
        </div>
      </section>
      <div className={styles.notificationArea}>
        <button className={styles.notification11} id="button_ring">
          <img
            className={styles.notification111}
            alt=""
            loading="lazy"
            src="/notification-1-1@3x.png"
          />
        </button>
      </div>
      <div className={styles.messageArea}>
        <div className={styles.message1} />
      </div>
    </div>
  );
};

export default Settings;