import { useDispatch } from "react-redux";
import { changeColor } from "../../redux/todosSlice";

import "./ColorPicker.css";

const ColorPicker = ({ todo }) => {
    const dispatch = useDispatch();

    const onClickHandler = (e) => {
        const color = e.target.className.split("--")[1];
        console.log(color);
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
            {colorList.map((color) => (
                <div
                    className={`colorpicker--${color}`}
                    onClick={onClickHandler}
                ></div>
            ))}
        </div>
    );
};

export default ColorPicker;
