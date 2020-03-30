import React from 'react';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import Logon from './pages/logon';
import Register from './pages/register';
import Profile from './pages/profile';
import NewIncident from './pages/NewIncident';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}></Route>
                <Route path="/register" exact component={Register}></Route>
                <Route path="/profile" exact component={Profile}></Route>
                <Route path="/incidents/new" exact component={NewIncident}></Route>
            </Switch>
        </BrowserRouter>
    )
}