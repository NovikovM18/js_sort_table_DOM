'use strict';

const tabBody = document.querySelector('tbody');

const arr = tabBody.innerText.split('\n');

const Arr = arr.map(el => el.split('\t'));

Arr.pop();

const tabArr = Arr.map(el => (
  {
    Name: `${el[0]}`,
    Position: `${el[1]}`,
    Age: `${el[2]}`,
    Salary: `${el[3]}`,
  })
);

let selected = '';

function byField(field) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
};

document.body.addEventListener('click', (event1) => {
  if (event1.target) {
    selected = `${event1.target.innerText}`;

    const sortTabArr = [...tabArr].sort(byField(selected));
    let text = '';

    for (const el of sortTabArr) {
      text += `<tr>
      <td>${el.Name}</td>
      <td>${el.Position}</td>
      <td>${el.Age}</td>
      <td>${el.Salary}</td>
    </tr>`;
    }

    tabBody.innerHTML = text;
  }
});
