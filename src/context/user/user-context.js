import * as React from 'react';

const UserContext = React.createContext();

function userReducer(state, action) {
    switch (action.type) {
        case 'login': {
            return { user: action.user };
        }
        case 'logout': {
            return {
                user: { name: undefined, mail: undefined, token: undefined },
            };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

function UserProvider({ children }) {
    const [state, dispatch] = React.useReducer(userReducer, {
        user: { name: undefined, mail: undefined, token: undefined },
    });
    const value = { state, dispatch };
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
}

function useUser() {
    const context = React.useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}

async function updateUser(dispatch, user, updates) {
    dispatch({ type: 'start update', updates });
    try {
        //! implement a user client which does the call to the backend to update the user
        //const updatedUser = await userClient.updateUser(user, updates)
        //dispatch({ type: 'finish update', updatedUser });
        console.warn('Not yet updated but called with:', { user, updates });
    } catch (error) {
        dispatch({ type: 'fail update', error });
    }
}

export { UserProvider, useUser, updateUser };
