const qutu = document.getElementById('unit2')

async function getProducts() {
    const response = await axios.get('https://65685e799927836bd974a707.mockapi.io/products')
    const data = await response.data;
    db = data;
    
    db.map(item => {
        const box = document.createElement('div');
        box.className = "projectsCard"
        box.innerHTML = `
            <p>${item.title}</p>
            <h2>${item.price}</h2>
            <img src="${item.image}" alt="picture">
            <button onclick = "addToBasket(${item.id})">Sepete Ekle</button>`;
            qutu.append(box);
    })
}

function addToBasket (id){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(db.find(item => item.id == id));
    localStorage.setItem('cart', JSON.stringify(cart));

}

getProducts()

