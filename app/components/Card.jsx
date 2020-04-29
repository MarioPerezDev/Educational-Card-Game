import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {playCard, objectiveAccomplished} from '../reducers/actions';
import {Animated} from "react-animated-css";

export default class Card extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let objective = this.props.objective;
    let dispatchFunction;
    let damage = this.props.power - this.props.enemypower;
    let icon = "";
    if(this.props.cardClassName.includes("allyCard")){
      icon = "shield";
    }
    if(this.props.cardClassName.includes("enemyCard")){
      icon = "sword";
    }
    if(this.props.dispatchable){
      dispatchFunction = () => {
        (this.props.activePowerUp === "x2") ? this.props.dispatch(objectiveAccomplished(objective.id, damage * 2, this.props.currentPowerUp)) : this.props.dispatch(objectiveAccomplished(objective.id, damage, this.props.currentPowerUp));
        this.props.dispatch(playCard(this.props.power, this.props.number));
      };
    } else {
      dispatchFunction = () =>{
        alert(this.props.I18n.getTrans("i.disabledCard"));
      };
    }
    return (
      <Animated animationIn="flipInY" animationOut="slideOutUp" animationInDuration={2000} animationOutDuration={1000} isVisible={true}>
        <div className={this.props.cardClassName + " card"} onClick={dispatchFunction}>
          <Container>
            <Row xs={2} style={{marginTop:"5px"}}>
              <Col id="number" className="card-number">
                {this.props.number}
              </Col>
              <Col xs={8} className="card-name">
                {this.props.name}
              </Col>
              <Col xs={2} className="powerIcon">
                <img src={"assets/images/" + icon + ".png"}/>
              </Col>
            </Row>
            <Row className="card-image">
              <Col>
                <img src={this.props.image} alt="cardimage"/>
              </Col>
            </Row>
            <Row className="card-power-text">
              <Col>
                <p>{this.props.powerinfo}</p>
              </Col>
            </Row>
          </Container>
        </div>
      </Animated>
    );
  }
}