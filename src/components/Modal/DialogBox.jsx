import Button from "../Button";

const DialogBox = ({ text, setCancelButton, setConfirmButton }) => {
    const cancelButtonHandler = () => {
        setCancelButton(false);
    };

    const confirmButtonHandler = () => {
        setConfirmButton();
        setCancelButton(false);
    };

    return (
        <div className="">
            <p className="text-lg">{text}</p>
            <div className="grid grid-cols-2 w-full gap-2 mt-2">
                <Button onClick={cancelButtonHandler} variant="danger">
                    No
                </Button>
                <Button onClick={confirmButtonHandler} variant="primary">
                    Yes
                </Button>
            </div>
        </div>
    );
};

export default DialogBox;
