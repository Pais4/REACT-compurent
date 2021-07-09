import React from 'react'
import styled from 'styled-components'

import LoginFormComponent from '../components/LoginFormComponent'
import TopMusicComponent from '../components/TopMusicComponent'

const Login = () => {
    return (
        <Container>
            <TopContainer>
                <TopMusicComponent />
            </TopContainer>
            <LoginContainer>
                <LoginFormComponent />
            </LoginContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const TopContainer = styled.div`

`

const LoginContainer = styled.div`
    margin-left: 40px;
`

export default Login
