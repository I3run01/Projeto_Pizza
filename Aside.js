function AsideFunction() {

    let TextoListaPizza = ''
    let cont = 0
    for (let i of pizzas) {  
        if(i.quantidade > 0) {
            TextoListaPizza +=
                `
                <div >
                    <img src="${i.foto}"></p>
                    <p>${i.nome}</p>
                    <div>
                        <div onclick="tirarPizzaAside(${cont})">-</div>
                        <div id="btnAside">${i.quantidade}</div>
                        <div onclick="colocarPizzaAside(${cont})">+</div>
                    </div>
                </div>
                `
        }
        cont++
    }
    document.querySelector('#lpizzas').innerHTML = TextoListaPizza
    
    CalculoAside()

    
}

function CalculoAside() {
    let soma = pizzas.reduce((soma, obj) => soma += obj.preco*obj.quantidade, 0)

    let subtotal = document.querySelector('#subtotal').innerHTML = soma.toFixed(2)
    let desconto = document.querySelector('#desconto').innerHTML = (soma*0.10).toFixed(2)
    document.querySelector('#ValorTotalAside').innerHTML = (subtotal - desconto).toFixed(2)

}

function colocarPizzaAside(indice) {
    let obj = pizzas[indice]
    obj.AdicionarPizza()
    document.querySelector('#btnAside').innerHTML = obj.quantidade

    CalculoAside()

    
   
}

function tirarPizzaAside(indice) {
    let obj = pizzas[indice]
    obj.DiminuirPizza()
    document.querySelector('#btnAside').innerHTML = obj.quantidade

    CalculoAside()
 
}



