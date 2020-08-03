import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { onClickFunc, text, classProps } = props;
  const classNameProps = classProps ? `button ${classProps}` : 'button';

  return (
    <button className={classNameProps} onClick={onClickFunc}> {text} </button>
  )
}

Button.propTypes = {
  onClickFunc: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Button
