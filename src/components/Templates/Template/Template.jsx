import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';

const Template = (props) => {
  const { name, modified, id } = props;

  return (
    <div>
      <Link to={`/template/${id}`}>
        {name}
      </Link>
      <p>
        {`Modified: ${new Date(modified).toLocaleString()}`}
      </p>
    </div>
  );
};

Template.propTypes = {
  name: T.string.isRequired,
  modified: T.number.isRequired,
  id: T.number.isRequired,
};

export default Template;
