var titleEl = document.queryselector('.title')
var searchFormEl = document.queryselector('#search-form')
var amountInputEl = document.queryselector('#amount-input')
var formatInputEl = document.queryselector('format-input')
var compareEl = document.queryselector('.compare')
var addSavedEl = document.queryselector('.addSaved')
var boxHeader = document.queryselector('boxHeader')
var boxTitle = document.queryselector('boxTitle')
var boxInfoEl = document.queryselector('.boxInfo')
var currencyBoxEl = document.queryselector('.currencyBoxEl')
var currencyCompareEl = document.queryselector('.currencyCompare')
var newsEl = document.queryselector('.news')
var articleEl = document.queryselector('.article')

function currencylistusd (){
    var requestUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';

    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log("usd")
        console.log(data);
      });
    
}
currencylistusd();

function matchcrypto(currency) {
    var requestUrl = new URL('https://api.coingecko.com/api/v3/coins/markets?');
    x= "vs_currency"
    y= currency
    requestUrl.searchParams.append(x, y);
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log("function input currency");
        console.log(data);
      });
    
}
matchcrypto("czk");

function logtop50cryptoprices(currency) {
    var requestUrl = new URL('https://api.coingecko.com/api/v3/coins/markets?');
    x= "vs_currency"
    y= currency
    requestUrl.searchParams.append(x, y);
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for ( var i = 0; i<49;i++){
            console.log(data[i].name + ": " + data[i].current_price + " " + currency + "(s)");
        }
      });
    
}
logtop50cryptoprices("eur");

function govcurrencylist (){
  var requestUrl = new URL('https://api.frankfurter.app/currencies?');


  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
  
}
govcurrencylist();

function govcurrencyexchange (currency, amount){
  var requestUrl = new URL('https://api.frankfurter.app/latest?');
  x= "from"
  y= currency
  requestUrl.searchParams.append(x, y);
  a= "amount"
  b = amount
  requestUrl.searchParams.append(a, b);
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("exchange")
      console.log(data);
    });
  
}
govcurrencyexchange("USD", 10);

var amountFormEl = document.querySelector('#currency-form');

function handleSearchFormSubmit(event) {
  event.preventDefault();

  var amountInputVal = document.querySelector('#amount-input').value;
  var formatInputVal = document.querySelector('#format-input').value;

  if (!amountInputVal) {
    console.error('You need a search input value!');
    return;
  }

  var queryString = 'https://api.coingecko.com/api/v3/coins/list' + formatInputVal;

  (queryString);
}




// amountFormEl.addEventListener('submit', handleSearchFormSubmit);

