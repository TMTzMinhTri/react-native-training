window.addEventListener('DOMContentLoaded', (event) => {
    let button = document.getElementById("btn")
    let result = document.getElementById("result")
    button.addEventListener("click", async () => {
        let input = document.getElementById("amount").value
        let usd = document.getElementById("usd").checked
        let apiKey = "4f40ed2db62faea558d3"
        let currency = usd ? "USD" : "EUR"
        let url = `https://free.currconv.com/api/v7/convert?q=${currency}_PHP&compact=ultra&apiKey=${apiKey}`
        fetch(url).then(res => {
            res.json().then(data => {
                result.innerHTML = Object.values(data) * input
            })
        })

    })
});
