import styles from "./IconButton.module.css";

const IconButton = ({ Icon, variant, className, ...props }) => {
  return (
    <Icon
      className={`${styles.icon} ${styles[variant ?? "primary"]} ${
        className ?? ""
      }`}
      {...props}
    />
  );
};

export default IconButton;
