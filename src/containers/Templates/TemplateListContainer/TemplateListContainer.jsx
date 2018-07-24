import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import T from 'prop-types';

import CommentList from '../../../components/Templates/TemplateList/TemplateList';
import { getTemplateList } from '../../../store/actions/templateActions';
import mock from '../../../mock';

class TemplateListContainer extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;

    // this.boundActionCreators = bindActionCreators({
    //   addComment, updateComment, deleteComment, toggleEditComment, clearNotifyMessage,
    // }, dispatch);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getTemplateList(mock));
  }

  render() {
    return (
      <CommentList
        {...this.props}
      />
    );
  }
}

const mapStateToProps = state => ({
  templateList: state.templates.templateList,
});

TemplateListContainer.propTypes = {
  dispatch: T.func.isRequired,
};

export default connect(mapStateToProps)(TemplateListContainer);
