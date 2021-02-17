import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './exchange-service.js';


function getRates(response,userInput,selectCurrency) {
  if (response.result === "error") {
    if (response['error-type'] === "unsupported-code") {
      $('.results').text('The currency is not supported');
    } else {
      $('.results').text(`There was an error: ${response['error-type']}`);
    }
  } else {
    $('.results').text('The conversion rate is ' + (parseFloat(userInput) * response.conversion_rates[selectCurrency]));
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
  makeApiCall(userInput, selectCurrency);
});



