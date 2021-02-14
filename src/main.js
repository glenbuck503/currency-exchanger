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
    else if (typeof(response) === 'object') {
      $('.results').text(`Error for currency:  ${response['error-type']}`);
    }
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
