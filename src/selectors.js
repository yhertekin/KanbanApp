import { useMemo } from "react";
import { useSelector } from "react-redux";

export const GetAllUsers = () => useSelector((state) => state.users.items);

export const FindUserById = (userId) => {
    const users = GetAllUsers();
    return useMemo(
        () => users.find((user) => user.id === userId),
        [users, userId]
    );
};

export const GetLoggedInUser = () =>
    useSelector((state) => state.users.loggedInUser);

export const GetAllComments = () =>
    useSelector((state) => state.comments.items);

export const GetCommentById = (id) => {
    const comments = GetAllComments();
    return comments.find((comment) => comment.id === id);
};

export const GetAllTodos = () => useSelector((state) => state.todos.items);

export const GetAllLabels = () => useSelector((state) => state.labels.items);

export const GetLabelById = (labelId) => {
    const labelList = GetAllLabels();
    return labelList.find((label) => label.id === labelId);
};
