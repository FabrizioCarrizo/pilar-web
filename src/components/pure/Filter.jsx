import React from "react";
import PropTypes from "prop-types";

const Filter = ({ active, onClick, children }) => {
  

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }} style={active ? {backgroundColor: '#282c34', color: 'white', border: 'none'}: null}
    >
      {children}
    </button>
  );
};

Filter.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Filter;
