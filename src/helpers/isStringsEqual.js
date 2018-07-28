import removeWhiteSpace from '../utils/removeWhiteSpace';

export default (str1, str2) => {
  if (str1 === str2) return true;

  return removeWhiteSpace(str1) === removeWhiteSpace(str2);
};
