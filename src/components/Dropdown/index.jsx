import "./Dropdown.css";

const Dropdown = ({ className, items, placeholder, ...props }) => {
    return (
        <select className={`dropdown ${className ?? ""}`} {...props}>
            <option value="" className="dropdown__option">
                {placeholder}
            </option>
            {items.map((item) => (
                <option
                    value={item.key}
                    key={item.key}
                    className="dropdown__option"
                >
                    {item.value}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;
