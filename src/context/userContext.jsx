import React, { createContext, useState } from 'react'

const UserContext = createContext();

export const UserContextProvider = (props) => {
const [userData, setUserData] = useState([]);

const value = {
    userData,
    setUserData
}

return (
    <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext