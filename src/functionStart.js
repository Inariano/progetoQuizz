export {Start}
//Funcao iniciar a aplicacao 
function Start ()
{
    ///criacao de ambiente grafico
     
    ////criacao de espaco grafico principal
 const $divmain = document.createElement("div");
 document.body.appendChild($divmain)

 ////criação de area de botoes
 const $divbuttons = document.createElement("div");
       $divmain.appendChild($divbuttons);

 /////criacao de botao de inicio de quiz
 const $buttonstart = document.createElement("button");
       $buttonstart.innerText="start"
       $divbuttons.appendChild($buttonstart)

       /////chamada de questoao pelo botao
       $buttonstart.addEventListener("click",() =>{console.log("funcao a ser chamada")}) 

 




}