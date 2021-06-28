import API from './client';

export async function createUser(user) {
    console.log('Creating a new user', user);
    const response = await API.post('/signup', user);
    return response.data;
}

/**
 * Updates a user with new information
 * @param user
 * @param updates
 * @returns the updated user
 */
export async function updateUser(user, updates) {
    let updatedUser = user;
    //! logic to change data
    console.log('Updating a user', updatedUser);
    const response = await API.patch('/updateUser', updateUser);
    return response.data;
}
