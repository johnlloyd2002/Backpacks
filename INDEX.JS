var product1 = document.getElementById('product1');
var qty1 = document.getElementById('qty1');
var price1 = document.getElementById('price1');
var total1 = document.getElementById('total1');

var product2 = document.getElementById('product2');
var qty2 = document.getElementById('qty2');
var price2 = document.getElementById('price2');
var total2 = document.getElementById('total2');

var product3 = document.getElementById('product3');
var qty3 = document.getElementById('qty3');
var price3 = document.getElementById('price3');
var total3 = document.getElementById('total3');

function addTotal() {
    var grandTotal = 0;
    if (qty1.value > 0) {
        total1.innerHTML = qty1.value * price1.innerHTML + " USD";
        grandTotal += qty1.value * price1.innerHTML;
    }
    if (qty2.value > 0) {
        total2.innerHTML = qty2.value * price2.innerHTML + " USD";
        grandTotal += qty2.value * price2.innerHTML;
    }
    if (qty3.value > 0) {
        total3.innerHTML = qty3.value * price3.innerHTML + " USD";
        grandTotal += qty3.value * price3.innerHTML;
    }
    document.getElementById('grandTotal').innerHTML = grandTotal + " USD";
}

qty1.addEventListener("input", addTotal);
qty2.addEventListener("input", addTotal);
qty3.addEventListener("input", addTotal);
