import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

import Login from '../views/Login'
import Register from '../views/Register'
import Main from '../views/Main'

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route 
                    exact 
                    path='/login'
                    component={Login}
                />
                <Route 
                    exact 
                    path='/register'
                    component={Register}
                />
                <Route 
                    exact 
                    path='/'
                    component={Main}
                />
            </Switch>
        </Router>
    )
}

export default AppRouter
