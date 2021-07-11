import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useHistory } from "react-router-dom"
import axios from "axios";

import { useForm } from '../hooks/useForm'
import InputErrorComponent from './InputErrorComponent'
import { validateEmail } from '../helpers/validateEmail'
import LogoComponent from './LogoComponent';

const RegisterFormComponent = () => {

    const history = useHistory();
    const [userData, setUserData] = useState({})
    const [invalidFields, setInvalidFields] = useState(false)

    const [registerValues, handleRegisterInputChange] = useForm({
        idNumber: '',
        email: '',
        fullName: '',
        address: '',
        city: '',
        phone: '',
        password: '',
        repeatPassword: ''
    })

    const getToken = async() => {
        const token = await localStorage.getItem('token')
        if (token) {
            history.push('/')
        } else {
            return
        }
    }

    const { idNumber, email, fullName, address, city, phone, password, repeatPassword } = registerValues

    const submitRegister = e => {
        e.preventDefault()
        if (idNumber === '' || password === '' || fullName === '' || email === '' || address === '') {
            setInvalidFields(true)
        } else if (idNumber.length > 15 || password.length > 20 || email.length > 50 || fullName.length > 50 || address.length > 300 || city.length > 20 || phone.length > 20) {
            console.log('Caracteres largos');
        } else if (!validateEmail(email)) {
            console.log('Invalid email');
        } else if (password !== repeatPassword) {
            console.log('Las contraseñas deben coincidir');
        } else {
            const fetchRegister = async() => {
                try {
                    const url = 'https://node-auth-mascotas.herokuapp.com/api/auth/register'
                    await axios.post(url, {idNumber, email, fullName, address, city, phone, password})
                        .then(res => {
                            if (res.data.code === 201) {
                                setUserData(res.data)
                                localStorage.setItem('token',res.data.token)
                            }
                        })
                } catch (error) {
                    console.log(error);
                }
            }
            fetchRegister()
            getToken()
        }
    }

    return (
        <Container>
            <LogoComponent />
            <Title>Register</Title>
            <FormContainer onSubmit={submitRegister}>
                <InputContainer>
                    <FormInput 
                        placeholder='Número de Identificación *'
                        name='idNumber'
                        value={idNumber}
                        onChange={handleRegisterInputChange}
                    />
                    <FormInput 
                        placeholder='Correo Electrónico *'
                        name='email'
                        value={email}
                        onChange={handleRegisterInputChange}
                    />
                </InputContainer>
                <InputContainer>
                    <FormInput 
                        placeholder='Nombres Completos *'
                        name='fullName'
                        value={fullName}
                        onChange={handleRegisterInputChange}
                    />
                    <FormInput 
                        placeholder='Dirección *'
                        name='address'
                        value={address}
                        onChange={handleRegisterInputChange}
                    />
                </InputContainer>
                <InputContainer>
                    <FormInput 
                        placeholder='Ciudad'
                        name='city'
                        value={city}
                        onChange={handleRegisterInputChange}
                    />
                    <FormInput 
                        placeholder='Teléfono'
                        name='phone'
                        value={phone}
                        onChange={handleRegisterInputChange}
                    />
                </InputContainer>
                <InputContainer>
                    <FormInput 
                        placeholder='Contraseña *'
                        name='password'
                        value={password}
                        onChange={handleRegisterInputChange}
                        type='password'
                    />
                    <FormInput 
                        placeholder='Repetir Contraseña *'
                        name='repeatPassword'
                        value={repeatPassword}
                        onChange={handleRegisterInputChange}
                        type='password'
                    />
                </InputContainer>
                <RegisterBtn
                    type='submit'
                >
                    Register
                </RegisterBtn>
            </FormContainer>
            {
                (invalidFields) && <InputErrorComponent text='Todos los campos son obligatorios (*)'/>
            }
            <RegisterText>Already have an account? <Link to="/login"><span>Login</span></Link></RegisterText>
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

    @media (max-width: 1550px) {
        height: 80vh;
        width: 80vw;
    }
`

const Title = styled.h2`
    font-size: 40px;
    font-weight: 100;
`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 820px) {
        flex-direction: column;
    }
`

const FormInput = styled.input`
    border-radius: 20px;
    width: 250px;
    margin-bottom: 20px;
    border: 1px solid lightgray;
    outline: none;
    padding: 10px;
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.2);
    margin: 0 20px 20px 0;
`

const RegisterBtn = styled.button`
    height: 40px;
    width: 200px;
    background-color: #000;
    color: #FFFFFF;
    border-radius: 20px;
    border: none;
    font-weight: 300;
    font-size: 20px;
    cursor: pointer;
    margin-top: 10px;

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

export default RegisterFormComponent