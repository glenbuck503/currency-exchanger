import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './exchange-service.js';







async function makeApiCall(userInput, selectCurrency) {
  const response = await Currency.getConversion();
  getConversion(response, userInput, selectCurrency);
}


$('#rates').submit(function() {
  event.preventDefault();

  let userInput = $('#userInput').val();
  let selectCurrency = $('#selectCurrency').val();

});
