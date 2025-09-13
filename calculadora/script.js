let entrada = document.getElementById('entrada');
let valorTotal;
function adicionarNumero(num){
    entrada.value += num;
    
}

function adicionarOperador(ope){
    entrada.value += ope;
}

function limpar(){
    entrada.value = '';
}


function calcular(){
    let entrada = document.getElementById('entrada');
    let operador;
    let valor = entrada.value;
    if(valor.includes('+')) operador = '+';
    else if(valor.includes('-')) operador = '-';
    else if(valor.includes('*')) operador = '*';
    else if(valor.includes('/')) operador = '/';

    let parte = valor.split(operador);
    let n1 = parseFloat(parte[0]);
    let n2 = parseFloat(parte[1]);
       

        if(operador === '+'){
           valorTotal =  n1 + n2;
          entrada.value = valorTotal;

        } else{
            if(operador === '-'){
                valorTotal = n1 - n2;
                entrada.value = valorTotal;
            } 
        } if(operador === '*'){
            valorTotal = n1 * n2;
            entrada.value = valorTotal;
        } else{
            if(operador === '/'){
                valorTotal = n1 / n2;
                entrada.value = valorTotal;
            }
        }



}

