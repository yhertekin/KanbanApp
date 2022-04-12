import styles from "./Input.module.css";

const Input = ({ value, setValue, className, variant, ...props }) => {
  return (
    <input
      className={`${styles.input} ${styles[variant ?? "primary"]} ${
        className ?? ""
      }`}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...props}
    />
  );
};

export default Input;
