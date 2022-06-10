import { useState } from "react";
//custom
import Input from "../../components/Input";
import Button from "../../components/Button";
import Alert from "../../components/Alert";
import { createProject } from "../../redux/projectsSlice";
import { useUser } from "../../context/UserContext";
//third
import { MdOutlineCreate } from "react-icons/md";
import { useDispatch } from "react-redux";
//css
import "./ProjectCreateForm.css";

const formInitial = { projectName: "" };

const ProjectCreateForm = ({ className }) => {
    const [form, setForm] = useState(formInitial);
    const [warningMessage, setWarningMessage] = useState("");

    const { loggedInUser } = useUser();
    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        setForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const createProjectHandler = () => {
        if (form.projectName === "") {
            setWarningMessage("Please provide a project name!");
            return;
        }
        setWarningMessage("");
        dispatch(
            createProject({
                ...form,
                creater: loggedInUser.id,
            })
        );
        setForm(formInitial);
    };

    return (
        <div className={className ?? ""}>
            <h2 className="text-2xl my-2">Create a project</h2>
            <div className="border rounded-md p-2 mt-4">
                {warningMessage && (
                    <Alert
                        message={warningMessage}
                        className="mt-2"
                        variant="danger"
                    />
                )}
                <Input
                    name="projectName"
                    value={form.projectName}
                    onChange={onChangeHandler}
                    placeholder="Project Name"
                    className="my-2 outline-blue-600"
                />

                <Button
                    className="py-1 px-2 h-9 w-full flex justify-center items-center"
                    variant="primary"
                    onClick={createProjectHandler}
                >
                    <MdOutlineCreate className="mr-1 text-lg" />
                    <span>Create Project</span>
                </Button>
            </div>
        </div>
    );
};

export default ProjectCreateForm;
