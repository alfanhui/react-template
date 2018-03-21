import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {SET} from 'reducerActions'

@connect((store) => {
  return {
      state: store.generalReducer
  };
})

class SomeThing extends React.Component{

  constructor(props) {
    super(props);
  }

  static propTypes = {
    dispatch: PropTypes.func,
    state: PropTypes.object,
  };

  render(){
    return (
      <button onClick={() => {
        let toggle = this.props.state.toggle;
        this.props.dispatch(SET("toggle", !toggle)); //part of redux
      }}>
        TOGGLE MEEE
      </button>
    );
  }
}

export default SomeThing;
