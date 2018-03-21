import React from 'react';
import { connect } from "react-redux";
import SomeThing from './SomeThing';
import PropTypes from 'prop-types';

@connect((store) => {
  return {
      state: store.generalReducer
  };
})

class HomePage extends React.Component{

  static propTypes = {
    dispatch: PropTypes.func,
    state: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount(){

  }

  componentDidUpdate(){

  }

  componentWillUnmount(){

  }

  render(){
    console.log(this.props.state.toggle);
    return (
      <div className={"main"}>
        <div className={'h2'}> REACT </div>
        <SomeThing/>
    <h1>{this.props.state.toggle == false ? "FALSE" : "TRUE"}</h1> {/*I only do this conditional because boolean values do not print anything*/}
      </div>
    );
  }
}

export default HomePage;
