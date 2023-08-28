import { ChevronDown, ChevronUp } from "react-feather";
import styles from "./Thermostato.module.css";
import ToggleButton from "../ToggleButton/ToggleButton";
import { useState } from "react";

export default function Thermostato() {
  const [temp, setTemp] = useState(25);
  const [mode, setMode] = useState("celsius");

  function toggleMode() {
    const nextMode = mode === "celsius" ? "fahrenheit" : "celsius";
    setMode(nextMode);
  }

  function upTemp() {
    setTemp(temp + 1);
  }
  function downTemp() {
    setTemp(temp - 1);
  }

  return (
    <>
      <div className={styles.thermostato}>
        <h1 className={styles.h1}>ThermoKing</h1>
        <div className={styles.display}>{temp}°</div>
        <div className={styles.buttons_group}>
          <ToggleButton
            label="Mode"
            options={[
              { label: "C", value: "celsius" },
              { label: "F", value: "fahrenheit" },
            ]}
            selectedValue={mode}
            onChange={toggleMode}
          />
          <div className={styles.chevrons_group}>
            <button onClick={downTemp} className={styles.chevron_btn}>
              <ChevronDown size={35} />
            </button>
            <button onClick={upTemp} className={styles.chevron_btn}>
              <ChevronUp size={35} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
