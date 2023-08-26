import { ChevronDown, ChevronUp } from "react-feather";
import styles from "./Thermostato.module.css";
import ToggleButton from "../ToggleButton/ToggleButton";

export default function Thermostato() {
  return (
    <>
      <div className={styles.thermostato}>
        <h1 className={styles.h1}>ThermoKing</h1>
        <div className={styles.display}>25</div>
        <div className={styles.buttons_group}>
          <ToggleButton
            label="Mode"
            options={[
              { label: "C", value: "celsius" },
              { label: "F", value: "fahrenheit" },
            ]}
          />
          <div className={styles.chevrons_group}>
            <button className={styles.chevron_btn}>
              <ChevronDown size={35} />
            </button>
            <button className={styles.chevron_btn}>
              <ChevronUp size={35} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
