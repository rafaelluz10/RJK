const mainContent= document.getElementById('main-content')
const cartBtt = document.getElementById("cart")
const categories = document.getElementsByClassName("category")
var category = "*"
var cart = []

for (i = 0; i < categories.length; i++) {
    if (i > 0) {
        let categoria = categories[i].innerHTML.toLowerCase()
        categories[i].addEventListener('click', () => setCategory(categoria))
    } else {
        categories[i].addEventListener('click', () => setCategory("*"))
    }
}

cartBtt.addEventListener('click', () => {location.href = "cart.html"})

class Produto {
    constructor(nome, tamanho, cor, preço, imagem, categoria) {
        this.nome = nome
        this.tamanho = tamanho
        this.cor = cor
        this.preço = preço
        this.id = Math.floor(Math.random() * 1000)
        this.imagem = imagem
        this.categoria = categoria
    }
    build() {
        return (`
        <div class="product" name="Teste">
        <img src="${this.imagem}" alt="">
        <div class="info">
            <h2>${this.nome}</h2>
            <p class="desc">${this.desc}</p>
        </div>
          <p>Tamanho:
            <select> `
            + this.tamanho.map(element =>
                `<option value="${element}">${element}</option>`
            ).join("\n")
            +
            `</select>
          </p>
          <p>Cor:
          <div class="colors">
            `
            + this.cor.map(val => `<div class="color-option" style="background-color: ${val};"></div>`).join("\n") +
            `
            </div>
          <div class="shop">
          <p class="price">R$ ${Number.parseFloat(this.preço).toFixed(2)}</p>
          <button class="addCart" onclick="addToCart(${this.id})"><span class="material-symbols-outlined">
          add_shopping_cart
          </span>Adicionar ao carrinho</button>
        </div>
        </div>
        `)
    }

    setSize(size) {
        this.size = size
    }

}

