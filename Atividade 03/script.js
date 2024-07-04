let y = Math.floor(Math.random() * 10) + 1;
while (true) {

    let x = prompt("Digite um número entre 1 e 10");

    let c = parseFloat(x)

    if (isNaN(c))
        {
            console.log("Digite um numero valido")
            continue;
        }

    if (y === c) 
        {
            console.log("Voce acertou")
            break
        }
        else {
            console.log("tente novamente")
        }
        
}
