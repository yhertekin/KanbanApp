import { useState } from "react";
//custom
import ColorPicker from "../../components/ColorPicker";
import Button from "../../components/Button";
import Alert from "../../components/Alert";
import Input from "../../components/Input";
import { addLabel } from "../../redux/labelsSlice";
import { removeCheckedFromColors } from "../../functions";
//third
import { useDispatch } from "react-redux";
//css
import "./LabelCreateForm.css";
import { GetCurrentProject } from "../../selectors";

const LabelCreateForm = ({ className }) => {
    const [warningMessage, setWarningMessage] = useState("");
    const [text, setText] = useState("");
    const [color, setColor] = useState("");

    const dispatch = useDispatch();
    const currentProject = GetCurrentProject();

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

        dispatch(
            addLabel({ color: color, text: text, projectId: currentProject.id })
        );
        setText("");
        setColor("");

        // removeCheckedFromColors();
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
            <h2 className="label-create-form__label-name">Create Label</h2>
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
                Create Label
            </Button>
        </div>
    );
};

export default LabelCreateForm;