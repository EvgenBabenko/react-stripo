import React, { Component } from 'react';
import T from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import FloatingPanel from '../FloatingPanel/FloatingPanel';

import './index.css';

const styles = {
  templateDetailsRoot: {
    position: 'relative',
    top: '128px',
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
    };

    this.templateRef = React.createRef();
    this.editableTags = null;
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

  handleClick = ({ target }) => {
    target.classList.add('edit');
    
    this.setState({
      context: target.textContent.trim(),
      eventTarget: target,
      isHovering: true,
    });

    console.log(this.state.eventTarget);

    if (target.hasAttribute('style')) {
      const styleObject = this.parseStyle(target.getAttribute('style'));

      this.setState({ fontSize: styleObject['font-size'] });
    } else {
      this.setState({ fontSize: '' });
    }
  }

  parseStyle = (string) => {
    const regex = /([\w-]*)\s*:\s*([^;]*)/g;
    let match;
    const properties = {};
    while (match = regex.exec(string)) {
      properties[match[1]] = match[2].trim()
    };

    return properties;
  }

  handleChangeContext = ({ target }) => {
    this.setState({ context: target.value });
  }

  handleBlurContext = () => {
    const { eventTarget, context } = this.state;
    console.log(eventTarget);

    eventTarget.textContent = context;

    this.submit(this.templateRef.current.children[0].outerHTML);
  }

  handleChangeCommon = name => ({ target }) => {
    this.setState({ [name]: target.value });
  };

  handleChangeFontSize = ({ target }) => {
    const { eventTarget } = this.state;

    this.setState({ fontSize: target.value });

    // eventTarget.setAttribute('font-size', target.value);

    eventTarget.style.fontSize = target.value;

    this.submit(this.templateRef.current.children[0].outerHTML);
  }

  submit = (values) => {
    const { updateTemplate, templateDetails: { id } } = this.props;

    console.log(values);

    updateTemplate(id, values);
  }

  handleClickAway = (target) => {
    const { eventTarget } = this.state;

    eventTarget.classList.remove('edit');

    this.setState({ eventTarget: null });

    if (target.classList.contains('editable')) return;

    this.setState({ isHovering: false });
  }

  render() {
    const {
      templateDetails: {
        name, modified, id, template,
      },
    } = this.props;
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
        <p>
          {id}
        </p>
        <p>
          {name}
        </p>
        <p>
          {`Modified: ${new Date(modified).toLocaleString()}`}
        </p>
        {<div ref={this.templateRef} dangerouslySetInnerHTML={{ __html: template }} />}
      </React.Fragment>
    );
  }
}

TemplateDetails.propTypes = {
  templateDetails: T.objectOf(T.any).isRequired,
  updateTemplate: T.func.isRequired,
};

export default TemplateDetails;
