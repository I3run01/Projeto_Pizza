let TextoListaPizza = ''

for (let i of pizzas) {
    if(i.quantidade > 0) {
        TextoListaPizza +=
            `
            <p>${i.foto}</p>
            <p>${i.nome}</p>
            <div>
                <div>+</div>
                <div>un</div>
                <div>-</div>
            </div>
            `
    }

}

