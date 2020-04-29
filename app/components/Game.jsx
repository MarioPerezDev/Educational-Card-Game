import React from 'react';
import * as Utils from '../vendors/Utils.js';
import {addObjectives} from './../reducers/actions';
import {Row, Col, Button} from 'react-bootstrap';
import {next, objectiveAccomplished} from '../reducers/actions';
import Card from './Card.jsx';
import Shop from './Shop.jsx';
import Profile from './Profile.jsx';
import Feedback from './Feedback.jsx';

//  Equivale al Quiz
export default class Game extends React.Component {
  componentDidMount(){
    // Create objectives (One per round in the game)
    let objectives = [];
    let nQuestions = this.props.configs.rounds.length;
    for(let i = 0; i < nQuestions; i++){
      objectives.push(new Utils.Objective({id:("Round" + (i + 1)), progress_measure:(1 / nQuestions), score:(1 / nQuestions)}));
    }
    this.props.dispatch(addObjectives(objectives));
  }
  getMiddle(ownCards){
    let powers = ownCards.map((card) => card.power);
    let ismiddle = (element) => (element !== Math.max(...powers)) && (element !== Math.min(...powers));
    return powers.findIndex(ismiddle);
  }
  render(){
    //  Useful variables
    let currentRound = this.props.game.currentRound;
    let round = this.props.configs.rounds[currentRound];
    let objective = this.props.tracking.objectives["Round" + (currentRound + 1)];
    let powerUp = this.props.game.powerUp;

    let ownCards = "";
    let enemyCard = "";
    let currentPowerUp = "";
    let holdArea = "";

    if(round){
      let middleIndex = "";
      enemyCard = <Col className="d-flex justify-content-center" xs={12} xl={4}><Card cardClassName={"enemyCard"} number={round.enemyCard.number} dispatchable={false} name={round.enemyCard.name} power={round.enemyCard.power} image={round.enemyCard.image} powerinfo={round.enemyCard.powerinfo} /></Col>;
      if(powerUp === "delete"){
        middleIndex = this.getMiddle(round.ownCards);
      }
      ownCards = (round.ownCards.map((card, i) =>{
        if(i === middleIndex){
          return (<Col className="d-flex justify-content-center" xs={12} md={4} key={i}><Card cardClassName={"allyCard deleted"} key={i} tracking={this.props.tracking} dispatchable={false} number={i + 1} name={card.name} power={card.power} image={card.image} powerinfo={card.powerinfo} objective={objective} dispatch={this.props.dispatch} currentRound={currentRound} configs={this.props.configs} /></Col>
          );
        }
        return (<Col className="d-flex justify-content-center" xs={12} md={4} key={i}><Card cardClassName={"allyCard"} key={i} tracking={this.props.tracking} dispatchable activePowerUp={this.props.game.powerUp} number={i + 1} name={card.name} power={card.power} image={card.image} enemypower={round.enemyCard.power} currentPowerUp={this.props.game.powerUp} powerinfo={card.powerinfo} objective={objective} dispatch={this.props.dispatch} currentRound={currentRound} configs={this.props.configs} /></Col>
        );
      }
      ));
    }

    if(powerUp){
      if(powerUp !== "none"){
        currentPowerUp = (
          <div className="currentPowerUp">
            <p>{this.props.I18n.getTrans("i.currentPowerUp") + ": "}</p>
            <img src={"assets/images/" + powerUp + ".png"}/>
          </div>
        );
      }
    }
    if(!this.props.game.onHold){
      holdArea = (
        <Row className="allyRow d-flex justify-content-center">
          <Col xs={12} xl={2} className="avatarArea">
            <Profile type="ally" pic={round.enemyPic} name={this.props.user_profile.name} health={this.props.game.health} score={this.props.game.score} maxScore={this.props.game.maxScore} I18n={this.props.I18n}/>
          </Col>

          <Col xs={12} xl={7}>
            <Row className="d-flex justify-content-center">
              {ownCards}
            </Row>
          </Col>

          <Col xs={12} xl={3} className="menuArea">
            <Row>
              <Col className="downloadArea text-center">
                <Row>
                  <Col xs={12} md={6} className="moneyText">
                    {currentPowerUp}
                    <p>{this.props.I18n.getTrans("i.bitsInfo") + ": "}</p>
                    <p className="money">{this.props.game.money}</p>
                  </Col>
                  <Col className="downloadIcon" xs={12} md={6}>
                    <Shop dispatch={this.props.dispatch} game={this.props.game} I18n={this.props.I18n}/>
                    <p className="text-center downloadButtonText">{this.props.I18n.getTrans("i.downloadButton")}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="ribbonArea d-flex justify-content-center text-center">
              <Col>
                <img className={this.props.game.achievements.first ? "" : "grey"} src="assets/images/medal.png"/>
              </Col>
              <Col>
                <img className={this.props.game.achievements.second ? "" : "grey"} src="assets/images/money.png"/>
              </Col>
              <Col>
                <img className={this.props.game.achievements.third ? "" : "grey"} src="assets/images/winner.png"/>
              </Col>
            </Row>
          </Col>
        </Row>
      );
    } else {
      holdArea = (
        <Row className="allyRow d-flex justify-content-center">
          <Col xs={12} xl={2} className="avatarArea">
            <Profile type="ally" pic={round.enemyPic} name={this.props.user_profile.name} health={this.props.game.health} score={this.props.game.score} maxScore={this.props.game.maxScore} I18n={this.props.I18n}/>
          </Col>
          <Col xs={12} xl={7}>
            <Feedback dispatch={this.props.dispatch} configs={this.props.configs} game={this.props.game} feedback={round.feedback} objective={objective}/>
          </Col>
          <Col xs={12} xl={3} className="menuArea">
            <Row>
              <Col className="downloadArea text-center">
                <Row>
                  <Col xs={12} md={6} className="moneyText">
                    {currentPowerUp}
                    <p>{this.props.I18n.getTrans("i.bitsInfo") + ": "}</p>
                    <p className="money">{this.props.game.money}</p>
                    <Button variant="primary" onClick={() => {
                      if(this.props.game.powerUp === "skip"){
                        this.props.dispatch(objectiveAccomplished(this.props.objective.id, 0, this.props.game.powerUp));
                      }
                      this.props.dispatch(next());
                    }}>
                      Siguiente
                    </Button>
                  </Col>
                  <Col className="downloadIcon" xs={12} md={6}>
                    <Shop dispatch={this.props.dispatch} game={this.props.game} I18n={this.props.I18n}/>
                    <p className="text-center downloadButtonText">{this.props.I18n.getTrans("i.downloadButton")}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="ribbonArea d-flex justify-content-center text-center">
              <Col>
                <img className={this.props.game.achievements.first ? "" : "grey"} src="assets/images/medal.png"/>
              </Col>
              <Col>
                <img className={this.props.game.achievements.second ? "" : "grey"} src="assets/images/money.png"/>
              </Col>
              <Col>
                <img className={this.props.game.achievements.third ? "" : "grey"} src="assets/images/winner.png"/>
              </Col>
            </Row>
          </Col>
        </Row>
      );
    }
    return (
      <div>
        Ronda {currentRound + 1}
        <Row className="enemyRow d-flex justify-content-center text-center">
          <Col xs={12} lg={4} xl={2} className="avatarArea">
            <Profile type="enemy" pic={round.enemyPic} name={round.enemyName} I18n={this.props.I18n}/>
          </Col>

          <Col xs={12} lg={4} xl={7}>
            <Row className="d-flex justify-content-center">
              {enemyCard}
            </Row>
          </Col>

          <Col xs={12} lg={4} xl={3}>
            <div className="enemyDialog speech-bubble text-justify">
              <p>
                {round.roundText}
              </p>
            </div>
          </Col>
        </Row>
        {holdArea}
      </div>

    );
  }
}