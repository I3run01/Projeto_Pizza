class Pizza {
    constructor (nome, descriao, preco, foto) {
        this.nome = nome
        this.descriao = descriao
        this.preco = preco
        this.foto = foto
        this.quantidade = 0

    }


    AdicionarPizza() {
        this.quantidade ++
    }

    DiminuirPizza() {
        this.quantidade -- 
    }

}

let pizzas = [
    new Pizza('Mussarela', 'la jcvaghc ghvadmnjh asgjhfvbajhfba kjahgjshagfui woytjksbfkj ujVDJA F', 20.99, 'imagens/pizza.png'),
    new Pizza ('Calabresa', 'hsagfihdfb', 18.99, 'imagens/pizza2.png')
]

