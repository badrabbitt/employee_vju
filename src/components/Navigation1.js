import PropTypes from "prop-types";
import styles from "./Navigation1.module.css";

const Navigation1 = ({ className = "" }) => {
  return (
    <div className={[styles.navigation, className].join(" ")}>
      <div className={styles.dashboardHeaderWrapper}>
        <button className={styles.dashboardHeader} id="button_dashboard">
          <img
            className={styles.gridIcon}
            loading="lazy"
            alt=""
            src="/grid.svg"
          />
          <div className={styles.dashboard}>Dashboard</div>
        </button>
      </div>
      <div className={styles.navigationInner}>
        <button className={styles.frameParent} id="button_class">
          <div className={styles.archiveWrapper}>
            <img
              className={styles.archiveIcon}
              loading="lazy"
              alt=""
              src="/archive.svg"
            />
          </div>
          <div className={styles.classes}>Classes</div>
        </button>
      </div>
      <button className={styles.peopleParent} id="button_user">
        <img
          className={styles.peopleIcon}
          loading="lazy"
          alt=""
          src="/people.svg"
        />
        <div className={styles.userManagement}>User Management</div>
      </button>
      <div className={styles.navigationChild}>
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
    </div>
  );
};

Navigation1.propTypes = {
  className: PropTypes.string,
};

export default Navigation1;
