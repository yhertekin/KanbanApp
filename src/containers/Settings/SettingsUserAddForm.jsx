import React, { useState } from "react";
import { useUser } from "../../context/UserContext";
import Alert from "../../components/Alert";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { FaPaperPlane } from "react-icons/fa";

const SettingsUserAddForm = ({
    currentProject,
    participants,
    className,
    ...props
}) => {
    const [email, setEmail] = useState("");
    const [warningMessage, setWarningMessage] = useState("");
    const { users, sendNotification, loggedInUser } = useUser();

    const handleAppend = () => {
        if (email === "") {
            setWarningMessage("You have to provide an email address");
            return;
        }

        const user = users.find((user) => user.email === email);

        if (!user) {
            setWarningMessage(
                "We could not find a user with that email! Please check the email address!"
            );
            return;
        }

        if (user.id === currentProject.creater) {
            setWarningMessage("You can not add admin as participant!");
            return;
        }

        if (participants.find((participant) => participant.id === user.id)) {
            setWarningMessage(
                `${user.username} is already in project's participants`
            );
            return;
        }

        sendNotification({
            senderId: loggedInUser.id,
            receiverId: user.id,
            project: currentProject,
        });

        setWarningMessage("Your request has been successfully submitted.");

        setTimeout(() => {
            setWarningMessage("");
        }, 1000);

        setEmail("");
    };
    return (
        <div className={className}>
            <h2 className="text-xl mb-2">Add User</h2>
            {warningMessage && (
                <div className="my-2">
                    <Alert
                        message={warningMessage}
                        variant={
                            warningMessage ===
                            "Your request has been successfully submitted."
                                ? "info"
                                : "danger"
                        }
                    />
                </div>
            )}

            <Input
                placeholder="Add participant with email address"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <Button
                onClick={handleAppend}
                variant="primary "
                className="flex justify-center items-center w-full px-2 py-1 mt-2 mb-4"
            >
                <FaPaperPlane />
                <span className="ml-2">Send add request</span>
            </Button>
        </div>
    );
};

export default SettingsUserAddForm;
