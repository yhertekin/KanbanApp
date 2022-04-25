import { useDispatch } from "react-redux";
import { changeColor } from "../../redux/todosSlice";

import "./ColorPicker.css";

const ColorPicker = ({ todo }) => {
    const dispatch = useDispatch();

    const onClickHandler = (e) => {
        const color = e.target.className.split("--")[1].split(" ")[0];
        dispatch(
            changeColor({
                id: todo.id,
                color: color,
            })
        );
    };

    const colorList = ["blue", "red", "green", "yellow", "teal", "purple"];

    return (
        <div className="colorpicker">
            {colorList.map((color, index) => (
                <div
                    key={index}
                    className={`colorpicker--${color} colorpicker__item`}
                    onClick={onClickHandler}
                ></div>
            ))}
        </div>
    );
};

export default ColorPicker;
