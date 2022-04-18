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

    return (
        <div className="colorpicker">
            <div className="colorpicker--blue" onClick={onClickHandler}></div>
            <div className="colorpicker--red" onClick={onClickHandler}></div>
            <div className="colorpicker--green" onClick={onClickHandler}></div>
            <div className="colorpicker--yellow" onClick={onClickHandler}></div>
            <div className="colorpicker--teal" onClick={onClickHandler}></div>
            <div className="colorpicker--purple" onClick={onClickHandler}></div>
        </div>
    );
};

export default ColorPicker;
