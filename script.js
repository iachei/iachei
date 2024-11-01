// Array de produtos de exemplo com links de afiliados
const products = [
    { id: 1, name: 'Organizador Make', img: 'img/organizador_maquiagem.png', link: 'https://s.shopee.com.br/9f3Llwv6Xo', code: '0001' },
   
    { id: 2, name: 'Parafusadeira/Furadeira', img: 'img/parafusadeira1.png', link: 'https://s.shopee.com.br/6KmsL8Qfms', code: '0002' },
    { id: 3, name: 'Piscina Insuflável', img: 'img/Piscina_Insuflável.png', link: 'https://s.shopee.com.br/5AauxEpNuk', code: '0003' },
    { id: 4, name: 'Kit jogo de Cozinha', img: 'img/talheres_de_siliconne.png', link: 'https://s.shopee.com.br/9zgBDmaFO5', code: '0004' },
    { id: 5, name: 'Prateleira 4 andares', img: 'img/organizador_4_andares.png', link: 'https://s.shopee.com.br/BCEwhUqPb', code: '0005' },
    
    // ... adicione mais produtos conforme necessário
];

// Função para exibir produtos
function displayProducts(filteredProducts) {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; // Limpa a lista antes de exibir os produtos

    filteredProducts.forEach(product => {
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

// Função de busca
function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase(); // Pega o valor em minúsculas
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchInput) || 
        product.code.includes(searchInput)
    );
    displayProducts(filteredProducts);
}

// Inicializa a exibição dos produtos com todos eles
displayProducts(products);

// Adiciona o evento para a barra de pesquisa
document.getElementById('searchInput').addEventListener('input', searchProducts);
