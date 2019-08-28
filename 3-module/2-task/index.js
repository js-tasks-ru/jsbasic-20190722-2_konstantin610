/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  const arrayTotal = str.split(' ').join(',').split(',').filter(item => !(item === '')
    && Number.isFinite(Number(item)));
  const result = {};
  result.max = Math.max(...arrayTotal);
  result.min = Math.min(...arrayTotal);

  return result;
}
