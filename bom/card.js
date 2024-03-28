const addProduct = () => {
    const productValue = document.getElementById('product-name');
    const quantityValue = document.getElementById('product-quantity');
    const product = productValue.value;
    const quantity = quantityValue.value;
    productValue.value = '';
    quantityValue.value = '';
    saveLocalStor(product, quantity);
    displayProduct(product, quantity);
};

const displayProduct = (p, q) => {
    const ul = document.getElementById('p-con');
    const li = document.createElement('li');
    li.innerText = `${p} : ${q}`;
    ul.appendChild(li);
};

const getStor = () => {
    const stor = localStorage.getItem('card');
    let card = {};
    console.log(stor);
    if(stor) {
        card = JSON.parse(stor);
    }
    return card;

};

const saveLocalStor = (p, q) => {
    const card = getStor();
    card[p] = q;
    const cardString = JSON.stringify(card);
    localStorage.setItem('card', cardString);
    console.log(cardString);
};

const displayLocalStor = () => {
    const saveCard = getStor();
    console.log(saveCard)
    for(const p in saveCard) {
        const quantity = saveCard[p];
        console.log(p, quantity);
        displayProduct(p, quantity);
    }
};
displayLocalStor();