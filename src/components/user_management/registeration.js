import * as React from 'react';
import { createUser } from '../../api/user-client';
import { useUser } from '../../context/user/user-context';

export default function Registration() {
    const [name, changeName] = React.useState('');
    const [mail, changeMail] = React.useState('');
    const [password, changePassword] = React.useState('');

    const { dispatch } = useUser();

    function submit(event) {
        event.preventDefault();
        const newUser = {
            name: name,
            mail: mail,
            password: password,
        };
        try {
            createUser(newUser);
        } catch (error) {
            console.error(error);
        }
        dispatch({ type: 'signup', user: newUser });
        console.log('Created a new user', newUser);
    }

    return (
        <div className='register-main'>
            <form onSubmit={submit}>
                <label>
                    Name:
                    <input
                        type='text'
                        autoFocus={true}
                        value={name}
                        required='required'
                        onChange={(event) => {
                            event.preventDefault();
                            changeName(event.target.value);
                        }}
                    />
                </label>
                <label>
                    Mail:
                    <input
                        type='email'
                        required='required'
                        value={mail}
                        onChange={(event) => {
                            event.preventDefault();
                            changeMail(event.target.value);
                        }}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type='password'
                        required='required'
                        value={password}
                        onChange={(event) => {
                            event.preventDefault();
                            changePassword(event.target.value);
                        }}
                    />
                </label>
                <input type='submit' name='Submit'></input>
            </form>
        </div>
    );
}
