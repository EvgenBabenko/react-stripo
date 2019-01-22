import React from 'react';
import T from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  panel: {
    backgroundColor: '#eeeeee',
    paddingRight: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
  },
});

const FloatingPanel = ({
  classes,
  fontSize,
  handleChangeContext,
  context,
  handleChangeFontSize,
  handleBlur,
  mapFontSize,
}) => (
  <div className={classes.panel}>
    <TextField id="context" label="Context" value={context} onBlur={handleBlur} onChange={handleChangeContext} />
    <FormControl className={classes.formControl}>
      <InputLabel>
        Font-size
      </InputLabel>
      <Select native value={fontSize} onChange={handleChangeFontSize}>
        {mapFontSize.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Select>
    </FormControl>
  </div>
);

FloatingPanel.propTypes = {
  classes: T.objectOf(T.string).isRequired,
  fontSize: T.string.isRequired,
  handleChangeContext: T.func.isRequired,
  context: T.string.isRequired,
  handleChangeFontSize: T.func.isRequired,
  handleBlur: T.func.isRequired,
  mapFontSize: T.arrayOf(T.string).isRequired,
};

const FloatingPanelWrapper = onClickOutside(FloatingPanel);

export default withStyles(styles)(FloatingPanelWrapper);
