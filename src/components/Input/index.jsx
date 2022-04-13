import styles from "./Input.module.css";

const Input = ({ className, variant, ...props }) => {
    return (
        <input
            className={`${styles.input} ${styles[variant ?? "primary"]} ${
                className ?? ""
            }`}
            {...props}
        />
    );
};

export default Input;
