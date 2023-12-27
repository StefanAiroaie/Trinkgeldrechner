

console.log("test");
function calculate() {
    let inputValue = document.querySelector('#inputValue').value
    let inputPersons = document.querySelector('#inputPersons').value
    let selectServiceFeedback = document.querySelector('#selectService')
    let selectServiceTip = selectServiceFeedback.value
    let totalCostOutput = document.querySelector('#totalcost')
    let everyshouldpay = document.querySelector('#everyshouldpay')

    switch (selectServiceTip) {
        case 'schlechter':
            totalCost = Number(inputValue) + Number(inputValue * 0.02)
            break
        case 'guter':
            totalCost = Number(inputValue) + Number(inputValue * 0.10)
            break
        case 'super':
            totalCost = Number(inputValue) + Number(inputValue * 0.20)
            break
        default:
            break

    }
    everyshouldpay.innerHTML = "Jede soll " + Number(totalCost / inputPersons).toFixed(2) + "€ zahlen"
    totalCostOutput.innerHTML = totalCost + "€ is preis iclusive Tip für eine " + selectServiceTip + " Tish bedienung"

    console.log("inputValue " + inputValue);
    console.log("inputPersons " + inputPersons);
    console.log("totalcost " + totalcost);
    console.log("everyshouldpay " + everyshouldpay);

}
