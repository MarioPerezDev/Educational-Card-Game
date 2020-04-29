import React from 'react';
import './../assets/scss/finish_screen.scss';
import {Row, Col, Button, Container} from 'react-bootstrap';

export default class FinishScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {currentAnswer:0};
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next(){
    this.setState({currentAnswer:this.state.currentAnswer + 1});
  }
  previous(){
    this.setState({currentAnswer:this.state.currentAnswer - 1});
  }

  _getFinishScreenTitle(progress_measure, score){
    let finishTitleText;
    let hasProgressMeasure = (typeof progress_measure === "number");
    let hasScore = (typeof score === "number");
    if(hasProgressMeasure && hasScore){
      finishTitleText = this.props.I18n.getTrans("i.finish_screen_title_full", {progress_measure:(progress_measure * 100).toFixed(1), score:(score * 100).toFixed(1)});
    } else if(hasProgressMeasure){
      finishTitleText = this.props.I18n.getTrans("i.finish_screen_title_wpm", {progress_measure:(progress_measure * 100).toFixed(1)});
    } else if(hasScore){
      finishTitleText = this.props.I18n.getTrans("i.finish_screen_title_ws", {score:(score * 100).toFixed(1)});
    }
    if(typeof finishTitleText === "undefined"){
      finishTitleText = this.props.I18n.getTrans("i.finish_screen_title_simple");
    }
    return finishTitleText;
  }
  render(){
    let finishTitleText = this._getFinishScreenTitle(this.props.tracking.progress_measure, this.props.tracking.score);
    let chosen = this.props.game.feedback.rounds[this.state.currentAnswer].chosen;
    return (
      <Container >
        <Row>
          <Col>
            <div className="finish_screen">
              <h1 id="finish_title">{finishTitleText}</h1>
            </div>
          </Col>
        </Row>
        <Row className="finishScreenArea">
          <Col xs={4}>
            <h3>{this.props.I18n.getTrans("i.finish_screen_card_anouncer")}</h3>
            <div className="feedbackCard text-justify">
              <div className="feedbackCardTitle text-center">{this.props.configs.rounds[this.state.currentAnswer].enemyCard.name}</div>
              <div className="feedbackCardText text-justify">{this.props.configs.rounds[this.state.currentAnswer].enemyCard.powerinfo}</div>
            </div>
          </Col>
          <Col xs={4}>
            <h3>{this.props.I18n.getTrans("i.finish_screen_card_played_anouncer")}</h3>
            <div className="feedbackCard text-justify">
              <div className="feedbackCardTitle text-center">{this.props.configs.rounds[this.state.currentAnswer].ownCards[chosen - 1].name}</div>
              <div className="feedbackCardText text-justify">{this.props.configs.rounds[this.state.currentAnswer].ownCards[chosen - 1].powerinfo}</div>
            </div>
          </Col>
          <Col xs={4}>
            <h3>{this.props.I18n.getTrans("i.finish_screen_text")}</h3>
            <div>
              <div>{this.props.configs.rounds[this.state.currentAnswer].ownCards[chosen - 1].feedback}</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button disabled= {this.state.currentAnswer <= 0} onClick={this.previous}>Anterior</Button>
            <Button disabled= {this.state.currentAnswer === this.props.configs.rounds.length - 1} onClick={this.next}>Siguiente</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}