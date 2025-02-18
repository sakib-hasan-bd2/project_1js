let namtanumber = document.querySelector('.namtanumber');

let btn = document.querySelector('.btn');

let error = document.querySelector('.error');

let result = document.querySelector('.result');

let num;

btn.addEventListener('click', function () {                                         //Anonymous Functions
  num = namtanumber.value;
  namtanumber.value = '';
  result.innerHTML = '';
  
  if (num.trim() === '') {
    error.innerHTML = 'Please enter a number';
  }else if (isNaN(num)) {
    error.innerHTML = 'Please enter a number';

  } else {
    for (let i = 1; i <= 10; i++) {
      error.innerHTML = '';
      result.innerHTML += `<li> ${num} X ${i} = ${num*i} </li>`
    }
  }

})