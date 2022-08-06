//Aqui vamos filtar os pacientes
var campoFiltro = document.querySelector("#filtrar-tabela");//criada lá no index.css, criada input com id filtrar-tabela  no index.html, chamada no label 
campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");//pega todos os paciente da class="paciente" (criada na tabela de  index.html) e gurada na var pacientes
    
    if (this.value.length > 0) {//se o valor for maior que zero, tem pacientes na lista
        for (var i = 0; i < pacientes.length; i++) {//loop que vai do 1 ao último paciente da lista
            var paciente = pacientes[i];//passa os pacientes (do indice) da lista (class .paciente) para a variável paciente
            var tdNome = paciente.querySelector(".info-nome");//tdNome gurada os dados de paciente com a class="info-nome" que contém o nome do paciente e foi criada lá no index.html
            var nome = tdNome.textContent;//atualiza o nome do paciente
            var expressao = new RegExp(this.value, "i");//busca o registro no indice atual

            if (!expressao.test(nome)) {//testa se o paciente está add na lista de paciente oculto
                paciente.classList.add("invisivel");//a class invisivel foi criada no index.ccs e chamada no span de index.html 
            } else {
                paciente.classList.remove("invisivel");//se o paciente não foi add na liste significa que ele foi removido da lista
            }
        }
        
    } else {//se as verificações acima não encontrarem nada, a lista de pacientes está vazia
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});