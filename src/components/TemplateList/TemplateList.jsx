import React from 'react';
import T from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import Template from './Template/Template';

const styles = {
  templateListWrapper: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    width: '85%',
  },
};

const TemplateList = ({
  templateList,
  classes,
}) => (
  <List component="div" className={classes.templateListWrapper}>
    {templateList.map(template => (
      <Template
        key={template.id}
        {...template}
      />
    ))}
  </List>
);

TemplateList.propTypes = {
  templateList: T.arrayOf(T.any).isRequired,
  classes: T.objectOf(T.any).isRequired,
};

export default withStyles(styles)(TemplateList);
