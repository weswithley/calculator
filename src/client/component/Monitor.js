import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Monitor = (props) => {
  const { value } = props;
  return (
    <Fragment>
      <div className="monitor">
        {value}
      </div>
    </Fragment>
  )
}

Monitor.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Monitor
