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
            <p className="text-lg font-bold">{text}</p>
            <div className="flex justify-center items-center mt-4">
                <Button
                    onClick={cancelButtonHandler}
                    variant="danger"
                    className="w-full mr-4 py-1"
                >
                    No
                </Button>
                <Button
                    onClick={confirmButtonHandler}
                    variant="primary"
                    className="w-full py-1"
                >
                    Yes
                </Button>
            </div>
        </div>
    );
};

export default DialogBox;
