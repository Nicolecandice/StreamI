import React from "react";
import PropTypes from 'prop-types';

class UpdateBtn extends React.Component {

  render () {

    // Destructuring the type, className, children and onClick props, applying them to the button element
    const { children, onClick } = this.props

    return (
      <button onClick={onClick} isabled={true} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
        {children}
      </button>
    );
  }
}

UpdateBtn.props = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

export default UpdateBtn

