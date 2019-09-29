const url = 'http://95.217.44.58/api/v1/tickers';

getData();

async function getData(){
    const response = await fetch(url);
    const data = await response.json();

    var cont='<div class="container">';
    for(var i=0; i<data.length; i++)
    {

        cont += `
        <div class="row coin shadow rounded">
            <div class="col-md-3">
            <img src="https://raw.githubusercontent.com/jl777/coins/master/icons/${data[i].ticker.symbol.toLowerCase()}.png" class="coin_logo">
                ${data[i].komodo_coin_id}(${data[i].ticker.symbol})
            </div>
            <div class="col-md-3">
                $ ${data[i].ticker.quotes.USD.market_cap}(${data[i].ticker.quotes.USD.percent_change_24h}%)
            </div>
            <div class="col-md-3">
                $ ${data[i].ticker.quotes.USD.price}(${data[i].ticker.quotes.USD.percent_change_24h}%)
            </div>
        </div>`;    
    }
    cont += '</div>';
    document.getElementById("app").innerHTML = cont;

        console.log(data);
    
}

