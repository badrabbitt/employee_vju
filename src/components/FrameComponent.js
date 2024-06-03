import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <button className={styles.frameGroup} id="button_grades">
          <div className={styles.vectorWrapper}>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div className={styles.grades}>Grades</div>
        </button>
      </div>
      <div className={styles.downloadsHeaderParent}>
        <div className={styles.downloadsHeader}>
          <button className={styles.downloadsIcon} id="button_downloads">
            <div className={styles.downloadButton}>
              <img
                className={styles.cloudarrowdownIcon}
                loading="lazy"
                alt=""
                src="/cloudarrowdown.svg"
              />
            </div>
            <div className={styles.downloads}>Downloads</div>
          </button>
        </div>
        <div className={styles.settingsParent}>
          <button className={styles.settings} id="button_settings">
            <div className={styles.settingsChild} />
            <div className={styles.settingsIcon}>
              <img className={styles.gearIcon} alt="" src="/gear.svg" />
            </div>
            <div className={styles.settings1}>Settings</div>
          </button>
          <div className={styles.trashHeaderWrapper}>
            <button className={styles.trashHeader} id="button_trash">
              <div className={styles.trashIcon}>
                <img
                  className={styles.trashIcon1}
                  loading="lazy"
                  alt=""
                  src="/trash.svg"
                />
              </div>
              <div className={styles.trash}>Trash</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <button className={styles.frameButton} id="button_logout">
          <div className={styles.boxarrowrightWrapper}>
            <img
              className={styles.boxarrowrightIcon}
              loading="lazy"
              alt=""
              src="/boxarrowright.svg"
            />
          </div>
          <div className={styles.logOut}>Log Out</div>
        </button>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
