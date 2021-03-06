import React from "react";
import PropTypes from 'prop-types';
import "./Jumbotron.css";


class Jumbotron extends React.Component {

  render () {

    return (
      <div style={{ height: 700, clear: 'both' }} className="jumbotron">
        {this.props.children}
      </div>
      );
    }

}

Jumbotron.props = {
  children: PropTypes.node
}

export default Jumbotron;
