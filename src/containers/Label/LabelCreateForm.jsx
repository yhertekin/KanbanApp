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
    const [selectedColor, setSelecteColor] = useState("");

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
        setSelecteColor("");
    };

    return (
        <div className={`${className ?? ""}`}>
            {warningMessage && (
                <Alert message={warningMessage} variant="danger" />
            )}
            <h2 className="text-2xl my-2">Create Label</h2>
            <Input
                onChange={textChangeHandler}
                placeholder="Label Text"
                value={text}
                className="mt-2"
            />
            <div className="mt-4 mb-2">Pick a Label color</div>
            <ColorPicker
                pickColor={colorClickHandler}
                selectedColor={selectedColor}
                setSelecteColor={setSelecteColor}
            />
            <Button
                onClick={addLabelHandler}
                variant="primary"
                className="py-1 px-2 my-4 w-full"
            >
                Create Label
            </Button>
        </div>
    );
};

export default LabelCreateForm;
