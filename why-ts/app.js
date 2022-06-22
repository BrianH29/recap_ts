// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {sting} street
 * @property {string} city
 */

// 아래 형식을 JSDoc 이라고 한다. 
/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser(){
  return axios.get(url);
}

fetchUser().then(function (response) {
  response.address.
})

function startApp() {
fetchUser
    .then(function (response) {
      user = response.data;
      console.log(user);
      // TODO: 이름, 이메일, 주소 표시하기
      username.innerText = user[0].name
      email.innerText = user[0].email
      address.innerText = user[0].address
    
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
