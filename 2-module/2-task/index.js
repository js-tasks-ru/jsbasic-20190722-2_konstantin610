/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  let haveProp = false;

  for (const key in obj) {
    haveProp = true;
    break;
  }

  return !haveProp;
}
