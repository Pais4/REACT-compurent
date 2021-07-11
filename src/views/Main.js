import React from 'react'
import styled from 'styled-components'

import LogoComponent from '../components/LogoComponent'

const Main = () => {
    return (
        <Container>
            <LogoComponent 
                color='#FFFFFF' 
                size='200px'
            />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export default Main
