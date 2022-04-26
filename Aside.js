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
                        <div class="btnAside${cont}">${i.quantidade}</div>
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
    document.querySelector(`.btnAside${indice}`).innerHTML = obj.quantidade

    CalculoAside()
    AsideFunction()

    
   
}

function tirarPizzaAside(indice) {
    let obj = pizzas[indice]
    obj.DiminuirPizza()
    document.querySelector(`.btnAside${indice}`).innerHTML = obj.quantidade

    CalculoAside() 
    AsideFunction()
}

function AsideMenu() {

    let AsMenu = document.querySelector('aside')
    
    if ( AsMenu.value == 'full') {
        var id = setInterval(frame02, 0.02)
        
        let i = 70
        function frame02() {
            
            if (i <= 7) {
                AsMenu.style.height = '5vh'
                clearInterval(id)
            }
            
            else {
                AsMenu.style.height = `${i}vh`
                i -= 2
            }
        }

        AsMenu.value = 'notfull'     
    }

    else {


        var id = setInterval(frame, 0.02)
        
        let i = 5
        function frame() {
            
            if (i >= 67) {
                AsMenu.style.height = '70vh'
                clearInterval(id)
            }
            
            else {
                AsMenu.style.height = `${i}vh`
                i += 2
            }
        }

        AsMenu.value = 'full'
    }
    
}


