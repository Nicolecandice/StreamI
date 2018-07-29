import React from "react";
import PropTypes from 'prop-types';

class FormBtn extends React.Component {

  render () {

    // Destructuring the type, className, children and onClick props, applying them to the button element
    const { children, disabled } = this.props

    return (
      <button disabled={disabled} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
        {children}
      </button>
    );
  }
}

FormBtn.props = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
}

export default FormBtn