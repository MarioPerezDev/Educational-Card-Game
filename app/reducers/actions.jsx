export function scormConnected(scorm){
  return {
    type:'SCORM_CONNECTED',
    scorm:scorm,
  };
}

export function updateUserProfile(user_profile){
  return {
    type:'UPDATE_USER_PROFILE',
    user_profile:user_profile,
  };
}

export function addObjectives(objectives){
  return {
    type:'ADD_OBJECTIVES',
    objectives:objectives,
  };
}

export function resetObjectives(){
  return {
    type:'RESET_OBJECTIVES',
  };
}

export function objectiveAccomplished(objectiveId, damage, powerUp){
  return {
    type:'OBJECTIVE_ACCOMPLISHED',
    objective_id:objectiveId,
    damage,
    powerUp,
  };
}

// Example of action created using the redux-thunk middleware for Redux
export function objectiveAccomplishedThunk(objectiveId, accomplishedScore = null){
  return (dispatch, getState) => {
    const firstState = JSON.parse(JSON.stringify(getState()));
    dispatch(objectiveAccomplished(objectiveId, accomplishedScore));

    // Perform another action after accomplishing the objective
    const secondState = getState();
    if((typeof firstState.tracking.objectives[objectiveId] === "object") && (firstState.tracking.objectives[objectiveId].accomplished === false) && (typeof secondState.tracking.objectives[objectiveId] === "object") && (secondState.tracking.objectives[objectiveId].accomplished === true)){
      // Objective with id objectiveId was accomplished.
      // Do something and/or dispatch another action.
      console.log("Objective with id " + objectiveId + " was accomplished.");
      dispatch(showDialog("Objective with id " + objectiveId + " was accomplished."));
    }
  };
}

export function showDialog(text){
  return () => {
    alert(text);
  };
}

export function finishApp(finished = true){
  return {
    type:'FINISH_APP',
    finished:finished,
  };
}

export function playCard(power, index){
  return {type:'PLAY_CARDS', payload:{power, index}};
}

export function buy(index){
  return {type:'BUY', payload:{index}};
}

export function startGame(){
  return {type:'START'};
}

export function next(){
  return {
    type:'NEXT',
  };
}