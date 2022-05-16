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

const LabelCreateForm = ({ className }) => {
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

        removeCheckedFromColors();
    };

    return (
        <div className={`label-create-form ${className ?? ""}`}>
            {warningMessage && (
                <Alert
                    message={warningMessage}
                    variant="danger"
                    className="label-create-form__alert"
                />
            )}
            <h2 className="label-create-form__label-name">Label name</h2>
            <Input
                onChange={textChangeHandler}
                placeholder="Label Text"
                className="label-create-form__label-input"
                value={text}
            />
            <div className="label-create-form__label-text">
                Pick a Label color
            </div>
            <ColorPicker pickColor={colorClickHandler} />
            <Button
                className="label-create-form__button"
                onClick={addLabelHandler}
                variant="primary"
            >
                Create
            </Button>
        </div>
    );
};

export default LabelCreateForm;
