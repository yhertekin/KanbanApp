//custom
import ProjectCreateForm from "../Projects/ProjectCreateForm";
import SettingsProjectList from "./SettingsProjectList";
//third
//css

const SettingsProjects = ({ currentProject, ...props }) => {
    return (
        <div className="flex flex-col-reverse lg:flex-row w-full">
            <SettingsProjectList
                className="w-full p-2"
                currentProject={currentProject}
            />
            <ProjectCreateForm className="w-full p-2" />
        </div>
    );
};

export default SettingsProjects;
