$(document).ready(function(){

    var quantia = 0;
    /*var lista = [[200],[100],[50],[20],[10],[5],[2],[1],[0.5],[0.25],[0.10],[0.01]];*/
    var lista = [];
    var notas = [200.00,100.00,50.00,20.00,10.00,5.00,2.00,1.00,0.50,0.25,0.10,0.05,0.01];

    
    
    
    
    $("#enviar").click(function() {
        var preço = parseFloat($("#valor").val());
        var mais = 0;
        
        
        if(preço == "" || preço <= 0){
            alert("Dados inválidos!")
            var input = document.querySelector('input');
            input.value = '';
            
        }
        else{
            

            for( let nota of notas){
                nota = parseFloat(nota);
               
                while(preço >= nota){
                    preço=preço-nota;
                    quantia++;
                }
                
                //"valor_que_resta" é o valor original que foi descontado as notas e moedas...
                if(preço > 0.0 && preço < 0.010) {
                   quantia+=1
                } 
                lista.push(nota);
                lista.push(quantia+mais);
                

                
                quantia=0;
                
            }
            $("table").empty();
            var contador = 0;

            for( let indice in lista){

                var tr = $("<tr>")
                tr.attr("id", `tab_${(indice+1)}`);

                if(indice % 2 !== 0){
                    
                    var td_notas = $("<td>")
                    td_notas.text(lista[(indice)])
                    tr.prepend(td_notas);
                    
                    var td_quant = $("<td>")
                    td_quant.text(lista[(indice-1)])
                    tr.prepend(td_quant);
                
                    $("table").append(tr);
                }
                indice ++;
            }   
            lista = []; 
        }
        })
})