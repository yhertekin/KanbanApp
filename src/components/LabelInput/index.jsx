import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addLabel } from "../../redux/labelsSlice";

import Input from "../Input";
import Dropdown from "../Dropdown";
import ColorPicker from "../ColorPicker";
import Button from "../Button";
import Alert from "../Alert";

import { GetLabels } from "../../selectors";

const LabelInput = () => {
    const [showColorPicker, setShowColorPicker] = useState(true);
    const [warningMessage, setWarningMessage] = useState("");
    const [text, setText] = useState("");
    const [color, setColor] = useState("");

    const dispatch = useDispatch();

    const textChangeHandler = (e) => setText(e.target.value);
    const colorClickHandler = (e) => setColor(e.target.getAttribute("value"));

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
    };

    return (
        <div>
            {warningMessage && (
                <Alert message={warningMessage} variant="warning" />
            )}
            <Input onChange={textChangeHandler} placeholder="Label Text" />
            <div onClick={() => setShowColorPicker((prevState) => !prevState)}>
                Pick a Label color
            </div>
            {showColorPicker && <ColorPicker pickColor={colorClickHandler} />}
            <Button onClick={addLabelHandler}>Create</Button>
        </div>
    );
};

export default LabelInput;
