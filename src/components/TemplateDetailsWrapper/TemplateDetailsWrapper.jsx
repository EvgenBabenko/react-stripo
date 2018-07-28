import React from 'react';
import T from 'prop-types';

import TemplateDetails from './TemplateDetails/TemplateDetails';
import Loading from '../Loading/Loading';

const TemplateDetailsWrapper = (props) => {
  const { templateDetails } = props;

  return (
    <React.Fragment>
      {templateDetails
        ? <TemplateDetails {...props} />
        : <Loading />
      }
    </React.Fragment>
  );
};

TemplateDetailsWrapper.propTypes = {
  templateDetails: T.objectOf(T.any),
};

TemplateDetailsWrapper.defaultProps = {
  templateDetails: null,
};

export default TemplateDetailsWrapper;
