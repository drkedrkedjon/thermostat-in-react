import { ChevronDown, ChevronUp } from "react-feather";
import styles from "./Thermostato.module.css";

export default function Thermostato() {
  return (
    <>
      <div className={styles.thermostato}>
        <h1 className={styles.h1}>ThermoKing</h1>
        <div className={styles.display}>25</div>
        <div className={styles.buttons_group}>
          <div>
            <label htmlFor="">MODE</label>
            <input type="checkmark" />
          </div>
          <div className={styles.chevrons_group}>
            <button className={styles.chevron_btn}>
              <ChevronDown />
            </button>
            <button className={styles.chevron_btn}>
              <ChevronUp />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}