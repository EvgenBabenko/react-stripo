import {
  compose, defaultProps, withHandlers,
} from 'recompose';

import FloatingPanel from './FloatingPanel';

const mapFontSize = ['', '10px', '12px', '14px', '18px', '22px', '28px'];

const enchance = compose(
  defaultProps({
    mapFontSize,
  }),
  withHandlers({
    handleBlur: ({ handleBlurContext }) => () => {
      handleBlurContext();
    },
  }),
  withHandlers({
    handleClickOutside: ({ handleClickAway, handleBlur }) => ({ target }) => {
      handleBlur();

      handleClickAway(target);
    },
  }),
);

export default enchance(FloatingPanel);
