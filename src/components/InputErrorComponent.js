import React from 'react'
import styled from 'styled-components'

const InputErrorComponent = ({text}) => {
    return (
        <Container>
            <Text>{text}</Text>
        </Container>
    )
}

const Container = styled.div`
    border: 1px solid red;
    border-radius: 10px;
    margin-top: 20px;
    padding: 10px;
`

const Text = styled.p`
    margin: 0;
    font-weight: bold;
    color: red;
`

export default InputErrorComponent
