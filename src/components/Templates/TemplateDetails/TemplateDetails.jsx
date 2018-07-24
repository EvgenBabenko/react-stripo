import React from 'react';
import T from 'prop-types';

const TemplateDetails = (props) => {
  const { templateDetails: { name, modified, id, template } } = props;

  return (
    <div>
      <p>
        {id}
      </p>
      <p>
        {name}
      </p>
      <p>
        {`Modified: ${new Date(modified).toLocaleString()}`}
      </p>
      {template}
    </div>
  );
};

TemplateDetails.propTypes = {
  templateDetails: T.objectOf(T.any).isRequired,
};

export default TemplateDetails;
