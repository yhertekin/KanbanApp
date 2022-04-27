import { useSelector } from "react-redux";

export const GetAllUsers = () => useSelector((state) => state.users.items);

export const FindUserById = (userId) => {
    const users = useSelector((state) => state.users.items);
    return users.find((user) => user.id === userId);
};

export const GetLoggedInUser = () =>
    useSelector((state) => state.users.loggedInUser);

export const GetAllComments = () =>
    useSelector((state) => state.comments.items);

export const GetAllTodos = () => useSelector((state) => state.todos.items);
