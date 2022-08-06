
//remover pacientes 

var pacientes = document.querySelectorAll(".paciente");//index.html

var tabela = document.querySelector("#tabela-pacientes");//index.html

tabela.addEventListener("dblclick", function(event) {//dblclick, 2 cliques sobre o paciente e ele será removido
    event.target.parentNode.classList.add("fadeOut");//index.css

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
});