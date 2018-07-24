import React from 'react';
import T from 'prop-types';

import Template from '../Template/Template';

const TemplateList = (props) => {
  const { templateList } = props;

  return (
    <React.Fragment>
      {templateList.length
        ? (
          templateList.map(template => <Template key={template.id} {...template} {...props} />)
        )
        : (
          <p>
            Loading...
          </p>
        )
      }
    </React.Fragment>
  );
};

TemplateList.propTypes = {
  templateList: T.arrayOf(T.any).isRequired,
};

export default TemplateList;
