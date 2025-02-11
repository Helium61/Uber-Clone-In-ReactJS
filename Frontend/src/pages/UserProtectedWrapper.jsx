import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const UserProtectedWrapper = ({ children }) => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token, navigate]); // Added navigate in dependencies

    return <div>{children}</div>;
};

// Define prop types
UserProtectedWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default UserProtectedWrapper;
