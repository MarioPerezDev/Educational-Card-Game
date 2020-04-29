import React from 'react';
import {Modal, Row, Col, Button, Alert} from 'react-bootstrap';
import {buy} from '../reducers/actions';

export default class Shop extends React.Component {
  constructor(props, context){
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show:false,
    };
  }

  handleClose(){
    this.setState({show:false});
  }

  handleShow(){
    this.setState({show:true});
  }

  render(){
    //	Translation variables
    let shopTitle = this.props.I18n.getTrans("i.shopTitle");
    let shopHelp = this.props.I18n.getTrans("i.shopHelp");
    let shieldDescription = this.props.I18n.getTrans("i.shieldDescription");
    let deleteDescription = this.props.I18n.getTrans("i.deleteDescription");
    let x2Description = this.props.I18n.getTrans("i.x2Description");
    let skipDescription = this.props.I18n.getTrans("i.skipDescription");
    let warningMsg = this.props.I18n.getTrans("i.shopWarning");
    //	Checks if there is any powerUp already active.
    let powerUp = this.props.game.powerUp;
    let activePowerUp = (powerUp !== "none");
    let warning = "";
    if(activePowerUp){
      warning = (<Alert variant="danger">{warningMsg}</Alert>);
    }
    return (
      <>
        <img className="clickable" onClick={this.handleShow} src="assets/images/pendrive.png"/>
        <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {shopTitle}
              {warning}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalBody shop">
            <Row className="text-center">
              <Col lg className="shopItem">
                <img className={((activePowerUp || this.props.game.powerUp === "shield" || (this.props.game.money < 20)) ? "grey_opacity" : "clickable")} onClick={(this.props.game.powerUp === "shield" || (this.props.game.money < 20)) ? null : () => {this.props.dispatch(buy(1)); this.setState({show:false});}} src="assets/images/shield.png"/>
                <Button variant="primary" onClick={() => { this.props.dispatch(buy(1)); this.setState({show:false});}} disabled={this.props.game.powerUp === "shield" || (this.props.game.money < 20)}>{this.props.I18n.getTrans("i.shield")} (20 Bits)</Button>
                <p>{shieldDescription}</p>
              </Col>
              <Col lg className="shopItem">
                <img className={"clickable " + ((this.props.game.powerUp === "delete" || (this.props.game.money < 40)) ? "grey_opacity" : "")} onClick={(this.props.game.powerUp === "delete" || (this.props.game.money < 40)) ? null : () => {this.props.dispatch(buy(2)); this.setState({show:false});}} disabled={this.props.game.powerUp === "delete" || (this.props.game.money < 40)} src="assets/images/delete.png"/>
                <Button variant="primary" onClick={() => { this.props.dispatch(buy(2)); this.setState({show:false});}} disabled={this.props.game.powerUp === "delete" || (this.props.game.money < 40)}>{this.props.I18n.getTrans("i.delete")} (40 Bits)</Button>
                <p>{deleteDescription}</p>
              </Col>
            </Row>
            <Row className="text-center">
              <Col lg className="shopItem">
                <img className={"clickable " + ((this.props.game.powerUp === "x2" || (this.props.game.money < 80)) ? "grey_opacity" : "")} onClick={(this.props.game.powerUp === "x2" || (this.props.game.money < 80)) ? null : () => {this.props.dispatch(buy(3)); this.setState({show:false});}} disabled={this.props.game.powerUp === "x2" || (this.props.game.money < 80)} src="assets/images/x2.png"/>
                <Button variant="primary" onClick={() => { this.props.dispatch(buy(3)); this.setState({show:false});}} disabled={this.props.game.powerUp === "x2" || (this.props.game.money < 80)}>{this.props.I18n.getTrans("i.x2")} (80 Bits)</Button>
                <p>{x2Description}</p>
              </Col>
              <Col lg className="shopItem">
                <img className={"clickable " + ((this.props.game.powerUp === "skip" || (this.props.game.money < 100)) ? "grey_opacity" : "")} onClick={() => { this.props.dispatch(buy(4)); this.setState({show:false});}} disabled={this.props.game.powerUp === "skip" || (this.props.game.money < 100)} src="assets/images/skip.png"/>
                <Button variant="primary" onClick={(this.props.game.powerUp === "skip" || (this.props.game.money < 100)) ? null : () => { this.props.dispatch(buy(4)); this.setState({show:false});}} disabled={this.props.game.powerUp === "skip" || (this.props.game.money < 100)}>{this.props.I18n.getTrans("i.skip")} (100 Bits)</Button>
                <p>{skipDescription}</p>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer className="shopFooter">
            {shopHelp}
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}