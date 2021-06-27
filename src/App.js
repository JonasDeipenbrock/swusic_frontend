import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/basic/Home';
import Header from './components/header/header';
import Login from './components/user_management/login';
import { UserProvider } from './context/user/user-context';

function App() {
    return (
        <Router>
            <div className='base-wrapper'>
                <UserProvider>
                    <Header />
                    <Page />
                </UserProvider>
            </div>
        </Router>
    );
}

function Page() {
    return (
        <Switch>
            <Route path='/about'>
                <About />
            </Route>
            <Route path='/users'>
                <Users />
            </Route>
            <Route path='/login'>
                <Login />
            </Route>
            <Route to='/'>
                <Home />
            </Route>
        </Switch>
    );
}

function Users() {
    return <h1>Users</h1>;
}

function About() {
    return <h2>About</h2>;
}

export default App;
