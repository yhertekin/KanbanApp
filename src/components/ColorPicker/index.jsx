import { useState } from "react";
import { removeCheckedFromColors } from "../../functions";
import "./ColorPicker.css";

const colorList = ["blue", "red", "green", "yellow", "teal", "purple"];

const ColorPicker = ({ pickColor }) => {
    const [selectedColor, setSelecteColor] = useState("");
    const onClickHandler = (color) => {
        setSelecteColor(color);
        pickColor(color);
    };

    return (
        <div className="colorpicker">
            {colorList.map((color, index) => (
                <div
                    key={index}
                    className={`colorpicker--${color} colorpicker__item ${
                        selectedColor === color && "checked"
                    }`}
                    value={color}
                    name="color"
                    onClick={() => onClickHandler(color)}
                ></div>
            ))}
        </div>
    );
};

export default ColorPicker;
