import React from 'react'
import styled from 'styled-components';

const SingleTopComponent = ({data}) => {
    return (
        <Container>
            <ImageContainer src={data.strTrackThumb}/>
            <InfoContainer>
                <Title>{data.strArtist}</Title>
                <SubTitle>{data.strTrack}</SubTitle>
            </InfoContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    &:hover {
        background-color: lightgray;
        border-radius: 20px;
        padding: 15px;
    }
`

const ImageContainer = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 60px;
`

const InfoContainer = styled.div`
    margin-left: 20px;
`

const Title = styled.p`
    margin: 0 0 5px 0;
    font-weight: bold;
`

const SubTitle = styled.p`
    margin: 0;
`

export default SingleTopComponent
