//custom
import LabelCreateForm from "../Label/LabelCreateForm";
import SettingsLabelList from "./SettingsLabelList";
//third
//css
import "./SettingsLabel.css";
import { useUser } from "../../context/UserContext";
import { isAdmin } from "../../functions";
import Alert from "../../components/Alert";
import { useState } from "react";
import IconButton from "../../components/IconButton";
import { MdOutlineNewLabel } from "react-icons/md";

const SettingsLabel = ({ currentProject, ...props }) => {
    const [showCreateLabel, setShowCreateLabel] = useState(false);

    const labels = currentProject.labels;
    const { loggedInUser } = useUser();

    const admin = isAdmin(loggedInUser, currentProject);

    const LabelCreateIcon = () => (
        <IconButton
            Icon={MdOutlineNewLabel}
            className="text-3xl"
            onClick={() => setShowCreateLabel((prevState) => !prevState)}
        />
    );

    return (
        <div className="">
            <div className="flex justify-start items-center px-2 mt-5 text-blue-700">
                <h2 className="text-2xl mr-auto sm:mr-5">Labels</h2>
                <LabelCreateIcon />
            </div>
            {admin ? (
                <div className="flex flex-col lg:flex-row">
                    {showCreateLabel && (
                        <div className="px-2 w-full">
                            <LabelCreateForm currentProject={currentProject} />
                        </div>
                    )}
                    <div
                        className={`px-2 ${
                            showCreateLabel ? "w-full mt-[7px]" : "lg:w-6/12"
                        }`}
                    >
                        <SettingsLabelList labels={labels} />
                    </div>
                </div>
            ) : (
                <div className="flex flex-col w-full">
                    <Alert
                        message={"You are not the admin of this project!"}
                        variant="danger"
                    />
                    <Alert
                        message={"You can not create any labels!"}
                        variant="danger"
                    />
                </div>
            )}
        </div>
    );
};

export default SettingsLabel;
