import { removeCheckedFromColors } from "../../functions";
import "./ColorPicker.css";

const colorList = ["blue", "red", "green", "yellow", "teal", "purple"];

const ColorPicker = ({ pickColor }) => {
    const onClickHandler = (e) => {
        //ferhat abiye sor
        removeCheckedFromColors();
        e.target.classList.add("checked");
        pickColor(e);
    };

    return (
        <div className="colorpicker">
            {colorList.map((color, index) => (
                <div
                    key={index}
                    className={`colorpicker--${color} colorpicker__item`}
                    value={color}
                    name="color"
                    onClick={onClickHandler}
                ></div>
            ))}
        </div>
    );
};

export default ColorPicker;
