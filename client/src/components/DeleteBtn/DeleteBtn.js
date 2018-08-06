import React from "react";
import PropTypes from 'prop-types';
import "./DeleteBtn.css";

class DeleteBtn extends React.Component {
  
  render () {
    return (
      <span className="delete-btn" onClick={this.props.onClick}>
      <i className="glyphicon glyphicon-remove-circle"></i>
      </span>
    );
  }
}

DeleteBtn.props = {
  onClick: PropTypes.func
}

export default DeleteBtn;

