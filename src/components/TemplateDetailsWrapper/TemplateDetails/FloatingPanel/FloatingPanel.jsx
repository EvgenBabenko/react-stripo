import React, { Component } from 'react';
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

class FloatingPanel extends Component {
  constructor(props) {
    super(props);

    this.handleBlur = this.handleBlur.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleBlur() {
    const { handleBlurContext } = this.props;

    handleBlurContext();
  }

  handleClickOutside({ target }) {
    const { handleClickAway } = this.props;

    this.handleBlur();

    handleClickAway(target);
  }

  render() {
    const {
      classes, fontSize, handleChangeContext, context, handleChangeFontSize,
    } = this.props;

    const mapFontSize = ['', '10px', '12px', '14px', '18px', '22px', '28px'];

    return (
      <div className={classes.panel}>
        <TextField
          id="context"
          label="Context"
          value={context}
          onBlur={this.handleBlur}
          onChange={handleChangeContext}
        />
        <FormControl className={classes.formControl}>
          <InputLabel>
            Font-size
          </InputLabel>
          <Select
            native
            value={fontSize}
            onChange={handleChangeFontSize}
          >
            {mapFontSize.map(item => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }
}

FloatingPanel.propTypes = {
  classes: T.objectOf(T.string).isRequired,
  fontSize: T.string.isRequired,
  context: T.string.isRequired,
  handleChangeContext: T.func.isRequired,
  handleChangeFontSize: T.func.isRequired,
  handleClickAway: T.func.isRequired,
  handleBlurContext: T.func.isRequired,
};

const FloatingPanelWrapper = onClickOutside(FloatingPanel);

export default withStyles(styles)(FloatingPanelWrapper);
