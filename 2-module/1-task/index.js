/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
  const cloneObj = {};

  for (const key in obj) {
    const prop = obj[key];

    if (typeof (prop) === 'object' && (prop !== null)) {
      cloneObj[key] = clone(prop);
    } else {
      cloneObj[key] = prop;
    }
  }

  return cloneObj;
}
