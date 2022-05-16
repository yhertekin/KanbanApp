//custom
//third
import { Link } from "react-router-dom";
//css

const NotFound = () => {
    return (
        <div>
            <div className="text-3xl font-bold">404 Not Found</div>
            <Link to="/" className="underline">
                Return to main page
            </Link>
        </div>
    );
};

export default NotFound;
