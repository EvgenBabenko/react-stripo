export default (string) => {
  const regex = /([\w-]*)\s*:\s*([^;]*)/g;
  let match;
  const properties = {};
  while (match = regex.exec(string)) {
    properties[match[1]] = match[2].trim();
  }

  return properties;
};
