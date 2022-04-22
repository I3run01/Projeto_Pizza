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
    new Pizza('Mussarela', 'la jcvaghc ghvadmnjh asgjhfvbajhfba kjahgjshagfui woytjksbfkj ujVDJA F', 20.99, 'imagens/pizza.png'),
    new Pizza ('Calabresa', 'hsagfihdfb', 18.99, 'imagens/pizza2.png')
]

