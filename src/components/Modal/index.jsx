import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import IconButton from "../IconButton";

import "./Modal.css";

const Modal = ({ children, showModal }) => {
    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__close">
                    <IconButton
                        Icon={AiOutlineClose}
                        variant="danger"
                        onClick={() => showModal(false)}
                    />
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
