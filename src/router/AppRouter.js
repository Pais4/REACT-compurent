import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom"
import { useSelector } from 'react-redux'

import Login from '../views/Login'
import Register from '../views/Register'
import Main from '../views/Main'
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'

const AppRouter = () => {

    const { uid } = useSelector(state => state.auth)

    return(
        <Router>
            <Switch>
                <PublicRoute 
                    exact 
                    path='/login' 
                    component={Login}
                    isAuthenticated={ !!uid }
                />
                <PublicRoute 
                    exact 
                    path='/register' 
                    component={Register}
                    isAuthenticated={ !!uid }
                />
                <PrivateRoute
                    exact
                    path='/'
                    component={Main}
                    isAuthenticated={ !!uid }
                />
                <Redirect to='/' />
            </Switch>
        </Router>
    )
}

export default AppRouter
