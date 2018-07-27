import React from 'react';
import T from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import history from '../../../helpers/history';

const Template = (props) => {
  const { name, modified, id } = props;

  function handleRedirect() {
    history.push(`/template/${id}`);
  }

  return (
    <ListItem
      button
      onClick={handleRedirect}
    >
      <ListItemText
        primary={name}
        secondary={`Modified: ${new Date(modified).toLocaleString()}`}
      />
    </ListItem>
  );
};

Template.propTypes = {
  name: T.string.isRequired,
  modified: T.number.isRequired,
  id: T.number.isRequired,
};

export default Template;
