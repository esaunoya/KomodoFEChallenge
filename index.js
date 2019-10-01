const url = 'http://95.217.44.58/api/v1/tickers';

getData();

async function getData(){
    const response = await fetch(url);
    const data = await response.json();

    data.sort(function(a, b) {
        return a.ticker.quotes.USD.market_cap - b.ticker.quotes.USD.market_cap;
    });
    
    var cont='<div class="container">';
    for(var i=data.length-1; i>=0; i--)
    {
        cont += `
        <div class="row coin shadow rounded">
            <div class="col-1">
                <p class="text-right">
                    ${data.length - i}
                </p>
            </div>
            <div class="col-3 text-left">
                <img src="https://raw.githubusercontent.com/jl777/coins/master/icons/${data[i].ticker.symbol.toLowerCase()}.png" class="coin_logo">
                ${data[i].komodo_coin_id}(${data[i].ticker.symbol})
            </div>
            <div class="col-3">
                <p class="text-right">
                    $ ${data[i].ticker.quotes.USD.market_cap}
                </p>
            </div>
            <div class="col-3">
                <p class="text-right">
                    $ ${data[i].ticker.quotes.USD.price}
                </p>
            </div>
            
            <div class="col-2">
                <p class="text-right">
                    ${data[i].ticker.quotes.USD.percent_change_24h}%
                </p>
            </div>
        </div>`;    
    }
    cont += '</div>';
    document.getElementById("app").innerHTML = cont;

        console.log(data);
    
}

