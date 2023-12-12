const qutu = document.getElementById('unit2')

function getProducts(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    qutu.innerHTML = ""

    cart.map((item, index) => {
        let box = document.createElement('div');
        box.className = "projectsCard"
        box.innerHTML = `
        <p>${item.title}</p>
            <h2>${item.price}</h2>
            <img src="${item.image}" alt="picture">
            <button onclick = "removeItem(${index})">Sepetden Sill</button>`;
            qutu.append(box);
    })
}

function removeItem(index){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice( index, 1);
    localStorage.setItem('cart' , JSON.stringify(cart));
    getProducts()
}

getProducts()