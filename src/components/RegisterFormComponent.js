import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'

import { useForm } from '../hooks/useForm'
import { validateEmail } from '../helpers/validateEmail'
import LogoComponent from './LogoComponent';
import { startRegister } from '../actions/auth'

const RegisterFormComponent = () => {

    const dispatch = useDispatch()

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
            Swal.fire('Error', 'Todos los campos son obligatorios.', 'error')
        } else if (idNumber.length > 15 || password.length > 20 || email.length > 50 || fullName.length > 50 || address.length > 300 || city.length > 20 || phone.length > 20) {
            Swal.fire('Error', 'Campos ingresados demasiado largos.', 'error')
        } else if (!validateEmail(email)) {
            Swal.fire('Error', 'El email ingresado no es valido.', 'error')
        } else if (password !== repeatPassword) {
            Swal.fire('Error', 'Las contraseñas deben coincidir', 'error')
        } else {
            dispatch(startRegister(idNumber, email, fullName, address, city, phone, password))
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