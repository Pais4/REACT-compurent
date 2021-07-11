import React from 'react'
import styled from 'styled-components'

import RegisterFormComponent from '../components/RegisterFormComponent'
import TopMusicComponent from '../components/TopMusicComponent'

const Register = () => {
    return (
        <Container>
            <TopContainer>
                <RegisterFormComponent />
            </TopContainer>
            <LoginContainer>
                <TopMusicComponent />
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
    @media (max-width: 1550px) {
        display: none;
    }
`

export default Register
