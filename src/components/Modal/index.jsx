import { AiOutlineClose } from "react-icons/ai";
import IconButton from "../IconButton";
import "./Modal.css";

const Modal = ({ children, showModal }) => {
    const showModalHandler = () => {
        showModal((prevState) => !prevState);
        console.log("modal close");
    };

    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__close">
                    <IconButton
                        Icon={AiOutlineClose}
                        variant="danger"
                        onClick={showModalHandler}
                    />
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
