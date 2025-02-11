import { createContext, useState } from "react";
import PropTypes from 'prop-types'; // Add prop-types package

export const UserDataContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState({
        email: '',
        fullName: {
            firstName: '',
            lastName: ''
        }
    });

    return (
        <UserDataContext.Provider value={{ user, setUser }}>
            {children}
        </UserDataContext.Provider>
    );
};

UserContext.propTypes = {
    children: PropTypes.node.isRequired
};

export default UserContext;