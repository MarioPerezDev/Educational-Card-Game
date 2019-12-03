function settings(state = {}, action){
  switch (action.type){
  case 'ACCION':
    return "Algo";
  default:
    return state;
  }
}

export default settings;
