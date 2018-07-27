import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import T from 'prop-types';

import TemplateDetailsWrapper from '../../components/TemplateDetailsWrapper/TemplateDetailsWrapper';
import {
  getTemplateDetails,
  clearTemplateDetails,
  updateTemplate,
  getTemplateList,
} from '../../store/actions/templateActions';

class TemplateDetailsContainer extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;

    this.boundActionCreators = bindActionCreators({ updateTemplate }, dispatch);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;

    const { dispatch, templateList } = this.props;

    if (!templateList.length) dispatch(getTemplateList());

    dispatch(getTemplateDetails(parseInt(id, 10)));
  }

  componentWillUnmount() {
    const { dispatch } = this.props;

    dispatch(clearTemplateDetails());
  }

  render() {
    return <TemplateDetailsWrapper {...this.props} {...this.boundActionCreators} />;
  }
}

const mapStateToProps = state => ({
  templateDetails: state.templates.templateDetails,
  templateList: state.templates.templateList,
});

TemplateDetailsContainer.propTypes = {
  dispatch: T.func.isRequired,
  match: T.objectOf(T.any).isRequired,
  templateList: T.arrayOf(T.any).isRequired,
};

export default connect(mapStateToProps)(TemplateDetailsContainer);
