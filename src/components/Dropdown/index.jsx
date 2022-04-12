import styles from "./Dropdown.module.css";

const Dropdown = ({
  dropdownValue,
  className,
  items,
  placeholder,
  setDropdownValue,
  ...props
}) => {
  return (
    <select
      value={dropdownValue}
      className={`${styles.dropdown} ${className ?? ""}`}
      onChange={(e) => setDropdownValue(e.target.value)}
      {...props}
    >
      <option value="" className={styles.option}>
        {placeholder}
      </option>
      {items.map((item) => (
        <option value={item.key} key={item.key} className={styles.option}>
          {item.value}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
