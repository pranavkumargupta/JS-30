const bitcoinElement = document.getElementById('bitcoinPrice');
const ethereumElement = document.getElementById('ethereumPrice');
const dogecoinElement = document.getElementById('dogecoinPrice');

var settings = {
    "async": true,
    "scrossDomain": true,
    "url": 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd%2Cinr',
    "method": "GET",
    "headers": {}
}

$.ajax(settings).done(function (response) {
    bitcoinElement.innerHTML = '$ '+response.bitcoin.usd;
    dogecoinElement.innerHTML = '$ '+response.dogecoin.usd;
    ethereumElement.innerHTML = '$ '+response.ethereum.usd;
});

