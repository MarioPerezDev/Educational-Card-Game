import * as Utils from '../vendors/Utils.js';
import gameSettings from './../assets/gameSettings.js';

export default function trackingReducer(state = {}, action){
  let newState;
  switch (action.type){
  case 'ADD_OBJECTIVES':{
    newState = JSON.parse(JSON.stringify(state));
    for(let i = 0; i < action.objectives.length; i++){
      if(typeof action.objectives[i].id !== "undefined"){
        newState.objectives[action.objectives[i].id] = action.objectives[i];
      }
    }
    return newState;}
  case 'OBJECTIVE_ACCOMPLISHED':{
    if(typeof action.objective_id === "undefined"){
      return state; // Objective id not defined
    }
    let objective = state.objectives[action.objective_id];
    if(typeof objective === "undefined"){
      return state; // Objective not found
    }
    let updateProgress = (typeof objective.progress_measure === "number");
    if(updateProgress){
      objective.progress_measure = Math.max(0, Math.min(1, objective.progress_measure));
    }

    if(action.damage !== 0){
      objective.accomplished = true;
    }

    newState = JSON.parse(JSON.stringify(state));
    objective = Object.assign({}, objective);
    newState.objectives[action.objective_id] = objective;

    // Calculate overall progress measure and score
    let objectivesIds = Object.keys(newState.objectives);
    let maxScore = 0;
    let damage = action.damage;

    //  Calculate max score
    for(let i = 0; i < objectivesIds.length; i++){
      maxScore = maxScore + (Math.max(...gameSettings.rounds[i].ownCards.map((card) => card.power)) - gameSettings.rounds[i].enemyCard.power);
    }

    //  Calculate score
    let currentScore = newState.score * maxScore;
    if(action.powerUp === "skip"){
      currentScore = currentScore / 2;
    }
    if(damage > 0){
      if(action.powerUp === "x2"){
        damage *= 2;
      }
      currentScore += damage;
    }
    newState.score = currentScore / maxScore;

    //  Calculate progress
    newState.progress_measure = 0;
    for(let i = 0; i < objectivesIds.length; i++){
      if(newState.objectives[objectivesIds[i]].accomplished === true){
        if(typeof newState.objectives[objectivesIds[i]].progress_measure === "number"){
          newState.progress_measure += newState.objectives[objectivesIds[i]].progress_measure;
        }
      }
    }
    return newState;
  }
  case 'RESET_OBJECTIVES':{
    newState = JSON.parse(JSON.stringify(state));
    newState.objectives = {};
    newState.progress_measure = 0;
    newState.score = 0;
    let objectiveKeys = Object.keys(state.objectives);
    for(let i = 0; i < objectiveKeys.length; i++){
      let _objective = state.objectives[objectiveKeys[i]];
      _objective = Utils.ResetObjective(_objective);
      newState.objectives[objectiveKeys[i]] = _objective;
    }
    return newState;}
  case 'FINISH_APP':{
    newState = JSON.parse(JSON.stringify(state));
    if([true, false].indexOf(action.finished) !== -1){
      newState.finished = action.finished;
    }
    return newState;}
  case 'START':{
    newState = JSON.parse(JSON.stringify(state));
    newState.started = true;
    return newState;}
  default:
    return state;
  }
}