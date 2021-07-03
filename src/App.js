import React from 'react';
import Signup from '././Components/Form/SignUp/SignUp';
import Form from './Components/Form/Form';
import Users from './Components/Users';
import Header from './Components/Header';
import User from './Components/User'
import { Switch, Route, Link} from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
      <div className="app">
{/*        <Form />
        <Signup />
        <Users />*/}
        <Header />
        <Switch>
          <Route path="/sign-in" component={Form} />
          <Route path="/users" component={Users} />
          <Route path="/user" component={User} />
          <Route path="/sign-up" component={Signup} />
        </Switch>
      </div>
    );
}

export default App;