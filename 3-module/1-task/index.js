/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  return data.filter(item => age >= item.age).map(item => `${item.name}, ${item.balance}`).join('\n');
}
