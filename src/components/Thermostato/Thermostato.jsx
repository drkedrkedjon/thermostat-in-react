import { ChevronDown, ChevronUp } from "react-feather";
import styles from "./Thermostato.module.css";

export default function Thermostato() {
  return (
    <>
      <div className={styles.thermostato}>
        <h1>ThermoKing</h1>
        <div className="thermostato__display">25</div>
        <div>
          <div>
            <label htmlFor="">MODE</label>
            <input type="checkmark" />
          </div>
          <div>
            <button>
              <ChevronDown />
            </button>
            <button>
              <ChevronUp />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
