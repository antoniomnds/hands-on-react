import React from "react";
import PropTypes from "prop-types";

// a class component
class Welcome extends React.Component {
  constructor(props) {
    super(props); // calling super makes the component available
  }

  render() {
    return <h1>Meet the {this.props.name}</h1>
  }
}

// a functional component / hook
// const Hello = (props) => {
//   return <h1>Meet the <i>{props.name}</i></h1>
// }

Welcome.propTypes = {
  name: PropTypes.string,
}

export default Welcome;
