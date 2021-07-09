import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

import { useForm } from '../hooks/useForm'
import InputErrorComponent from './InputErrorComponent'

const RegisterFormComponent = () => {

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

    const { idNumber, email, fullName, address, city, phone, password, repeatPassword } = registerValues

    const submitRegister = e => {
        e.preventDefault()
        if (idNumber === '' || password === '' || fullName === '' || email === '' || address === '') {
            setInvalidFields(true)
        }
    }

    return (
        <Container>
            <Logo src='https://i.scdn.co/image/ab6761610000e5ebe604d6f3978533dc6b98ca4a' alt='Logo'/>
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
                    />
                    <FormInput 
                        placeholder='Repetir Contraseña *'
                        name='repeatPassword'
                        value={repeatPassword}
                        onChange={handleRegisterInputChange}
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

const InputContainer = styled.div`
    display: flex;
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
