import React from 'react';
import './../assets/scss/initial_screen.scss';
import {Button, Col, Row, Container} from 'react-bootstrap';
import {startGame} from '../reducers/actions';

export default class FinishScreen extends React.Component {
  render(){
    let initialTitleText = this.props.I18n.getTrans("i.initial_screen_title_full");
    let initialTitleButton = this.props.I18n.getTrans("i.initial_title_button");
    return (
      <Container className="initial_screen text-center">
        <Row>
          <Col>
            <h1 id="initial_title">{initialTitleText}</h1>
            <Button variant="primary" onClick={() => {this.props.dispatch(startGame());}}>{initialTitleButton}</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}