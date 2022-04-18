import "./Modal.css";

const Modal = ({ children, cancelModal }) => {
    return (
        <div className="modal">
            <div></div>
            {children}
        </div>
    );
};

export default Modal;
