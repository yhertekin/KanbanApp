import { useSelector } from "react-redux";

const Comment = ({ comment }) => {
    const users = useSelector((state) => state.users.items);
    const username = users.find((user) => user.id === comment.userId)?.username;
    return (
        <div className="bg-stone-200 px-2 py-1 mt-1 hover:bg-stone-300 rounded-md flex justify-between items-center">
            <div>{comment.text}</div>
            <div>{username}</div>
        </div>
    );
};

export default Comment;
