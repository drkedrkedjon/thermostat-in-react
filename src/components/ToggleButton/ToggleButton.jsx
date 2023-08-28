/* eslint-disable react/prop-types */
import { useId } from "react";
import styles from "./ToggleButton.module.css";

export default function ToggleButton({
  label,
  options,
  selectedValue,
  onChange,
}) {
  const id = useId();

  return (
    <div className={styles.container}>
      <div className={styles.toggle_label}>{label}</div>
      <div className={styles.toggle_button}>
        {options.map(({ label, value }) => {
          const optionId = `${id}-${label}`;
          const isSelected = selectedValue === value;

          return (
            <label
              className={`${styles.options} ${
                isSelected ? styles.selectedOptions : ""
              }`}
              key={optionId}
              htmlFor={optionId}
            >
              <input
                type="radio"
                name={id}
                value={value}
                checked={isSelected}
                onChange={onChange}
              ></input>
              {label}
            </label>
          );
        })}
      </div>
    </div>
  );
}
