"use strict";
// Task:
Object.defineProperty(exports, "__esModule", { value: true });
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.
// number of hotdogs => price per unit (cents)
// n < 5 	=> 100
// n >= 5 and n < 10 =>	95
// n >= 10 =>	90
function saleHotdogs(n) {
    let amount;
    if (n < 5) {
        amount = n * 100;
    }
    else if (n >= 5 && n < 10) {
        amount = n * 95;
    }
    else {
        amount = n * 90;
    }
    return amount;
}
console.log(saleHotdogs(50));
