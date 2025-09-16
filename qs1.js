
let precos = [];
for (let i = 0; i < 5; i++) {
    let preco = prompt(`Digite o preço do produto ${i + 1}:`); 
    precos.push(Number(preco)); 
}


let indiceCaro = 0;
for (let i = 1; i < precos.length; i++) {
    if (precos[i] > precos[indiceCaro]) {
        indiceCaro = i;
    }
}

console.log(`O índice do produto mais caro é ${indiceCaro} com o preço de R$${precos[indiceCaro]}`);
