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
                    <CardTitle>{characterDetails.name}</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Link to={`/characters-list/`}>
                        <Button>Back</Button>
                    </Link>
                    </CardBody>
                </Card>
                
            </div>

}