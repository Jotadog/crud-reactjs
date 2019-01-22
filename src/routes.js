import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Register from './pages/Register/Register';
import Edit from './pages/Edit/Edit';

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route path='/register' component={Register} />
                    <Route path='/Edit/:id' component={Edit} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;