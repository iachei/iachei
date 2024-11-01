// Array de produtos de exemplo com links de afiliados
const products = [
    { id: 1, name: 'Prateleira 4 andares', img: 'img/organizador_4_andares.png', link: 'https://s.shopee.com.br/BCEwhUqPb', code: '0001' },
    { id: 2, name: 'Parafusadeira/Furadeira', img: 'img/parafusadeira1.png', link: 'https://s.shopee.com.br/6KmsL8Qfms', code: '0002' },
    { id: 3, name: 'Piscina Insuflável', img: 'img/Piscina_Insuflável.png', link: 'https://s.shopee.com.br/5AauxEpNuk', code: '0003' },
    
    // ... adicione mais produtos conforme necessário
];

// Função para exibir produtos
function displayProducts() {
    const productList = document.getElementById('productList');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h5>${product.name}</h5>
            <p>Código: ${product.code}</p> <!-- Exibindo o código do produto -->
            <a href="${product.link}" target="_blank">IR À LOJA</a>
        `;
        productList.appendChild(productCard);
    });
}

// Inicializa a exibição dos produtos
displayProducts();
