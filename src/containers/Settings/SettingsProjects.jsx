//custom
import IconButton from "../../components/IconButton";
import ProjectCreateForm from "../Projects/ProjectCreateForm";
import SettingsProjectList from "./SettingsProjectList";
import { CgFolderAdd } from "react-icons/cg";
import { useState } from "react";
//third
//css

const SettingsProjects = ({ currentProject, ...props }) => {
    const [showAddProject, setShowAddProject] = useState(false);

    const AddIcon = () => (
        <IconButton
            Icon={CgFolderAdd}
            className="text-3xl "
            onClick={() => setShowAddProject((prevState) => !prevState)}
        />
    );
    return (
        <div className="w-full">
            <div className="flex justify-start items-center px-2 text-blue-700">
                <h2 className="text-2xl my-2 mr-auto sm:mr-5">Projects</h2>
                <AddIcon />
            </div>
            <div className="flex flex-col lg:flex-row">
                {showAddProject && (
                    <ProjectCreateForm className="w-full px-2 mb-5" />
                )}
                <SettingsProjectList
                    className={`px-2 ${
                        showAddProject ? "w-full" : "lg:w-6/12 "
                    }`}
                    currentProject={currentProject}
                />
            </div>
        </div>
    );
};

export default SettingsProjects;
