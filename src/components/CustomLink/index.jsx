import { Link, useResolvedPath, useMatch } from "react-router-dom";

const CustomLink = ({ className, matchedClass, children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                className={`${className ?? ""} ${match && matchedClass}`}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
};

export default CustomLink;
