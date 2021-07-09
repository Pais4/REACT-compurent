import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
// import axios from 'axios'

import { dummyData } from '../helpers/dummy';
import SingleTopComponent from './SingleTopComponent';

const TopMusicComponent = () => {

    const [musicData, setMusicData] = useState({})

    useEffect(() => {
        // const getMusicData = async() => {
        //     const endpointUrl  = 'https://theaudiodb.p.rapidapi.com/trending.php'
        
        //     try {
        //         await axios.get(endpointUrl, {
        //             headers: {
        //                 'x-rapidapi-key': 'ddd2f93abamsh992b58f86e248b7p17eab4jsn9affbb7f4612',
        //                 'x-rapidapi-host': 'theaudiodb.p.rapidapi.com'
        //             },
        //             params: {
        //                 country: 'us', 
        //                 type: 'itunes', 
        //                 format: 'singles'
        //             }
        //         })
        //             .then(res => setMusicData(res.data))
        //     } catch (err) {
        //         console.log(err);
        //     }
        // }

        // getMusicData()
    }, [])

    console.log(musicData);

    return (
        <Container>
            <Title>Top Music</Title>
            <TopContainer>
                {
                    dummyData.map(data => (
                        <SingleTopComponent data={data} key={data.id}/>
                    ))
                }
            </TopContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 20vw;
    height: 80vh;
    background-color: #FFFFFF;
    border-radius: 20px;
    padding: 10px;
    overflow-y: auto;
    box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.2);

    &:-webkit-scrollbar {
        display: none;
    }
`

const TopContainer = styled.div`
    margin: 10px;
`

const Title = styled.h1`
    text-align: center;
    font-weight: 100;
    font-size: 40px;
`

export default TopMusicComponent
