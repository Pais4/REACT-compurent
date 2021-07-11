import React from 'react'
import styled from 'styled-components'

const LogoComponent = ({color, size}) => {
    return (
        <Logo 
            color={color}
            size={size}
        >
            <span>Music</span>Radio
        </Logo>
    )
}

const Logo = styled.p`
    font-family: 'Lobster', cursive;
    font-size: ${props => (props.size) ? props.size : '60px'};
    margin: 0;
    color: ${props => props.color};

    span{
        font-family: 'Roboto', sans-serif;
        font-weight: 100;
        font-size: ${props => (props.size) ? props.size : '55px'};
    }
`

export default LogoComponent
