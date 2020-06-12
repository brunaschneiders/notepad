let nome = prompt(`Você está prestes a criar o seu próprio Bloco de Notas! 
Mas, antes disso, poderia nos informar o seu nome?`);

document.querySelector('.display-4').innerHTML = `Bem vindo(a), ${nome}!`

class BlocoDeNotas {

    constructor(){
        this.titulo = document.getElementById('txtTitulo');
        this.conteudo = document.getElementById('txtConteudo');
        this.data = document.getElementById('txtData');
        this.hora = document.getElementById('txtHora');
        this.btnInserir = document.getElementById('btn-incluir-nota');
        this.listaNotas = [];
        this.criarEventos();
    } 

    criarEventos() {
        this.btnInserir.addEventListener("click", function(event){
            event.preventDefault();
        });
        this.btnInserir.onclick = event => this.incluirNota();
    }


    incluirNota() { 
        if (!this.titulo.value || !this.conteudo.value || !this.data.value || !this.hora.value) {
            document.getElementById('aviso').innerHTML = `
            <div class="textoAviso">Para salvar a nota, é necessário o preenchimento de todos os campos.
            <br/>
            <br/>
            Você não preencheu os seguintes dados:
            </div>`;
        } else{
            document.getElementById('aviso').innerHTML = `<div class="avisoFinal"><a href="#muralNotas">Visualizar notas</a></div>`;  
            const nota = {
                titulo: this.titulo.value,
                conteudo: this.conteudo.value,
                data: this.data.value,
                hora: this.hora.value
            }
            this.listaNotas.push(nota);
            this.mostrarNota(this.listaNotas);
            
            this.quantidadeNotas(this.listaNotas);
        }
    
        if (this.titulo.value === ""){
            document.getElementById('aviso').innerHTML += `<div class="avisoItens">- Título <br/></div>`
        } if (this.conteudo.value === ""){
            document.getElementById('aviso').innerHTML += `<div class="avisoItens">- Conteúdo </div>`
        } if (this.data.value === ""){
            document.getElementById('aviso').innerHTML += `<div class="avisoItens">- Data </div>`
        } if (this.hora.value === ""){
            document.getElementById('aviso').innerHTML += `<div class="avisoItens">- Hora</div>`
        }         
    }
    
    mostrarNota(notas) {
        
        document.getElementById('cabecalhoNotas').innerHTML = `<div class="cabecalhoNotas">Mural de notas</div>`;
    
        document.getElementById('resultadoNotas').innerHTML = ``;

        for(let i = 0; i < notas.length; i++){
            
            document.getElementById('resultadoNotas').innerHTML += `
            <div class="card border-dark mb-3" style="max-width: 18rem;">
                <div class="card-header border-dark">${notas[i].titulo}</div>
                <div class="card-body text-dark">
                    <p class="card-text">${notas[i].conteudo}</p>
                </div>
                <div class="card-footer border-dark">Quando? ${notas[i].data}, às ${notas[i].hora}</div>
            </div>`
        }      
    }

    quantidadeNotas(notas) {

        document.getElementById('quantidade').innerHTML = `${notas.length}`;
    
    }

}

new BlocoDeNotas;
