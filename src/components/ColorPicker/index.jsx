import { useState } from "react";
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
                    light: `bg-${color}-300`,
                    dark: `bg-${color}-500`,
                },
            })
        );
    };

    return (
        <div className="grid gap-1  grid-cols-3 grid-rows-2 w-full h-full">
            <div
                className="bg-blue-500 rounded-md"
                onClick={onClickHandler}
            ></div>
            <div
                className="bg-red-500 rounded-md"
                onClick={onClickHandler}
            ></div>
            <div
                className="bg-green-500 rounded-md"
                onClick={onClickHandler}
            ></div>
            <div
                className="bg-yellow-500 rounded-md"
                onClick={onClickHandler}
            ></div>
            <div
                className="bg-teal-500 rounded-md"
                onClick={onClickHandler}
            ></div>
            <div
                className="bg-emerald-500 rounded-md"
                onClick={onClickHandler}
            ></div>
        </div>
    );
};

export default ColorPicker;
