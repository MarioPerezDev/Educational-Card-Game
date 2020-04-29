import React from 'react';
import {Row, Container, Col, ProgressBar} from 'react-bootstrap';

export default class Profile extends React.Component {
  render(){
    let healthType = "";
    let name = "";
    let health = "";
    let score = "";
    let location = "";
    if(this.props.health > 50){
      healthType = "success";
    } else if(this.props.health > 20){
      healthType = "warning";
    } else {
      healthType = "danger";
    }

    if(this.props.type === "ally"){
      name = this.props.I18n.getTrans("i.defender") + ": " + this.props.name;
      health = <div><p>{this.props.I18n.getTrans("i.healthIndicator") + ": " + this.props.health}</p><ProgressBar variant={healthType} now={this.props.health}/></div>;
      score = <div><p>{this.props.I18n.getTrans("i.scoreIndicator") + ": " + this.props.score + "/" + this.props.maxScore}</p></div>;
    } else if(this.props.type === "enemy"){
      name = this.props.I18n.getTrans("i.attacker") + ": " + this.props.name;
      location = this.props.I18n.getTrans("i.location");
    }
    return (
      <Container fluid="lg" className="profile">
        <Row className="text-center">
          <Col>
            <img className="enemyPic" src={this.props.pic} alt="cardimage"/>
          </Col>
        </Row>
        <Row className="avatarText">
          <Col>
            <p>
              {name}
            </p>
            <p>
              {location}
            </p>
            {score}
            {health}
          </Col>
        </Row>
      </Container>
    );
  }
}