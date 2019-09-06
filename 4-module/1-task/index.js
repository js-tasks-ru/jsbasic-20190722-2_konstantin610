/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  const ulElement = document.createElement('ul');

  friends.forEach((item) => {
    const liElement = document.createElement('li');
    liElement.append(`${item.firstName} ${item.lastName}`);
    ulElement.append(liElement);
  });
  return ulElement;
}
