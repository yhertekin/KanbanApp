import { useState } from "react";
import { useDispatch } from "react-redux";
import IconButton from "../../components/IconButton";
import Modal from "../../components/Modal";
import DialogBox from "../../components/Modal/DialogBox";
import { useUser } from "../../context/UserContext";
import { appendParticipantToProject } from "../../redux/projectsSlice";
const Notifications = () => {
    const { loggedInUser, getUserById } = useUser();

    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const declineHandler = () => {};

    const acceptHandler = ({ projectId, participantId }) => {
        dispatch(
            appendParticipantToProject({
                projectId,
                participantId,
            })
        );
    };

    return (
        <div className="flex-col">
            {loggedInUser.notifications.map((notification) => (
                <div className="my-1">
                    <div
                        onClick={() => setShowModal((prevState) => !prevState)}
                    >
                        You have been invited to a new project!
                    </div>
                    {showModal && (
                        <Modal showModal={setShowModal}>
                            <DialogBox
                                text={`Hi, ${loggedInUser.username}\n${
                                    getUserById(notification.sender).username
                                } invites you to ${notification.projectName}`}
                                setCancelButton={declineHandler}
                                setConfirmButton={() =>
                                    acceptHandler({
                                        projectId: notification.projectId,
                                        participantId: loggedInUser.id,
                                    })
                                }
                            />
                        </Modal>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Notifications;
