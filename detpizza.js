function detpizza(indice) {

    let obj = pizzas[indice]
    document.querySelector('#detpizza').style.display = 'block'
    document.querySelector('#DetPizzaDiv').innerHTML = obj.nome

}