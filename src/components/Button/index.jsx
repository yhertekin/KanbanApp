import styles from "./Button.module.css";

const Button = ({ className, children, variant, ...props }) => {
  return (
    <button
      className={`${styles[variant ?? "primary"]} ${className ?? ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
