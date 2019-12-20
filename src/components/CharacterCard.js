import React from "react";
import { Link } from "react-router-dom";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "./CharacterCard.css";

export default function CharacterCard(props) {
  return <div className="card-container">
            <Card className="card-style">
              <CardImg top width="50%" src={props.image} alt="Character Image" />
              <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <Link to={`/character/${props.id}`}>
                  <Button color="info">Details</Button>
                </Link>
              </CardBody> 
            </Card>
        </div>
}

 