import { useId } from "react";
import styles from "./ToggleButton.module.css";

export default function ToggleButton({ label, options }) {
  const id = useId();

  return (
    <div className={styles.container}>
      <div className={styles.toggle_label}>{label}</div>
      <div className={styles.toggle_button}>
        {options.map(({ label, value }) => {})}
      </div>
    </div>
  );
}
