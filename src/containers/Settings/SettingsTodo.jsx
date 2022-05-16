import { useState } from "react";
//custom
import Modal from "../../components/Modal";
import TodoEditForm from "../Todo/TodoEditForm";
import IconButton from "../../components/IconButton";
import { FindUserById } from "../../selectors";
import { formatDate } from "../../functions";
//third
import { FiSettings } from "react-icons/fi";
//css
import "./SettingsTodo.css";

const SettingsTodo = ({ todo }) => {
    const [showModal, setShowModal] = useState(false);
    const user = FindUserById(todo.userId);

    const EditIcon = () => (
        <IconButton
            Icon={FiSettings}
            className="settings-todo__user__icon"
            onClick={() => setShowModal(true)}
        />
    );

    return (
        <>
            <div className="settings-todo">
                <div className="settings-todo__user">
                    <EditIcon />
                    {user?.username}
                </div>
                <div>{todo.task}</div>
                <div className="settings-todo__date">
                    {formatDate(todo.createdAt)}
                </div>
                <div className="settings-todo__status">{todo.status}</div>
            </div>
            {showModal ? (
                <Modal showModal={setShowModal}>
                    <TodoEditForm todo={todo} setShowEditTodo={setShowModal} />
                </Modal>
            ) : null}
        </>
    );
};

export default SettingsTodo;
