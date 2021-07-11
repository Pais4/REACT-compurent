import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { startLogout } from '../actions/auth'

import LogoComponent from '../components/LogoComponent'

const Main = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch( startLogout() )
    }

    return (
        <Container>
            <LogoComponent 
                color='#FFFFFF' 
                size='200px'
            />
            <LogoutBtn
                onClick={handleLogout}
            >
                Logout
            </LogoutBtn>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
`

const LogoutBtn = styled.button`
    background: #FFFFFF;
    padding: 10px 30px;
    border: none;
    border-radius: 20px;
    font-size: 20px;
    cursor: pointer;

    &:hover {
        background: none;
        border: 1px solid #FFFFFF;
        color: #FFFFFF;
    }
`

export default Main
