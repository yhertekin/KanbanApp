import { useDispatch } from "react-redux";
import { changeColor } from "../../redux/todosSlice";

const ColorPicker = ({ todo }) => {
    const dispatch = useDispatch();

    const onClickHandler = (e) => {
        const color = e.target.className.split("-")[1];
        console.log(e.target.className.split("-"));
        dispatch(
            changeColor({
                id: todo.id,
                color: {
                    light: `bg-${color}-500`,
                    dark: `bg-${color}-300`,
                },
            })
        );
    };

    return (
        <div className="grid gap-1 grid-cols-3 grid-rows-2 w-full h-full">
            <div
                className="bg-blue-300 rounded-md"
                onClick={onClickHandler}
            ></div>
            <div
                className="bg-red-300 rounded-md"
                onClick={onClickHandler}
            ></div>
            <div
                className="bg-green-300 rounded-md"
                onClick={onClickHandler}
            ></div>
            <div
                className="bg-yellow-300 rounded-md"
                onClick={onClickHandler}
            ></div>
            <div
                className="bg-teal-300 rounded-md"
                onClick={onClickHandler}
            ></div>
            <div
                className="bg-emerald-300 rounded-md"
                onClick={onClickHandler}
            ></div>
        </div>
    );
};

export default ColorPicker;
