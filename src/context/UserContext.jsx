import { createContext, useContext, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { getItemFromLocalStorage, updateLocalStorage } from "../functions";
import { createProject } from "../redux/projectsSlice";
import { useDispatch } from "react-redux";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState(getItemFromLocalStorage("users") || []);
    const [loggedInUser, setLoggedInUser] = useState(
        getItemFromLocalStorage("loggedInUser") || null
    );
    const dispatch = useDispatch();

    useEffect(() => {
        updateLocalStorage("users", users);
    }, [users]);

    useEffect(() => {
        updateLocalStorage("loggedInUser", loggedInUser);
    }, [loggedInUser]);

    const createUser = (registerForm) => {
        const user = {
            id: nanoid(),
            currentProject: "",
            notifications: [],
            ...registerForm,
        };

        const projectId = nanoid();

        dispatch(
            createProject({
                id: projectId,
                projectName: "Default Project",
                creater: user.id,
            })
        );

        user.currentProject = projectId;
        setUsers((prevState) => [user, ...prevState]);
    };

    const removeUser = (userId) => {
        setUsers((prevState) => prevState.filter((user) => user.id !== userId));
    };

    const updateUser = ({ userId, updateForm }) => {
        const index = users.findIndex((user) => user.id === userId);
        users[index] = { ...users[index], ...updateForm };
        setUsers([...users]);
    };

    const loginUser = (userId) => {
        setLoggedInUser(users.find((user) => user.id === userId));
    };

    const logoutUser = () => {
        setLoggedInUser(null);
    };

    const getUserById = (userId) => {
        return users.find((user) => user.id === userId);
    };

    const updateCurrentProject = (projectId) => {
        loggedInUser.currentProject = projectId;
        setLoggedInUser({ ...loggedInUser });
        updateUser({
            userId: loggedInUser.id,
            updateForm: { currentProject: projectId },
        });
    };

    const sendNotification = ({ senderId, receiverId, project }) => {
        const notification = {
            id: nanoid(),
            sender: senderId,
            projectId: project.id,
            projectName: project.projectName,
        };

        console.log("notification:", notification);
        const index = users.findIndex((user) => user.id === receiverId);
        console.log("user context - index: ", index);
        users[index].notifications = [
            notification,
            ...users[index].notifications,
        ];
        setUsers([...users]);
    };

    const value = {
        users,
        loggedInUser,
        createUser,
        removeUser,
        updateUser,
        loginUser,
        logoutUser,
        getUserById,
        updateCurrentProject,
        sendNotification,
    };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
