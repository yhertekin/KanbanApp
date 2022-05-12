import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addLabel } from "../../redux/labelsSlice";

import Input from "../Input";
import Dropdown from "../Dropdown";
import ColorPicker from "../ColorPicker";
import Button from "../Button";
import Alert from "../Alert";

import { GetLabels } from "../../selectors";
import { removeCheckedFromColors } from "../../functions";

const LabelInput = ({ className }) => {
    const [warningMessage, setWarningMessage] = useState("");
    const [text, setText] = useState("");
    const [color, setColor] = useState("");

    const dispatch = useDispatch();

    const textChangeHandler = (e) => setText(e.target.value);
    const colorClickHandler = (color) => setColor(color);

    const addLabelHandler = () => {
        if (text === "") {
            setWarningMessage("Label text can not be empty!");
            return;
        }
        if (color === "") {
            setWarningMessage("You have to pick a label color!");
            return;
        }
        setWarningMessage("");

        dispatch(addLabel({ color: color, text: text }));
        setText("");
        setColor("");

        // ferhat abiye sor
        removeCheckedFromColors();
    };

    return (
        <div className={className ?? ""}>
            {warningMessage && (
                <Alert
                    message={warningMessage}
                    variant="danger"
                    className="mb-1"
                />
            )}
            <h2 className="opacity-75 mb-2">Label name</h2>
            <Input
                onChange={textChangeHandler}
                placeholder="Label Text"
                className="outline-blue-600"
                value={text}
            />
            <div className="opacity-75 mt-5 mb-2">Pick a Label color</div>
            <ColorPicker pickColor={colorClickHandler} />
            <Button
                className="mt-5 w-full"
                onClick={addLabelHandler}
                variant="primary"
            >
                Create
            </Button>
        </div>
    );
};

export default LabelInput;
