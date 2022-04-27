import { useDispatch } from "react-redux";
import { addLabel, removeLabel } from "../../redux/todosSlice";
import Label from "./Label";
import "./LabelPicker.css";

const labelList = [
    {
        id: "1",
        color: "important",
        text: "Important",
    },
    {
        id: "2",
        color: "urgent",
        text: "Urgent",
    },
    {
        id: "3",
        color: "urgent--not",
        text: "Not Urgent",
    },
    {
        id: "4",
        color: "important--not",
        text: "Not Important",
    },
];

const LabelPicker = ({ todo }) => {
    const dispatch = useDispatch();
    const onClickHandler = (label) => {
        todo.labelList.map((item) => console.log("item", item));
        if (todo.labelList.find((todoLabel) => todoLabel.id === label.id)) {
            dispatch(removeLabel({ todoId: todo.id, labelId: label.id }));
        } else {
            dispatch(addLabel({ todoId: todo.id, label: label }));
        }
    };
    return (
        <div className="label__list">
            {labelList.map((label, index) => (
                <Label
                    label={label}
                    key={index}
                    onClick={() => onClickHandler(label)}
                />
            ))}
        </div>
    );
};

export default LabelPicker;
