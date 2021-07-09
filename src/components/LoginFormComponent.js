import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

import { useForm } from '../hooks/useForm'
import { validateEmail } from '../helpers/validateEmail'
import InputErrorComponent from './InputErrorComponent'

const LoginFormComponent = () => {

    const [invalidEmail, setInvalidEmail] = useState(false)
    const [invalidFields, setInvalidFields] = useState(false)
    const [loginValues, handleLoginInputChange] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = loginValues

    const submitLogin = e => {
        e.preventDefault();
        if (email === '' || password === '') {
            setInvalidFields(true)
        } else if(!validateEmail(email)) {
            setInvalidEmail(true)
        } else if(email.length > 50 || password.length > 20) {
            return
        }
    }

    return (
        <Container>
            <Logo src='https://i.scdn.co/image/ab6761610000e5ebe604d6f3978533dc6b98ca4a' alt='Logo'/>
            <Title>Log in</Title>
            <FormContainer onSubmit={submitLogin}>
                <FormInput 
                    placeholder='Email *'
                    name='email'
                    value={email}
                    onChange={handleLoginInputChange}
                />
                <FormInput 
                    placeholder='Password *'
                    name='password'
                    value={password}
                    onChange={handleLoginInputChange}
                />
                <LoginBtn
                    type='submit'
                >
                    Log In
                </LoginBtn>
                {
                    (invalidFields) && <InputErrorComponent text='Todos los campos son obligatorios'/>
                }
                {
                    (invalidEmail) && <InputErrorComponent text='El correo es inválido.'/>
                }
            </FormContainer>
            <RegisterText>Don't have an account? <Link to="/register"><span>Register</span></Link></RegisterText>
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

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FormInput = styled.input`
    border-radius: 20px;
    width: 300px;
    margin-bottom: 20px;
    border: 1px solid lightgray;
    outline: none;
    padding: 10px;
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.2);
`

const LoginBtn = styled.button`
    height: 40px;
    width: 200px;
    margin-top: 10px;
    background-color: #000;
    color: #FFFFFF;
    border-radius: 20px;
    border: none;
    font-weight: 300;
    font-size: 20px;
    cursor: pointer;

    &:hover {
        background: none;
        border: 1px solid #000;
        color: #000;
    }
`

const RegisterText = styled.p`
    margin-top: 30px;
    span {
        color: black;
        text-decoration-line: none;
    }
`

export default LoginFormComponent
