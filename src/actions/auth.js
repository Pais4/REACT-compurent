import Swal from "sweetalert2"
import { fetch } from "../helpers/fetch"
import { types } from "../types/types"

export const startLogin = ( email, password ) => {
    return async( dispatch ) => {
        await fetch('auth', {email, password})
            .then(res => {
                if(res.data.code === 200) {
                    localStorage.setItem('token', res.data.token)
                    dispatch(login({
                        uid: res.data.uid
                    }))
                } else {
                    Swal.fire('Error', res.data.msg, 'error')
                }
            })
    }
}

export const startRegister = ( idNumber, email, fullName, address, city, phone, password, repeatPassword ) => {
    return async( dispatch ) => {
        await fetch('auth/register', {idNumber, email, fullName, address, city, phone, password, repeatPassword})
            .then(res => {
                if (res.data.code === 201) {
                    localStorage.setItem('token', res.data.token)
                    dispatch(login({
                        uid: res.data.uid
                    }))
                } else {
                    Swal.fire('Error', res.data.msg, 'error')
                }
            })
    }
}

const login = (user) => ({
    type: types.authLogin,
    payload: user
})

export const startLogout = () => {
    return ( dispatch ) => {
        localStorage.clear()
        dispatch(logout())
    }
}

const logout = () => ({
    type: types.authLogout
})