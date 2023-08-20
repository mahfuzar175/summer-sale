let total = 0;

function hanlhleclick(target){
    // get product to cart
    const selectedItemContainer = document.getElementById('selected-items');
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement("li");
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);

    // get price
    const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    total = parseFloat(total) + parseFloat(price);
    total = total.toFixed(2);
    console.log(total);
    // set the total price
    const firstTotal = (document.getElementById('total').innerText = total);
    const btnMakePurchase = document.getElementById('btn-make-purchase');
    if(total > 0){
        btnMakePurchase.removeAttribute('disabled');
    }


}