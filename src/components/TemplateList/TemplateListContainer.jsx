import { connect } from 'react-redux';
import {
  lifecycle, compose, branch, renderComponent,
} from 'recompose';

import { getTemplateList } from 'redux/modules/templates';
import Loading from 'components/Loading/Loading';
import TemplateList from './TemplateList';

const mapStateToProps = state => ({
  templateList: state.templates.templateList,
});

const enchance = compose(
  connect(mapStateToProps),
  lifecycle({
    componentDidMount() {
      const { dispatch, templateList } = this.props;

      if (templateList.length) return;

      dispatch(getTemplateList());
    },
  }),
  branch(
    ({ templateList }) => templateList.length,
    renderComponent(TemplateList),
    renderComponent(Loading),
  ),
);

export default enchance(TemplateList);
