import styles from "./Dropdown.module.css";

const Dropdown = ({ className, items, placeholder, ...props }) => {
    return (
        <select className={`${styles.dropdown} ${className ?? ""}`} {...props}>
            <option value="" className={styles.option}>
                {placeholder}
            </option>
            {items.map((item) => (
                <option
                    value={item.key}
                    key={item.key}
                    className={styles.option}
                >
                    {item.value}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;
