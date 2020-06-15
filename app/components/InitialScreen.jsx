import React from 'react';
import './../assets/scss/initial_screen.scss';
import {Button, Col, Row} from 'react-bootstrap';
import {startGame} from '../reducers/actions';

export default class FinishScreen extends React.Component {
  render(){
    let initialTitleText = this.props.I18n.getTrans("i.initial_screen_title_full");
    let initialTitleButton = this.props.I18n.getTrans("i.initial_title_button");
    let initialTitleHack = this.props.I18n.getTrans("i.initial_title_hack");

    return (
      <div className="initial_screen text-center">
        <Row>
          <Col className="blinkText">
          <h1 >{initialTitleHack}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 id="initial_title">{initialTitleText}</h2>
            <Button variant="danger" onClick={() => {this.props.dispatch(startGame());}}>{initialTitleButton}</Button>
          </Col>
        </Row>
      </div>
    );
  }
}