import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';

import TemplateList from '../../components/TemplateList/TemplateList';
import { getTemplateList } from '../../store/actions/templateActions';

class TemplateListContainer extends Component {
  componentDidMount() {
    const { dispatch, templateList } = this.props;

    if (templateList.length) return;

    dispatch(getTemplateList());
  }

  render() {
    return <TemplateList {...this.props} />;
  }
}

const mapStateToProps = state => ({
  templateList: state.templates.templateList,
});

TemplateListContainer.propTypes = {
  dispatch: T.func.isRequired,
  templateList: T.arrayOf(T.any).isRequired,
};

export default connect(mapStateToProps)(TemplateListContainer);
