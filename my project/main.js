document.getElementById('search-btn').addEventListener('click', () => {
    const text = document.getElementById('search-text').value
    console.log(text)
        const url = `https://data.binance.com/api/v3/ticker/24hr`
        const xhr = new XMLHttpRequest();
console.log(`First readyState -> ${xhr.readyState}`)
xhr.open('GET', url)
console.log(`Second readyState -> ${xhr.readyState}`)
xhr.onreadystatechange = () => 
    {
        console.log(`Remaining readyState -> ${xhr.readyState}`)
        if(xhr.readyState == 4 && xhr.status == 200) 
        {
            const jsonRes = xhr.responseText
            const res = JSON.parse(jsonRes)
            console.log(res)
            for(let i=0; i < res.length; i++) 
            {
                if(res[i].symbol == text)
                {
                    output = 
                    `
                        <h1>${text}</h1><br>
                    <div> <p> <h3>Price Change = ${res[i].priceChange}</h3></P></div>
                        <div><p><h3> Last Price = ${res[i].lastPrice}</h3></P></div>
                        <div><p> <h3>Open Price = ${res[i].openPrice}</h3></p></div>
                        <div><p><h3> Bid Price = ${res[i].bidPrice}</h3></p></div>
                        <div><p><h3> Volume = ${res[i].volume}</h3></p></div>
                        <div> <p> <h3>Previous Close Price = ${res[i].prevClosePrice}</h3></P></div>
                        <div><p><h3> high Price = ${res[i].highPrice}</h3></p></div>
                        <div><p><h3> Ask Price = ${res[i].askPrice}</h3></p></div>
                        <div><p><h3> Low Price = ${res[i].lowPrice}</h3></p></div>
                        <div><p><h3> Quote Volume = ${res[i].quoteVolume}</h3></p></div>
                        `
                    document.getElementById("my-div").innerHTML = output             
                }
            }
        }
    }
   xhr.send()
    })

    document.getElementById('search-text').addEventListener('keypress', (e) => {
        if(e.key=='Enter')
        e.preventDefault()
     text = document.getElementById('search-text').value
     url = `https://data.binance.com/api/v3/ticker/24hr`
     xhr = new XMLHttpRequest();
console.log(`First readyState -> ${xhr.readyState}`)
xhr.open('GET', url)
console.log(`Second readyState -> ${xhr.readyState}`)
xhr.onreadystatechange = () => 
{
    console.log(`Remaining readyState -> ${xhr.readyState}`)
    if(xhr.readyState == 4 && xhr.status == 200) 
    {
         jsonRes = xhr.responseText
         res = JSON.parse(jsonRes)
        console.log(res)
        for(let i=0; i < res.length; i++)
        {
            if(res[i].symbol == text)
            {
                output = 
                `
                    <h1>${text}</h1><br>
                <div> <p> <h3>Price Change = ${res[i].priceChange}</h3></P></div>
                    <div><p><h3> Last Price = ${res[i].lastPrice}</h3></P></div>
                    <div><p> <h3>Open Price = ${res[i].openPrice}</h3></p></div>
                    <div><p><h3> Bid Price = ${res[i].bidPrice}</h3></p></div>
                    <div><p><h3> Volume = ${res[i].volume}</h3></p></div>
                    <div> <p> <h3>Previous Close Price = ${res[i].prevClosePrice}</h3></P></div>
                    <div><p><h3> high Price = ${res[i].highPrice}</h3></p></div>
                    <div><p><h3> Ask Price = ${res[i].askPrice}</h3></p></div>
                    <div><p><h3> Low Price = ${res[i].lowPrice}</h3></p></div>
                    <div><p><h3> Quote Volume = ${res[i].quoteVolume}</h3></p></div>
                    `
                document.getElementById("my-div").innerHTML = output             
            }
        }
    
    }
}
xhr.send()

})