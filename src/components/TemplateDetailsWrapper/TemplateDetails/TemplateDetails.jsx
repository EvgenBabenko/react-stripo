import React, { Component } from 'react';
import T from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import FloatingPanel from './FloatingPanel/FloatingPanel';
import parseInlineStyleToObject from '../../../utils/parseInlineStyleToObject';
import isStringsEqual from '../../../helpers/isStringsEqual';
import './index.css';

const styles = {
  templateDetailsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    width: '85%',
  },
};

class TemplateDetails extends Component {
  constructor(props) {
    super(props);

    const { templateDetails: { template } } = this.props;

    this.state = {
      isHovering: false,
      fontSize: '',
      context: '',
      eventTarget: null,
      template,
    };

    this.templateRef = React.createRef();
    this.editableTags = null;

    this.handleClick = this.handleClick.bind(this);
    this.handleBlurContext = this.handleBlurContext.bind(this);
    this.handleChangeContext = this.handleChangeContext.bind(this);
    this.handleChangeFontSize = this.handleChangeFontSize.bind(this);
    this.handleClickAway = this.handleClickAway.bind(this);
    this.checkTemplateForSubmit = this.checkTemplateForSubmit.bind(this);
  }

  componentDidMount() {
    this.editableTags = [...this.templateRef.current.getElementsByClassName('editable')];

    this.editableTags.forEach((tags) => {
      tags.addEventListener('click', this.handleClick);
    });
  }

  componentWillUnmount() {
    this.editableTags.forEach((tags) => {
      tags.removeEventListener('click', this.handleClick);
    });
  }

  handleClick({ target }) {
    target.classList.add('edit');

    this.setState({
      context: target.textContent.trim(),
      eventTarget: target,
      isHovering: true,
    });

    if (target.hasAttribute('style')) {
      const styleObject = parseInlineStyleToObject(target.getAttribute('style'));

      this.setState({ fontSize: styleObject['font-size'] });
    } else {
      this.setState({ fontSize: '' });
    }
  }

  handleClickAway(target) {
    const { eventTarget } = this.state;

    eventTarget.classList.remove('edit');

    if (target.classList.contains('editable')) return;

    this.setState({ isHovering: false });
  }

  handleBlurContext() {
    const { eventTarget, context } = this.state;

    eventTarget.textContent = context;

    this.checkTemplateForSubmit();
  }

  handleChangeContext({ target }) {
    this.setState({ context: target.value });
  }

  handleChangeFontSize({ target }) {
    const { eventTarget } = this.state;

    this.setState({ fontSize: target.value });

    eventTarget.style.fontSize = target.value;

    this.checkTemplateForSubmit();
  }

  checkTemplateForSubmit() {
    const { template, eventTarget } = this.state;
    const { updateTemplate, templateDetails: { id } } = this.props;

    eventTarget.classList.remove('edit');

    const newTemplate = this.templateRef.current.children[0].outerHTML;

    if (isStringsEqual(template, newTemplate)) return;

    this.setState({ template: newTemplate });

    updateTemplate(id, newTemplate);

    eventTarget.classList.add('edit');
  }

  render() {
    const { classes, templateDetails: { name, template } } = this.props;
    const { isHovering } = this.state;

    return (
      <React.Fragment>
        {isHovering
          && (
            <FloatingPanel
              handleClickAway={this.handleClickAway}
              handleBlurContext={this.handleBlurContext}
              handleChangeFontSize={this.handleChangeFontSize}
              handleChangeContext={this.handleChangeContext}
              {...this.state}
            />
          )
        }
        <div className={classes.templateDetailsWrapper}>
          <h2>
            {`Template name: ${name}`}
          </h2>
          <div ref={this.templateRef} dangerouslySetInnerHTML={{ __html: template }} />
        </div>
      </React.Fragment>
    );
  }
}

TemplateDetails.propTypes = {
  templateDetails: T.objectOf(T.any).isRequired,
  updateTemplate: T.func.isRequired,
  classes: T.objectOf(T.any).isRequired,
};

export default withStyles(styles)(TemplateDetails);
