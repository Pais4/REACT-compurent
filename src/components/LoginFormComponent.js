import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useHistory  } from "react-router-dom"
import axios from "axios";

import { useForm } from '../hooks/useForm'
import { validateEmail } from '../helpers/validateEmail'
import InputErrorComponent from './InputErrorComponent'
import LogoComponent from './LogoComponent';

const LoginFormComponent = () => {

    const history = useHistory()
    const [userData, setUserData] = useState({})
    const [invalidEmail, setInvalidEmail] = useState(false)
    const [invalidFields, setInvalidFields] = useState(false)
    const [loginValues, handleLoginInputChange] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = loginValues

    const getToken = async() => {
        const token = await localStorage.getItem('token')
        if (token) {
            await history.push('/')
        } else {
            return
        }
    }

    const submitLogin = e => {
        e.preventDefault();
        if (email === '' || password === '') {
            setInvalidFields(true)
        } else if(!validateEmail(email)) {
            setInvalidEmail(true)
        } else if(email.length > 50 || password.length > 20) {
            return
        } else {
            const fetchLogin = async() => {
                try {
                    const url = 'https://node-auth-mascotas.herokuapp.com/api/auth'
                    await axios.post(url, {email, password})
                        .then(res => {
                            if (res.data.code === 200) {
                                setUserData(res.data)
                                localStorage.setItem('token',res.data.token)
                            }
                        })
                } catch (error) {
                    console.log(error);
                }
            }
            fetchLogin()
            getToken()
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
