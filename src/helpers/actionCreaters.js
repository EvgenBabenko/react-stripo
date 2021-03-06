export default (typePrefix, fn, index) => async (dispatch) => {
  dispatch({ type: `${typePrefix}_REQUEST` });

  try {
    const data = await fn();

    dispatch({ type: `${typePrefix}_SUCCESS`, data, index });
  } catch (error) {
    dispatch({ type: `${typePrefix}_SUCCESS`, error });
  }
};
