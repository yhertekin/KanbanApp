import { useDispatch } from "react-redux";
import { changeColor } from "../../redux/todosSlice";

const ColorPicker = ({ todo }) => {
    const dispatch = useDispatch();

    const onClickHandler = (e) => {
        const color = e.target.className.split("-")[1];
        dispatch(
            changeColor({
                id: todo.id,
                color: color,
            })
        );
    };

    return (
        <div className="grid gap-1 grid-cols-3 grid-rows-2 w-full h-full">
            <div
                className="bg-blue-200 rounded-md"
                onClick={onClickHandler}
            ></div>
            <div
                className="bg-red-200 rounded-md"
                onClick={onClickHandler}
            ></div>
            <div
                className="bg-green-200 rounded-md"
                onClick={onClickHandler}
            ></div>
            <div
                className="bg-yellow-200 rounded-md"
                onClick={onClickHandler}
            ></div>
            <div
                className="bg-teal-200 rounded-md"
                onClick={onClickHandler}
            ></div>
            <div
                className="bg-purple-200 rounded-md"
                onClick={onClickHandler}
            ></div>
        </div>
    );
};

export default ColorPicker;
