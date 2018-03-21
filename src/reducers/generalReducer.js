const initialState = {
  toggle:false
};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET": {
      //console.log("setting.." , action.variable , " to.. " , action.payload);
      return {
        ...state,
        [action.variable]: action.payload,
      };
    }
    case "UPDATE": {
      //console.log("updating.." , action.variable , " to.. " , action.payload);
      state[action.variable].push(action.payload);
      return {
        ...state,
      };
    }
    case "REPLACE": {
      //console.log("replacing.." , action.variable , " to.. " , action.payload, " by..", action.id);
      let newState = state[action.variable].filter(obj => obj[action.id] !== action.payload[action.id]);
      newState.push(action.payload);
      return {
        ...state,
        [action.variable]: newState,
      };
    }
    case "DROP": {
      //console.log("Dropping.." , action.variable , " to.. " , action.payload, " by..", action.id);
      let newState = state[action.variable].filter(obj => obj[action.id] !== action.payload[action.id]);
      return {
        ...state,
        [action.variable]: newState,
      };
    }
  }
  return state;
}
