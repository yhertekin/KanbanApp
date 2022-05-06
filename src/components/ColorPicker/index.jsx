import "./ColorPicker.css";

const colorList = ["blue", "red", "green", "yellow", "teal", "purple"];

const ColorPicker = ({ pickColor }) => {
    return (
        <div className="colorpicker">
            {colorList.map((color, index) => (
                <div
                    key={index}
                    className={`colorpicker--${color} colorpicker__item`}
                    value={color}
                    name="color"
                    onClick={pickColor}
                ></div>
            ))}
        </div>
    );
};

export default ColorPicker;
