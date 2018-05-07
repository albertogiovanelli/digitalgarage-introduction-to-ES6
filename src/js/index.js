import '../css/style.css';
// Load the full build.
const _ = require('lodash');
console.log("Hello World!");

const controlLogin = () => {

};

document.querySelector('.login__container').addEventListener('submit', e => {
    e.preventDefault();
    controlLogin();
});