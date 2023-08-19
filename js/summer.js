function hanlhleclick(target){
    const selectedItemContainer = document.getElementById('selected-items');
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement("li");
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);
}