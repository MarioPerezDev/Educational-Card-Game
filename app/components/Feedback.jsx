import React from 'react';
import './../assets/scss/initial_screen.scss';
import {Col, Row} from 'react-bootstrap';
import Card from './Card.jsx';

export default class Feedback extends React.Component {
  render(){
    let round = this.props.configs.rounds[this.props.game.currentRound];
    let chosen = this.props.game.feedback.rounds[this.props.game.currentRound].chosen;
    let classchosen = "";
    let feedbackContent = (round.ownCards.map((card, i) => {
      if(i === chosen - 1){
        classchosen = "chosen";
      }
      else {
        classchosen = "notChosen";
      }
      return (
        <Col className={"d-flex justify-content-center"} xs={12} md={4} key={i}><Card cardClassName={"allyCard " + classchosen} key={i} tracking={this.props.tracking} dispatchable activePowerUp={this.props.game.powerUp} number={i + 1} name={card.name} power={card.power} image={card.image} enemypower={round.enemyCard.power} currentPowerUp={this.props.game.powerUp} powerinfo={card.feedback} dispatch = {this.props.dispatch} configs = {this.props.configs}/></Col>
      );}
    ));
    return (
        <Row className="d-flex justify-content-center">
          {feedbackContent}
        </Row>
    );
  }
}