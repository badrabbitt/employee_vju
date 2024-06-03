import PropTypes from "prop-types";
import styles from "./Content.module.css";

const Content = ({ className = "" }) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <button className={styles.contentHeader} id="button_dashboard">
        <div className={styles.contentHeaderInner}>
          <img
            className={styles.gridIcon}
            loading="lazy"
            alt=""
            src="/grid.svg"
          />
          <div className={styles.dashboard}>Dashboard</div>
        </div>
      </button>
      <button className={styles.contentHeader1} id="button_classes">
        <div className={styles.frameParent}>
          <div className={styles.archiveWrapper}>
            <img
              className={styles.archiveIcon}
              loading="lazy"
              alt=""
              src="/archive.svg"
            />
          </div>
          <div className={styles.classes}>Classes</div>
        </div>
      </button>
      <button className={styles.contentHeader2} id="button_user_management">
        <img
          className={styles.peopleIcon}
          loading="lazy"
          alt=""
          src="/people.svg"
        />
        <div className={styles.userManagement}>User Management</div>
      </button>
      <div className={styles.contentHeader3}>
        <button className={styles.frameGroup} id="button_schedule">
          <div className={styles.calendar2weekWrapper}>
            <img
              className={styles.calendar2weekIcon}
              loading="lazy"
              alt=""
              src="/calendar2week.svg"
            />
          </div>
          <div className={styles.schedule}>Schedule</div>
        </button>
      </div>
      <div className={styles.contentHeader4}>
        <button className={styles.frameContainer} id="button_grades">
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
      <div className={styles.contentFooter}>
        <div className={styles.contentFooterInner}>
          <div className={styles.footerActions}>
            <button className={styles.downloadIconParent} id="button_downloads">
              <div className={styles.downloadIcon}>
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
            <button className={styles.settings}>
              <div className={styles.settingsChild} />
              <div className={styles.gearWrapper}>
                <img className={styles.gearIcon} alt="" src="/gear.svg" />
              </div>
              <div className={styles.settings1}>Settings</div>
            </button>
            <div className={styles.frameWrapper}>
              <button className={styles.frameButton} id="button_trash">
                <div className={styles.trashWrapper}>
                  <img
                    className={styles.trashIcon}
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
      </div>
      <div className={styles.contentHeader5}>
        <button className={styles.frameParent1} id="button_logout">
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

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
