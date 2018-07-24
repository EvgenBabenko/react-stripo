import React from 'react';
import T from 'prop-types';

const Template = (props) => {
  const { name, modified } = props;

  return (
    <div>
      <p>
        {name}
      </p>
      <p>
        {new Date(modified).toLocaleString()}
      </p>
    </div>
  );
};

Template.propTypes = {
  name: T.string.isRequired,
  modified: T.number.isRequired,
};

export default Template;
