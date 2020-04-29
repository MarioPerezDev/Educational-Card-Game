import gameSettings from './../assets/gameSettings.js';

export default function gameReducer(state = {}, action){
  let newState;
  switch (action.type){
  case 'PLAY_CARDS':{
    newState = JSON.parse(JSON.stringify(state));
    let currentRound = gameSettings.rounds[newState.currentRound];
    let enemypower = currentRound.enemyCard.power;
    let powers = [];
    for(let i = 0; i < currentRound.ownCards.length; i++){
      powers.push(currentRound.ownCards[i].power);
    }
    let maxPower = Math.max(...powers);
    if(enemypower > action.payload.power){
      let damageReceived = (enemypower - action.payload.power) * 25;
      if(newState.powerUp === "shield"){
        damageReceived = damageReceived / 2;
        newState.powerUp = "none";
      }
      if(newState.health - damageReceived <= 0){
        newState.finished = true;
      } else {
        newState.health = newState.health - damageReceived;
      }
    } else {
      let scoreToAdd = (action.payload.power - enemypower) * 100;
      if(newState.powerUp === "x2"){
        scoreToAdd *= 2;
      }
      newState.score = newState.score + scoreToAdd;
      if(action.payload.power === maxPower){
        newState.money = newState.money + (action.payload.power - enemypower) * 30;
      }
    }

    newState.maxScore += (maxPower - enemypower) * 100;
    if(newState.powerUp === "delete" || newState.powerUp === "x2"){
      newState.powerUp = "none";
    }
    newState.onHold = true;
    newState.feedback.rounds[newState.currentRound] = {"chosen":action.payload.index};
    return newState;
  }
  case 'BUY':{
    newState = JSON.parse(JSON.stringify(state));
    switch (action.payload.index){
    case 1:
      newState.money = newState.money - 20;
      newState.powerUp = "shield";
      break;
    case 2:
      newState.money = newState.money - 40;
      newState.powerUp = "delete";
      break;
    case 3:
      newState.money = newState.money - 80;
      newState.powerUp = "x2";
      break;
    case 4:
      newState.money = newState.money - 100;
      newState.score = newState.score / 2;
      newState.powerUp = "skip";
      newState.onHold = true;
      break;
    }
    return newState;
  }
  case 'NEXT':{
    newState = JSON.parse(JSON.stringify(state));
    newState.onHold = false;
    (newState.currentRound === gameSettings.rounds.length - 1) ? newState.finished = true : newState.currentRound++;
    if(!newState.powerUp === "shield"){
      newState.powerUp = "none";
    }
    return newState;
  }
  case 'FINISH_APP':{
    newState = JSON.parse(JSON.stringify(state));
    newState.finished = true;
    return newState;
  }
  default:
    return state;
  }
}