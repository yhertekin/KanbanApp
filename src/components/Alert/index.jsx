import styles from "./Alert.module.css";

const Alert = ({ message, className, variant }) => {
  return (
    <div className={`${styles[variant ?? "primary"]} ${className ?? ""}`}>
      {message}
    </div>
  );
};

export default Alert;
