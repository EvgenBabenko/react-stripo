import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  lifecycle, compose, branch, renderComponent, withState,
} from 'recompose';

import * as templateActions from 'redux/modules/templates';
import Loading from 'components/Loading/Loading';
import TemplateDetails from './TemplateDetails';

const mapStateToProps = state => ({
  templateDetails: state.templates.templateDetails,
  templateList: state.templates.templateList,
});

const mapDispatchToProps = dispatch => ({
  templateActions: bindActionCreators({ ...templateActions }, dispatch),
});

const enchance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  // withState('isHovering', 'setIsHovering', false),
  // withState('fontSize', 'setFontSize', ''),
  // withState('context', 'setContext', ''),
  // withState('eventTarget', 'setEventTarget', ''),
  // withState('template', 'setTemplate', this.props.templateDetails.template),
  lifecycle({
    componentDidMount() {
      const {
        match: { params: { id } },
        templateActions: { getTemplateList, getTemplateDetails },
        templateList,
      } = this.props;

      if (!templateList.length) getTemplateList();

      getTemplateDetails(parseInt(id, 10));
    },
    componentWillUnmount() {
      const { templateActions: { clearTemplateDetails } } = this.props;

      clearTemplateDetails();
    },
  }),
  branch(
    ({ templateDetails }) => templateDetails,
    renderComponent(TemplateDetails),
    renderComponent(Loading),
  ),
);

export default enchance(TemplateDetails);
