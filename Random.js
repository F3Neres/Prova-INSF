let readLine = require('prompt-sync')();

function Random() {
    return  Math.floor(Math.random() * 1000 + 1);    
    }

    function verificarNumero() {
        let x = Random();
        let msg = '';
        console.log('Escolha um numero e boa sorte ^^')

        for (let tentativa = 1; tentativa <=10 && msg != 'Ganhou!'; tentativa++) {
            console.log(('Escolha um número Tentativa ' + tentativa));          
            let numero = Number(readLine());

            if (numero == x) {
                msg = 'Ganhou!';
                console.log(msg);
            }

            else if(numero < x) {
                msg = 'Maior';
                console.log(msg);
            }

            else if(numero > x) {
                msg = 'Menor';
                console.log(msg);
            }

            if(tentativa == 10 && numero != x){
                console.log('Perdeu!')
                console.log('O número era ' + x);
            }
        }
    }


function main() {
    try {
    console.log('## RANDOM ##');
    console.log('Gernado um numero');
    verificarNumero();
    }
    catch (err) {
        console.log('erro')
    }

}

main();