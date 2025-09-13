function calcular(){
    
    let nota = parseFloat(document.getElementById('nota').value);
    let txt = document.getElementById('texto');
   
        if (nota < 0 || nota > 10){    
            alert ('ERRO');
    } else{
        
        if(nota >= 7 ){
            txt.innerHTML = 'parabéns você foi Aprovado com nota ' + nota + ' :)'; 
        }   else{
            if (nota < 7){
                txt.innerHTML = 'você foi reprovado com nota ' + nota + ' :(';
            }
            
        }

    }
}