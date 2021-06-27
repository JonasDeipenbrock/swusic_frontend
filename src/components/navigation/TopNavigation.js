import { Link } from 'react-router-dom';
import './topnavigation.css';

export default function TopNavigation() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About us</Link>
            <Link to='/users'>Users</Link>
            <Link to='/login'>Login</Link>
        </nav>
    );
}
