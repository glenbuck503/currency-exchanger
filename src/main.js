import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import Currency from './exchange-service.js';









$('#rates').submit(function() {
  event.preventDefault();

  let userInput = $('#userInput').val();
  console.log(userInput);

});
