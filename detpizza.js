function detpizza(indice) {
    document.querySelector('#detpizza').style.display = 'block'
    document.querySelector('#detpizzaprecoDivTP').value = indice
    document.querySelector('#detpizzaprecoDivCP').value = indice
    document.querySelector('#DetPizzaDivBTNT').innerHTML = 
    `
    <button class="btnt01" id="btnI01${indice}" onclick="PizzaTamanho('p', ${indice})">P <span>100g</span></button><br>
    <button class="btnt02" id="btnI02${indice}" onclick="PizzaTamanho('m', ${indice})">M <span>530g</span></button><br>
    <button class="btnt03" id="btnI03${indice}" onclick="PizzaTamanho('g', ${indice})">G <span>830g</span></button><br>`


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

function PizzaTamanho(tamanho, indice) {
    let obj = pizzas[indice]
    
    if (tamanho == 'p') obj.tamanho = 'p'
    else if (tamanho == 'm') obj.tamanho = 'm'
    else obj.tamanho = 'g'

    if(obj.tamanho == 'p') {
        document.querySelector(`#btnI01${indice}`).style.background = 'rgb(62, 242, 255)'
        document.querySelector(`#btnI02${indice}`).style.background = 'white'
        document.querySelector(`#btnI03${indice}`).style.background = 'white'
    }

    else if(obj.tamanho == 'm') {
        document.querySelector(`#btnI01${indice}`).style.background = 'white'
        document.querySelector(`#btnI02${indice}`).style.background = 'rgb(62, 242, 255)'
        document.querySelector(`#btnI03${indice}`).style.background = 'white'
    }

    else  {
        document.querySelector(`#btnI01${indice}`).style.background = 'white'
        document.querySelector(`#btnI02${indice}`).style.background = 'white'
        document.querySelector(`#btnI03${indice}`).style.background = 'rgb(62, 242, 255)'
    }
}