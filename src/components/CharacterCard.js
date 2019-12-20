import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

export default function CharacterCard(props) {
  return <div className="card-container">
            <Card className="card-style">
              <CardImg top width="50%" src={props.image} alt="Character Image" />
              <CardBody>
                <CardTitle>{props.name}</CardTitle>
              </CardBody> 
            </Card>
        </div>
}

 