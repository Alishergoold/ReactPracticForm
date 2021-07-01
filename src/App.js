import React from 'react';
import { Switch, Route, Link} from "react-router-dom";
import Signup from '././Components/Form/SignUp/SignUp';
import Form from './Components/Form/Form';
import Users from './Components/Users';
import Home from './Components/Home';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
      <div className="app">
{/*        
        <Form />
        <Signup />
        <Users />*/}
        <Switch>
          <Route path="/sign-in" component={Form} />
          <Route path="/users" component={Users} />
          <Route path="/sign-up" component={Signup} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
}

export default App;