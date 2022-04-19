function detpizza(indice) {
    document.querySelector('#detpizza').style.display = 'block'

    let obj = pizzas[indice]
    document.querySelector('#detpizzaNome').innerHTML = obj.nome
    document.querySelector('#detpizzaimg').src = obj.foto
    document.querySelector('#detpizzaDescricao').innerHTML = obj.descriao
    document.querySelector('#detpizzapreco').innerHTML = `R$ ${obj.preco}`
}

function colocarPizza() {
    document.querySelector('#detpizzasQuantidades').innerHTML = 'teste'
 
}

function tirarPizza(){
    document.querySelector('#detpizzasQuantidades').innerHTML = 'teste'
    
}

function CarcelarPizza() {
    document.querySelector('#detpizza').style.display = 'none'
}