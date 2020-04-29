import React from 'react';
import {connect} from 'react-redux';
import './../assets/scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import {GLOBAL_CONFIG} from '../config/config.js';
import * as I18n from '../vendors/I18n.js';
import GAME from './../assets/gameSettings.js';

import SCORM from './SCORM.jsx';
import FinishScreen from './FinishScreen.jsx';
import Game from './Game.jsx';
import InitialScreen from './InitialScreen.jsx';

export class App extends React.Component {
  constructor(props){
    super(props);
    I18n.init();
  }
  render(){
    let appContent = "";

    if(!this.props.tracking.started){
      appContent = (
        <InitialScreen dispatch={this.props.dispatch} user_profile={this.props.user_profile} tracking={this.props.tracking} config={GLOBAL_CONFIG} I18n={I18n}/>
      );
    } else if((this.props.game.finished !== true) || (GLOBAL_CONFIG.finish_screen === false) || this.props.game.onHold){
      if(this.props.wait_for_user_profile !== true && GAME){
        appContent = (<Game dispatch={this.props.dispatch} user_profile={this.props.user_profile} tracking={this.props.tracking} game={this.props.game} configs={GAME} config={GLOBAL_CONFIG} I18n={I18n}/>);
      }
    } else {
      appContent = (
        <FinishScreen dispatch={this.props.dispatch} user_profile={this.props.user_profile} tracking={this.props.tracking} game={this.props.game} configs={GAME} config={GLOBAL_CONFIG} I18n={I18n}/>
      );
    }
    return (
      <div>
        <div id="container">
          <SCORM dispatch={this.props.dispatch} tracking={this.props.tracking} config={GLOBAL_CONFIG}/>
          {appContent}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);