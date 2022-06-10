import { useEffect, useState } from "react";
//custom
import Dropdown from "../../components/Dropdown";
//third
//css

const ProjectPicker = ({ className }) => {
    const [dropdownValue, setDropdownValue] = useState("");

    const dropdownItems = projects?.map((project) => ({
        key: project.id,
        value: project.name,
    }));

    const dropdownOnChange = (e) => {
        setDropdownValue(e.target.value);
    };

    useEffect(() => {}, [dropdownValue]);

    return (
        <div className={className}>
            <Dropdown
                value={dropdownValue}
                items={dropdownItems}
                placeholder="Select a project"
                onChange={dropdownOnChange}
                className="shadow-md outline-blue-600"
            />
        </div>
    );
};

export default ProjectPicker;
