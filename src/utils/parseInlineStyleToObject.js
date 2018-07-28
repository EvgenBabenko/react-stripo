export default (string) => {
  const regexp = /([\w-]*)\s*:\s*([^;]*)/g;
  let match;
  const properties = {};

  // eslint-disable-next-line no-cond-assign
  while (match = regexp.exec(string)) {
    properties[match[1]] = match[2].trim();
  }

  return properties;
};
