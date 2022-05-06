import { useEffect, useState } from "react";
import { FiSettings } from "react-icons/fi";

import IconButton from "../IconButton";
import Modal from "../Modal";
import TodoEdit from "../TodoEdit";

import { FindUserById } from "../../selectors";
import { formatDate } from "../../functions";

import "./SettingsTodo.css";

const SettingsTodo = ({ todo }) => {
    const [showModal, setShowModal] = useState(false);
    const user = FindUserById(todo.userId);

    const EditIcon = () => (
        <IconButton
            Icon={FiSettings}
            className="mr-3"
            onClick={() => setShowModal(true)}
        />
    );

    return (
        <>
            <div className="settings__list__item">
                <div className="flex justify-start items-center">
                    <EditIcon />
                    {user?.username}
                </div>
                <div>{todo.task}</div>
                <div className="settings__list__item__field">
                    {formatDate(todo.createdAt)}
                </div>
                <div className="settings__list__item__field">{todo.status}</div>
            </div>
            {showModal ? (
                <Modal showModal={setShowModal}>
                    <TodoEdit todo={todo} setShowEditTodo={setShowModal} />
                </Modal>
            ) : null}
        </>
    );
};

export default SettingsTodo;