const products = [
    new Produto("Calça Cargo", [32, 34, 36, 38, 40, 42, 44], ["beige", "brown", "black"], 150.00, "Mídia/Masculino/Calças/calçacargo.png", ["masculino"]),
    new Produto("Calça Jeans", [32, 34, 36, 38, 40, 42, 44], ["gray", "black", "darkblue"], 180.00, "Mídia/Masculino/Calças/calçajeans.png", ["masculino"]),
    new Produto("Calça Jogger", [32, 34, 36, 38, 40, 42, 44], ["black", "beige"], 125.00, "Mídia/Masculino/Calças/calçajogger.png", ["masculino"]),
    new Produto("Calça Social", [32, 34, 36, 38, 40, 42, 44], ["black", "darkblue", "beige"], 220.50, "Mídia/Masculino/Calças/calçasocial.png", ["masculino"]),

    new Produto("Puma Ess", [32, 34, 36, 38, 40, 42, 44], ["teal", "gray", "black"], 175.50, "Mídia/Masculino/Camisetas/pumaess.png", ["masculino"]),
    new Produto("Adidas Essentials", [32, 34, 36, 38, 40, 42, 44], ["lightgray", "black", "red"], 210.00, "Mídia/Masculino/Camisetas/adidasessentials3listras.png", ["masculino"]),
    new Produto("Camiseta Lacoste", [32, 34, 36, 38, 40, 42, 44], ["black"], 225.30, "Mídia/Masculino/Camisetas/lacoste.png", ["masculino"]),
    new Produto("Nike Just Do It", [32, 34, 36, 38, 40, 42, 44], ["gray", "brown", "black"], 252.70, "Mídia/Masculino/Camisetas/camisetanikejustdoit.png", ["masculino"]),

    new Produto("Blusa de Frio com Zíper", [32, 34, 36, 38, 40, 42, 44], ["teal", "gray", "blue"], 75.00, "Mídia/Masculino/Blusas/blusadefrio.png", ["masculino"]),
    new Produto("Blusa de Lã", [32, 34, 36, 38, 40, 42, 44], ["gray", "teal", "black"], 100.00, "Mídia/Masculino/Blusas/blusadela.png", ["masculino"]),
    new Produto("Jaqueta Tommy Hilfiger", [32, 34, 36, 38, 40, 42, 44], ["black", "red"], 375.00, "Mídia/Masculino/Blusas/jaquetatommy.png", ["masculino"]),
    new Produto("Moletom Canguru", [32, 34, 36, 38, 40, 42, 44], ["black", "gray", "darkblue"], 176.50, "Mídia/Masculino/Blusas/blusamoletom.png", ["masculino"]),

    new Produto("Social Manga Longa", [32, 34, 36, 38, 40, 42, 44], ["beige", "brown", "black"], 275.00, "Mídia/Masculino/Camisetas Sociais/socialmangacomprida.png", ["masculino"]),
    new Produto("Social Manga Curta", [32, 34, 36, 38, 40, 42, 44], ["teal", "black", "gray"], 300.00, "Mídia/Masculino/Camisetas Sociais/socialmangacurta.png", ["masculino"]),
    new Produto("Social Slim Longa", [32, 34, 36, 38, 40, 42, 44], ["black", "beige", "blue"], 470.00, "Mídia/Masculino/Camisetas Sociais/socialslim.png", ["masculino"]),
    new Produto("Social Slim Fit Longa", [32, 34, 36, 38, 40, 42, 44], ["WhiteSmoke", "black", "beige"], 186.00, "Mídia/Masculino/Camisetas Sociais/socialslimfit.png", ["masculino"]),

    new Produto("Polo Detroit Cavallier", [32, 34, 36, 38, 40, 42, 44], ["gray", "black", "green"], 270.00, "Mídia/Masculino/Camisetas Polo/detroitcavallier.png", ["masculino"]),
    new Produto("Polo Lacoste", [32, 34, 36, 38, 40, 42, 44], ["white", "black", "green"], 370.00, "Mídia/Masculino/Camisetas Polo/pololacoste.png", ["masculino"]),
    new Produto("Polo Nike Sportswear", [32, 34, 36, 38, 40, 42, 44], ["black"], 150.00, "Mídia/Masculino/Camisetas Polo/polonikesportswear.png", ["masculino"]),
    new Produto("Polo Ralph Cavallier", [32, 34, 36, 38, 40, 42, 44], ["green", "black", "red"], 225.00, "Mídia/Masculino/Camisetas Polo/ralphcavallier.png", ["masculino"]),

    new Produto("Camiseta Adidas 3 Listras", [32, 34, 36, 38, 40], ["black", "white", "red"], 170.00, "Mídia/Feminino/Camisetas/camisetaadidas3.png", ["feminino"]),
    new Produto("Camiseta Algodão", [32, 34, 36, 38, 40], ["beige", "black", "red"], 70.00, "Mídia/Feminino/Camisetas/camisetaalgodão.png", ["feminino"]),
    new Produto("Camiseta Taylor Swift", [32, 34, 36, 38, 40], ["beige", "purple", "pink"], 95.00, "Mídia/Feminino/Camisetas/camisetataylorswift.png", ["feminino"]),
    new Produto("Camiseta Viva a Vida", [32, 34, 36, 38, 40], ["blue"], 65.00, "Mídia/Feminino/Camisetas/camisetavivaavida.png", ["feminino"]),

    new Produto("Vestido Curto", [32, 34, 36, 38, 40], ["Purple"], 350.00, "Mídia/Feminino/Vestidos/vestidocurto.png", ["feminino"]),
    new Produto("Vestido Encanto Cativante", [32, 34, 36, 38, 40], ["beige", "yellow", "red"], 450.00, "Mídia/Feminino/Vestidos/vestidoencantocativante.png", ["feminino"]),
    new Produto("Vestido Longo de Festa", [32, 34, 36, 38, 40], ["blue"], 730.00, "Mídia/Feminino/Vestidos/vestidolongodefesta.png", ["feminino"]),
    new Produto("Vestido Longuete", [32, 34, 36, 38, 40], ["red"], 275.00, "Mídia/Feminino/Vestidos/vestidolonguete.png", ["feminino"]),

    new Produto("Camiseta Trico Gola Alta", [32, 34, 36, 38, 40], ["beige", "white", "teal"], 250.00, "Mídia/Feminino/Blusas/camisetatricogolaalta.png", ["feminino"]),
    new Produto("Jaqueta Mona", [32, 34, 36, 38, 40], ["blue", "black", "red"], 470.00, "Mídia/Feminino/Blusas/jaquetamona.png", ["feminino"]),
    new Produto("Blusa Moletom Canguru", [32, 34, 36, 38, 40], ["gray", "black", "blue"], 150.00, "Mídia/Feminino/Blusas/blusamoletomcanguru.png", ["feminino"]),
    new Produto("Sueter Grosso Lã", [32, 34, 36, 38, 40], ["pink", "purple", "red"], 270.00, "Mídia/Feminino/Blusas/suetergrossolã.png", ["feminino"]),

    new Produto("Calça Boho", [32, 34, 36, 38, 40], ["red"], 150.00, "Mídia/Feminino/Calças/calçaboho.png", ["feminino"]),
    new Produto("Calça Cargo", [32, 34, 36, 38, 40], ["beige", "black"], 160.00, "Mídia/Feminino/Calças/calçacargo.png", ["feminino"]),
    new Produto("Calça Jeans", [32, 34, 36, 38, 40], ["black", "white", "blue"], 180.00, "Mídia/Feminino/Calças/calçajeans1.png", ["feminino"]),
    new Produto("Calça Pantalona", [32, 34, 36, 38, 40], ["beige", "white", "red"], 200.00, "Mídia/Feminino/Calças/calçapantalona.png", ["feminino"]),

    new Produto("Camiseta Mickey", [18, 20, 22, 24, 26, 28], ["red", "white", "black"], 70.00, "Mídia/Infantil/Camisetas/camisetamickey.png", ["infantil"]),
    new Produto("Camiseta Pica Pau", [18, 20, 22, 24, 26, 28], ["gray", "red", "yellow"], 55.00, "Mídia/Infantil/Camisetas/camisetapicapau.png", ["infantil"]),
    new Produto("Camiseta Stitch", [18, 20, 22, 24, 26, 28], ["gray", "blue", "pink"], 30.00, "Mídia/Infantil/Camisetas/camisetastitch.png", ["infantil"]),
    new Produto("Camiseta Rosinha", [18, 20, 22, 24, 26, 28], ["pink", "purple", "red"], 64.00, "Mídia/Infantil/Camisetas/camisetamenina.png", ["infantil"]),

    new Produto("Calça Jeans Florida", [18, 20, 22, 24, 26, 28], ["blue", "gray", "pink"], 120.00, "Mídia/Infantil/Calças/calçajeansflorida.png", ["infantil"]),
    new Produto("Calça Jeans Estrelado", [18, 20, 22, 24, 26, 28], ["blue", "white", "gray"], 125.00, "Mídia/Infantil/Calças/calçajeansestrelado.png", ["infantil"]),
    new Produto("Calça Dinossauro", [18, 20, 22, 24, 26, 28], ["beige", "green", "red"], 130.00, "Mídia/Infantil/Calças/calçadinossauro.png", ["infantil"]),
    new Produto("Calça Legging Bebê", [18, 20, 22, 24, 26, 28], ["pink"], 70.00, "Mídia/Infantil/Calças/calçaleggingbebe.png", ["infantil"]),

    new Produto("Blusa Mickey", [18, 20, 22, 24, 26, 28], ["red", "white", "black"], 110.00, "Mídia/Infantil/Blusas/blusamickey.png", ["infantil"]),
    new Produto("Blusa Moletom", [18, 20, 22, 24, 26, 28], ["blue", "black"], 100.00, "Mídia/Infantil/Blusas/blusamoletom.png", ["infantil"]),
    new Produto("Blusa Pele de Carneiro", [18, 20, 22, 24, 26, 28], ["orange", "beige", "red"], 150.00, "Mídia/Infantil/Blusas/blusapeledecarneiro.png", ["infantil"]),
    new Produto("Blusa Peludinha", [18, 20, 22, 24, 26, 28], ["beige", "black", "blue"], 200.00, "Mídia/Infantil/Blusas/blusapeludinha.png", ["infantil"]),
   
    new Produto("Macacão de Bolinhas", [18, 20, 22, 24, 26, 28], ["red", "white"], 75.00, "Mídia/Infantil/Macacões/bolinhas.png", ["infantil"]),
    new Produto("Macacão Bordado 4 em 1", [18, 20, 22, 24, 26, 28], ["blue", "white", "black"], 100.00, "Mídia/Infantil/Macacões/bordado4em1.png", ["infantil"]),
    new Produto("Macacão Dino Azul", [18, 20, 22, 24, 26, 28], ["blue", "red", "yellow"], 90.00, "Mídia/Infantil/Macacões/dinoazul.png", ["infantil"]),
    new Produto("Macacão Elefantinho", [18, 20, 22, 24, 26, 28], ["pink", "white", "purple"], 120.00, "Mídia/Infantil/Macacões/elefantinho.png", ["infantil"]),
    
    new Produto("Kit 12 Camisetas", [34, 36, 38, 40, 42, 44, 46], ["green", "black", "orange"], 200.00, "Mídia/Kits/Camisetas/12camisetas.png", ["kits"]),
    new Produto("Kit 6 Camisetas", [34, 36, 38, 40, 42, 44, 46], ["black", "red", "blue"], 120.00, "Mídia/Kits/Camisetas/kit6camisetas.png", ["kits"]),
    new Produto("Kit 5 Camisetas", [34, 36, 38, 40, 42, 44, 46], ["black"], 130.00, "Mídia/Kits/Camisetas/kit5camisetasheringpretas.png", ["kits"]),
    new Produto("Kit 3 Camisetas Sociais", [34, 36, 38, 40, 42, 44, 46], ["blue", "black", "gray"], 125.00, "Mídia/Kits/Camisetas/kit2blusassociais.png", ["kits"]),

    new Produto("Kit 2 Blusas", [34, 36, 38, 40, 42, 44, 46], ["black", "orange", "red"], 300.00, "Mídia/Kits/Blusas/kit2blusas.png", ["kits"]),
    new Produto("Kit 2 Blusas Moletom Canguru", [34, 36, 38, 40, 42, 44, 46], ["gray", "red"], 150.00, "Mídia/Kits/Blusas/kit2blusasmoletom.png", ["kits"]),
    new Produto("Kit 4 Camisetas Manga Longa", [34, 36, 38, 40, 42, 44, 46], ["black", "white", "blue", "gray"], 350.00, "Mídia/Kits/Blusas/kit4blusas.png", ["kits"]),
    new Produto("Kit 6 Blusas", [34, 36, 38, 40, 42, 44, 46], ["gray", "blue", "black"], 550.00, "Mídia/Kits/Blusas/kit6blusas.png", ["kits"]),

    new Produto("Kit 2 Calças Moletom", [34, 36, 38, 40, 42, 44, 46], ["black", "gray"], 170.00, "Mídia/Kits/Calças/kit2calças.png", ["kits"]),
    new Produto("Kit 2 Calças Jeans", [34, 36, 38, 40, 42, 44, 46], ["gray", "blue"], 300.00, "Mídia/Kits/Calças/kit2calçasjeans.png", ["kits"]),
    new Produto("Kit 2 Calças Jogger", [34, 36, 38, 40, 42, 44, 46], ["black", "beige"], 420.00, "Mídia/Kits/Calças/kit2calçasjogger.png", ["kits"]),
    new Produto("Kit 3 Calças Dry Fit", [34, 36, 38, 40, 42, 44, 46], ["black", "gray", "blue"], 200.00, "Mídia/Kits/Calças/kit3calçasdryfit.png", ["kits"]),

    new Produto("Kit 12 Pares Cano Médio", [34, 36, 38, 40, 42, 44, 46], ["black", "white", "blue"], 60.00, "Mídia/Kits/Meias/kit12parescanomédio.png", ["kits"]),
    new Produto("Kit 12 Pares Soquete", [34, 36, 38, 40, 42, 44, 46], ["black", "blue", "white"], 40.00, "Mídia/Kits/Meias/kit12paressoquete.png", ["kits"]),
    new Produto("Kit 6 Pares Meia Lupo", [34, 36, 38, 40, 42, 44, 46], ["black"], 70.00, "Mídia/Kits/Meias/kit6paresmeialupo.png", ["kits"]),
    new Produto("Kit 3 Pares Puma", [34, 36, 38, 40, 42, 44, 46], ["black", "white", "gray"], 40.00, "Mídia/Kits/Meias/kit3parespuma.png", ["kits"]),
    
]

