'use strict';

const tabBody = document.querySelector('tbody');
const tabHeader = document.querySelector('thead');

const currentSorted = {
  'Name': false,
  'Position': false,
  'Age': false,
  'Salary': false,
};

const sorting = (el) => {
  const handleSorted = el.target.innerText;

  [...tabBody.children]
    .sort((a, b) => {
      let [x, y] = [a, b];

      if (currentSorted[handleSorted]) {
        [x, y] = [y, x];
      }

      switch (handleSorted) {
        case 'Name':
          return x.children[0].innerText.localeCompare(y.children[0].innerText);
        case 'Position':
          return x.children[1].innerText.localeCompare(y.children[1].innerText);
        case 'Age':
          return (x.children[2].innerText - y.children[2].innerText);
        default:
          x = x.children[3].innerText.replace(/[^0-9]/gi, '');
          y = y.children[3].innerText.replace(/[^0-9]/gi, '');

          return y - x;
      }
    })
    .map(element => tabBody.append(element));

  currentSorted[handleSorted] = !currentSorted[handleSorted];
};

tabHeader.addEventListener('click', sorting);
