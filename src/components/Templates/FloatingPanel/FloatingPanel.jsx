import React, { Component } from 'react';
import T from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
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

    this.state = {
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  handleBlur = () => {
    const { handleBlurContext } = this.props;

    handleBlurContext();
  }

  handleClickOutside = ({ target }) => {
    const { handleClickAway } = this.props;

    this.handleBlur();

    handleClickAway(target);

    console.log('onClickOutside() method called', target);
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
          margin="normal"
        />
        {/* <Input
          // defaultValue="Hello world"
          // onInput={handleInput}
          onBlur={handleBlur}
          value={value}
          onChange={handleInput}
          inputProps={{
            'aria-label': 'Description',
          }}
        /> */}
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">
            Font-size
          </InputLabel>
          <Select
            native
            value={fontSize}
            onChange={handleChangeFontSize}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
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