function addToCart(id) {
    prod = products.find(val => val.id == id);
    if (prod && !cart.includes(prod)) {
        cart.push(prod)
        console.log(cart)
        sessionStorage.setItem("items", JSON.stringify(cart))
    } else if (cart.includes(prod)) {
        alert("Produto já adicionado, QUERIDO!")
    }
}

updateList()

getItems()
// verificar items do carrinho
function getItems() {
    let items = JSON.parse(sessionStorage.getItem("items"))
    if (items) {
        cart = items
    }
}


function setCategory(categoria) {
    category = categoria
    console.log(category)
    updateList()
} 

function updateList() {
    mainContent.innerHTML = ""
    if (category == "*") {
        if (products.length) {
            products.forEach(element => {mainContent.innerHTML += element.build()})
        } else {
            mainContent.innerHTML = "Nenhum produto encontrado!"
        }
    } else {
        let productsFilter = products.filter(val => val.categoria.includes(category))
        if (productsFilter.length) {
            productsFilter.forEach(element => {mainContent.innerHTML += element.build() })
        } else {
            console.log("Nenhum encontrado")
            mainContent.innerHTML = "Nenhum produto encontrado!"
        }
    }
}

toup = document.getElementById("toup")

addEventListener('scroll', () => {
    scroll = this.scrollY
    if (scroll > 100) {
        toup.style.display = "block"
    } else {
        toup.style.display = "none"
    }
})

toup.addEventListener('click', () => {
    this.scrollTo({top: 0, behavior: 'smooth'})
})

