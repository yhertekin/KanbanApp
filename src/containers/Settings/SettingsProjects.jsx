//custom
import ProjectCreateForm from "../Projects/ProjectCreateForm";
import ProjectPicker from "../Projects/ProjectPicker";
import SettingsProjectList from "./SettingsProjectList";
import { GetCurrentProject } from "../../selectors";
//third
//css

const SettingsProjects = () => {
    const currentProject = GetCurrentProject();
    return (
        <div className="flex flex-col-reverse lg:flex-row w-full">
            <SettingsProjectList className="w-full p-2" />
            <ProjectCreateForm className="w-full p-2" />
        </div>
    );
};

export default SettingsProjects;
