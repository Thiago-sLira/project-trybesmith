const camelize = (string: string) => string.replace(/_([a-z])/gm, (char) => char[1].toUpperCase());

export default (object: { [param: string]: unknown }): unknown => {
  const newObject: { [para: string]: unknown } = {};

  Object.keys(object).forEach((key) => {
    newObject[camelize(key)] = object[key];
  });

  return newObject;
};