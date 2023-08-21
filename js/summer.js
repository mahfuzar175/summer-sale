let total = 0;
let discountElementValue = 0;

// Items container handle
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

    const btnApply = document.getElementById('btn-apply');
    if(total >= 200){
        btnApply.removeAttribute('disabled');
    }

}


// apply button handle
document.getElementById('btn-apply').addEventListener('click', function(){
    const applyInputField = document.getElementById('cupon-text');
    const applyInputFieldText = applyInputField.value;

    const discountElement = document.getElementById('discount-text');

    const finalTotal = document.getElementById('final-total');
    // discount calculation
    if (applyInputFieldText === 'SELL200'){
        const discountAmount = ((total * 20) / 100);

        discountElementValue = discountAmount;
        discountElement.innerText = discountAmount.toFixed(2);
        
        const discountedTotal = total - discountAmount;
        finalTotal.innerText = discountedTotal.toFixed(2);
    } 
    else{
        alert('Opps! Wrong Code: The cupon is not correct. Please verify and try again.');
    }
    
})


// reload and reset the page
document.getElementById('btn-go-home').addEventListener('click', function(){
    location.reload();
});

