import { useEffect, useState } from "react";
//custom
import Dropdown from "../../components/Dropdown";
import { GetAllProjects } from "../../selectors";
import { updateCurrentProject } from "../../redux/projectsSlice";
//third
import { useDispatch } from "react-redux";
//css

const ProjectPicker = ({ className }) => {
    const [dropdownValue, setDropdownValue] = useState("");
    const projects = GetAllProjects();

    const dispatch = useDispatch();

    const dropdownItems = projects.map((project) => ({
        key: project.id,
        value: project.name,
    }));

    const dropdownOnChange = (e) => {
        setDropdownValue(e.target.value);
        dispatch(updateCurrentProject(e.target.value));
    };

    useEffect(() => {}, [dropdownValue]);

    return (
        <div className={className}>
            <Dropdown
                value={dropdownValue}
                items={dropdownItems}
                placeholder="Select a project"
                onChange={dropdownOnChange}
            />
        </div>
    );
};

export default ProjectPicker;
