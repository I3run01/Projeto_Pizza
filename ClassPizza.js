class Pizza {
    constructor (nome, descriao, preco, foto) {
        this.nome = nome
        this.descriao = descriao
        this.preco = preco
        this.foto = foto
        this.quantidade = 0
        this.tamanho = null

    }


    AdicionarPizza() {
        this.quantidade ++
    }

    DiminuirPizza() {
        if(this.quantidade <= 0 ) this.quantidade = 0
        else this.quantidade -- 
    }

}

let pizzas = [
    new Pizza('Mussarela', 'podia se chamar pizza de 1 queijo', 20.19, 'imagens/pizza.png'),
    new Pizza('Frango com catupiry', 'pizza não tão boa', 18.00, 'imagens/pizza2.png'),
    new Pizza('4 Queijos', 'melhor pizza', 17.45, 'imagens/pizza3.png'),
    new Pizza('Americana', 'pizza azul e vermelha', 19.77, 'imagens/pizza4.png'),
    new Pizza('Sorvete', 'pizza estranha', 21.43, 'imagens/pizza5.png'),
    new Pizza('Moda da casa', 'pizza fashion', 18.55, 'imagens/pizza6.png'),

]

