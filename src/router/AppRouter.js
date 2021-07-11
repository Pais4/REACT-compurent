import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom"

import Login from '../views/Login'
import Register from '../views/Register'
import Main from '../views/Main'

const AppRouter = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [checking, setChecking] = useState(true)
    useEffect(() => {
        const getToken = async() => {
            await (localStorage.getItem('token')) && setLoggedIn(true)
            setChecking(false)
        }
        getToken()
    }, [])
    
    if(checking){
        return (
            <h1>Cargando</h1>
        )
    } else {
        return(
            <Router>
                <Switch>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/register' component={Register}/>
                    <Route exact path='/'>
                        {loggedIn ? <Main /> : <Redirect to="/login" />}
                    </Route>
                    <Redirect to='/' />
                </Switch>
            </Router>
        )
    }
}

export default AppRouter
