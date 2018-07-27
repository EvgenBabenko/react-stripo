import React, { Component } from 'react';
import T from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import FloatingPanel from './FloatingPanel/FloatingPanel';
import parseStyle from '../../../utils/parseStyle';
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

    this.state = {
      isHovering: false,
      fontSize: '',
      context: '',
      eventTarget: null,
      template: this.props.templateDetails.template,
    };

    this.templateRef = React.createRef();
    this.editableTags = null;

    this.handleClick = this.handleClick.bind(this);
    this.handleBlurContext = this.handleBlurContext.bind(this);
    this.handleChangeContext = this.handleChangeContext.bind(this);
    this.handleChangeFontSize = this.handleChangeFontSize.bind(this);
    this.submit = this.submit.bind(this);
    this.handleClickAway = this.handleClickAway.bind(this);
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
    // target.classList.add('edit');

    this.setState({
      context: target.textContent.trim(),
      eventTarget: target,
      isHovering: true,
    });

    if (target.hasAttribute('style')) {
      const styleObject = parseStyle(target.getAttribute('style'));

      this.setState({ fontSize: styleObject['font-size'] });
    } else {
      this.setState({ fontSize: '' });
    }
  }

  handleClickAway(target) {
    // const { eventTarget } = this.state;

    // eventTarget.classList.remove('edit');

    //  this.setState({ eventTarget: null });

    if (target.classList.contains('editable')) return;

    this.setState({ isHovering: false });
  }

  handleBlurContext() {
    const { eventTarget, context, template } = this.state;

    eventTarget.textContent = context;

    const newTemplate = this.templateRef.current.children[0].outerHTML;

    if (template === newTemplate) return;

    this.setState({ template: newTemplate });

    this.submit(newTemplate);
  }

  handleChangeContext({ target }) {
    this.setState({ context: target.value });
  }

  handleChangeFontSize({ target }) {
    const { eventTarget, template } = this.state;

    this.setState({ fontSize: target.value });

    // eventTarget.setAttribute('font-size', target.value);

    eventTarget.style.fontSize = target.value;

    const newTemplate = this.templateRef.current.children[0].outerHTML;

    if (template === newTemplate) return;

    this.setState({ template: newTemplate });

    this.submit(newTemplate);
  }

  submit(values) {
    const { updateTemplate, templateDetails: { id } } = this.props;

    updateTemplate(id, values);
  }

  render() {
    const { classes, templateDetails: { name, modified, template } } = this.props;
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
          <p>
            {`Modified: ${new Date(modified).toLocaleString()}`}
          </p>
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
