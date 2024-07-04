let soma = 0 ;

while (true) 
    {
        let input = prompt("Digite Números")

        let numero = parseFloat(input)
        
        if (isNaN(numero))
            {
            break;
            }   
        soma += numero
        
        console.log(soma)
    }