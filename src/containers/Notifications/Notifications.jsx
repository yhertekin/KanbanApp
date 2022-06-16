import { useState } from "react";
import { useDispatch } from "react-redux";
import IconButton from "../../components/IconButton";
import Modal from "../../components/Modal";
import DialogBox from "../../components/Modal/DialogBox";
import { useUser } from "../../context/UserContext";
import { appendParticipantToProject } from "../../redux/projectsSlice";
const Notifications = ({ className }) => {
    const [showModal, setShowModal] = useState(false);
    const { loggedInUser, getUserById, removeNotification } = useUser();

    const dispatch = useDispatch();

    const declineHandler = ({ notificationId: notificationId }) => {
        removeNotification({
            userId: loggedInUser.id,
            notificationId: notificationId,
        });
        console.log(loggedInUser.id, notificationId);
        setShowModal(false);
    };

    const acceptHandler = ({ projectId, participantId, notificationId }) => {
        dispatch(
            appendParticipantToProject({
                projectId,
                participantId,
            })
        );
        removeNotification({
            userId: loggedInUser.id,
            notificationId: notificationId,
        });
        setShowModal(false);
    };

    return (
        <div className={className}>
            {loggedInUser.notifications.map((notification) => (
                <div className="my-1" key={notification.id}>
                    <div
                        className="flex justify-start items-center rounded-md hover:bg-gray-100 p-2"
                        onClick={() => setShowModal((prevState) => !prevState)}
                    >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        <span> You have an invitation!</span>
                    </div>
                    {showModal && (
                        <Modal showModal={setShowModal}>
                            <DialogBox
                                text={`Hi ${loggedInUser.username}, ${
                                    getUserById(notification.sender).username
                                } invites you to ${notification.projectName}`}
                                setCancelButton={() =>
                                    declineHandler({
                                        notificationId: notification.id,
                                    })
                                }
                                setConfirmButton={() =>
                                    acceptHandler({
                                        projectId: notification.projectId,
                                        participantId: loggedInUser.id,
                                        notificationId: notification.id,
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
