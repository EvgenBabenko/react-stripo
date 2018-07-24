import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import T from 'prop-types';

import TemplateDetails from '../../../components/Templates/TemplateDetails/TemplateDetails';
import { getTemplateDetails, clearTemplateDetails } from '../../../store/actions/templateActions';

class TemplateDetailsContainer extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;

    // this.boundActionCreators = bindActionCreators({ updateTask }, dispatch);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;

    const { dispatch } = this.props;

    dispatch(getTemplateDetails(parseInt(id, 10)));
  }

  componentWillUnmount() {
    const { dispatch } = this.props;

    dispatch(clearTemplateDetails());
  }

  render() {
    const { templateDetails } = this.props;

    return (
      templateDetails
        ? <TemplateDetails {...this.props} />
        : (
          <h1>
            Loading...
          </h1>
        )
    );
  }
}

const mapStateToProps = state => ({
  templateDetails: state.templates.templateDetails,
});

TemplateDetailsContainer.propTypes = {
  dispatch: T.func.isRequired,
  match: T.objectOf(T.any).isRequired,
  templateDetails: T.objectOf(T.any),
};

TemplateDetailsContainer.defaultProps = {
  templateDetails: null,
};

export default connect(mapStateToProps)(TemplateDetailsContainer);
