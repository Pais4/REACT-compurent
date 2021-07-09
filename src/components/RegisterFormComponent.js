import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

const RegisterFormComponent = () => {
    return (
        <Container>
            <Logo src='https://i.scdn.co/image/ab6761610000e5ebe604d6f3978533dc6b98ca4a' alt='Logo'/>
            <Title>Register</Title>
            <FormContainer>
                <FormInput placeholder='Email'/>
                <FormInput placeholder='Password'/>
                <FormInput placeholder='Repeat Password'/>
                <LoginBtn>
                    Register
                </LoginBtn>
            </FormContainer>
            <RegisterText>Already have an account? <Link to="/login"><span>Login</span></Link></RegisterText>
        </Container>
    )
}

const Container = styled.div`
    height: 60vh;
    width: 40vw;
    background-color: #FFFFFF;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.2);
`

const Logo = styled.img`
    height: 100px;
    margin-bottom: 10px;
`

const Title = styled.h2`
    font-size: 40px;
    font-weight: 100;
`

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const FormInput = styled.input`
    border-radius: 20px;
    width: 300px;
    margin-bottom: 20px;
    border: 1px solid lightgray;
    outline: none;
    padding: 10px;
`

const LoginBtn = styled.button`
    height: 40px;
    background-color: #000;
    color: #FFFFFF;
    border-radius: 20px;
    border: none;
    font-weight: 300;
    font-size: 20px;
`

const RegisterText = styled.p`
    margin-top: 30px;
    span {
        color: black;
        text-decoration-line: none;
    }
`

export default RegisterFormComponent
