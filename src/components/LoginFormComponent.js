import React from 'react'
import styled from 'styled-components'
import { Link  } from "react-router-dom"
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import { useForm } from '../hooks/useForm'
import { validateEmail } from '../helpers/validateEmail'
import { startLogin } from '../actions/auth';
import LogoComponent from './LogoComponent';

const LoginFormComponent = () => {

    const dispatch = useDispatch()
    const [loginValues, handleLoginInputChange] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = loginValues

    const submitLogin = e => {
        e.preventDefault();
        if (email === '' || password === '') {
            Swal.fire('Error', 'Todos los campos son obligatorios.', 'error')
        } else if(!validateEmail(email)) {
            Swal.fire('Error', 'El email ingresado es inválido.', 'error')
        } else if(email.length > 50 || password.length > 20) {
            Swal.fire('Error', 'Campos ingresados demasiado largos.', 'error')
        } else {
            dispatch(startLogin(email, password))
        }
    }

    return (
        <Container>
            <LogoComponent />
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
                    type='password'
                    onChange={handleLoginInputChange}
                />
                <LoginBtn
                    type='submit'
                >
                    Log In
                </LoginBtn>
            </FormContainer>
            <RegisterText>Don't have an account? <Link to="/register"><span>Register</span></Link></RegisterText>
        </Container>
    )
}

const Container = styled.div`
    height: 70vh;
    width: 40vw;
    background-color: #FFFFFF;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.2);

    @media (max-width: 1024px) {
        height: 80vh;
        width: 80vw;
    }
`

const Title = styled.h2`
    font-size: 40px;
    font-weight: 100;
    margin-bottom: 40px;
`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FormInput = styled.input`
    border-radius: 20px;
    width: 250px;
    margin-bottom: 20px;
    border: 1px solid lightgray;
    outline: none;
    padding: 10px;
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.2);

    @media (max-width: 1024px) {
        width: 150px;
    }
`

const LoginBtn = styled.button`
    height: 40px;
    width: 200px;
    margin-top: 30px;
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
