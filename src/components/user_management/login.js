import { useUser } from '../../context/user/user-context';
import Registration from './registeration';

export default function Login() {
    const {
        state: { user },
    } = useUser();
    const { dispatch } = useUser();

    function updateThis() {
        const newUser = {
            name: 'Steve Jobs',
            mail: 'mail@steve,com',
            token: 'random-token',
        };
        dispatch({ type: 'login', user: newUser });
        console.log('updating');
    }

    function updateThat() {
        dispatch({ type: 'logout' });
    }

    function submitUser() {
        alert('user submitted');
    }

    let form;
    if (user && user.name && user.mail) {
        console.log('User logged in');
        form = (
            <form onSubmit={submitUser}>
                <label>
                    Mail:
                    <input type='text' name='name' />
                </label>
                <label>
                    Password:
                    <input type='password' name='password' />
                </label>
                <input type='submit' value='Submit' />
            </form>
        );
    } else {
        console.log('User not logged in');
        form = <Registration />;
    }

    return (
        <div>
            {user && user.name ? user.name : 'no one'} is logged in
            <button onClick={updateThis}>Set user</button>
            <button onClick={updateThat}>Unset</button>
            {form}
        </div>
    );
}
