import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link, useParams } from "react-router-dom";


export default function CharacterDetails() {
    const [characterDetails, setCharacterDetails] = useState([]);
    let { id } = useParams()


    useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        axios 
            .get(`https://rickandmortyapi.com/api/character/${id}`) 
            .then(res => {
                console.log('Details', res);
                setCharacterDetails(res.data);
            })
            .catch((error) => console.log('Error:', error));
  }, []);

    return <div>
                <Card>
                    <CardImg top width="100%" src={characterDetails.image} alt="Card image cap" />
                    <CardBody>
                    <CardTitle><h1>{characterDetails.name}</h1></CardTitle>
                    <CardSubtitle><h3>Gender: {characterDetails.gender}</h3></CardSubtitle>
                    <CardSubtitle><h3>Species: {characterDetails.species}</h3></CardSubtitle>
                    <CardSubtitle><h3>Status: {characterDetails.status}</h3></CardSubtitle>
                    <Link to={`/characters-list/`}>
                        <Button color="info">Back</Button>
                    </Link>
                    </CardBody>
                </Card>
                
            </div>

}