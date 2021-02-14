import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './exchange-service.js';


function getRates(response, userInput, selectCurrency) {
  if (response.conversion_rates) {
    if (response.conversion_rates[selectCurrency]) {
      $('.results').text('The conversion rate is ' + (parseFloat(userInput) * response.conversion_rates[selectCurrency]));
    }
    else {
      $('.results').text(`Currency not supported. Please choose again ${response['error-type']}`);
      }
    }
    else if (response.result == "error") {
      $('#output').text(`There was the following error: ${response['error-type']}`);
    }
    else {
      $('.results').text(`There was the following error: ${response}`);
    }
  }



async function makeApiCall(userInput, selectCurrency) {
  const response = await Currency.getConversion();
  getRates(response, userInput, selectCurrency);
}


$('#rates').submit(function() {
  event.preventDefault();

  let userInput = $('#userInput').val();
  let selectCurrency = $('#selectCurrency').val();
  makeApiCall(userInput, selectCurrency)

});
