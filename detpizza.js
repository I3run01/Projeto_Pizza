function detpizza(indice) {
    document.querySelector('#detpizza').style.display = 'block'
    document.querySelector('#detpizzaprecoDivTP').value = indice
    document.querySelector('#detpizzaprecoDivCP').value = indice

    let obj = pizzas[indice]
    document.querySelector('#detpizzaNome').innerHTML = obj.nome
    document.querySelector('#detpizzaimg').src = obj.foto
    document.querySelector('#detpizzaDescricao').innerHTML = obj.descriao
    document.querySelector('#detpizzapreco').innerHTML = `R$ ${obj.preco}`
    document.querySelector('.detpizzasQuantidades').innerHTML = obj.quantidade
}

function colocarPizza(indice) {
    let obj = pizzas[indice]
    obj.AdicionarPizza()
    document.querySelector('.detpizzasQuantidades').innerHTML = obj.quantidade
 
}

function tirarPizza(indice){
    let obj = pizzas[indice]
    obj.DiminuirPizza()
    document.querySelector('.detpizzasQuantidades').innerHTML = obj.quantidade
    
}

function CarcelarPizza() {
    document.querySelector('#detpizza').style.display = 'none'
}

function AdicionarCarrinho() {
    document.querySelector('#detpizza').style.display = 'none'
    document.querySelector('aside').style.display = 'block'
    AsideFunction()
}