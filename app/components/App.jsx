import React from 'react';
import {connect} from 'react-redux';
import './../assets/scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import {GLOBAL_CONFIG} from '../config/config.js';
import * as I18n from '../vendors/I18n.js';
import * as SAMPLES from '../config/samples.js';
import {cards} from './../assets/cards.js'

import SCORM from './SCORM.jsx';
import Header from './Header.jsx';
import FinishScreen from './FinishScreen.jsx';
import Quiz from './Quiz.jsx';
import Card from './Card.jsx';
import Game from './Game.jsx';
//import PlayerBar from './PlayerBar.jsx';
//import Shop from './Shop.jsx';

export class App extends React.Component {
  constructor(props){
    super(props);
    I18n.init();
  }
  render(){
    let appCards = "" ;
    let appHeader = "";
    let appContent = "";


    if((this.props.tracking.finished !== true) || (GLOBAL_CONFIG.finish_screen === false)){
      appHeader = (
        <Header user_profile={this.props.user_profile} tracking={this.props.tracking} config={GLOBAL_CONFIG} I18n={I18n}/>
      );
      if(this.props.wait_for_user_profile !== true){
        appContent = (
          <Quiz dispatch={this.props.dispatch} user_profile={this.props.user_profile} tracking={this.props.tracking} quiz={SAMPLES.quiz_example} config={GLOBAL_CONFIG} I18n={I18n}/>
        );
      }
    } else {
      appContent = (
        <FinishScreen dispatch={this.props.dispatch} user_profile={this.props.user_profile} tracking={this.props.tracking} quiz={SAMPLES.quiz_example} config={GLOBAL_CONFIG} I18n={I18n}/>
      );
    }
    if(cards){
      game = (<Game/>)
    appCards=(
      cards.map((card,i) =>
        <span className="column1" key={i}><Card key={i} number={card.number} name={card.name} power={card.power} image={card.image} powerinfo={card.powerinfo} /></span>
      )
    )
  }
    return (
      <div>
      <div id="container">
        <SCORM dispatch={this.props.dispatch} tracking={this.props.tracking} config={GLOBAL_CONFIG}/>
        {appHeader}
        {game}
        {appContent}
        <div className="row1">
        {appCards}
        </div>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);
