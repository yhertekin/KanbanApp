import { useState } from "react";
import "./ColorPicker.css";

const colorList = ["blue", "red", "green", "yellow", "teal", "purple"];

const ColorPicker = ({ pickColor, selectedColor, setSelectedColor }) => {
    const onClickHandler = (color) => {
        setSelectedColor(color);
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
