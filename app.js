function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Obtém a seção onde os campos da pesquisa serão exibidos
    let campoPesquisa = document.getElementById("campo_pesquisa").value;
    console.log(campoPesquisa);
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    // Se campoPesquisa for uma String vazia, então a mensagem "Nada foi encontrado!" será exibida na tela
    if (!campoPesquisa) {
        return section.innerHTML = "Nada foi encontrado! Digite alguma coisa!"
    };
    // Deixa todas as letras de campoPesquisa minúsculas
    campoPesquisa = campoPesquisa.toLowerCase();
    // Inicializa uma string vazia para armazenar o titulo
    titulo = "";
    // Inicializa uma string vazia para armazenar a descrição
    descricao = "";
    // Inicializa uma string vazia para armazenar as tags
    tags = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se o campo pesquisado estive incluído em titulo ou descriçao ou tags
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento div para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                    ${dado.titulo} 
                </h2>
                <p class="descricao-meta">
                    ${dado.descricao} 
                </p>
                <a href=${dado.link} target="_blank">
                    Mais informações
                </a> 
            </div> `            
        } else (resultados = "Atleta não encontrado!") // se não exibi na tela uma mensagem de atleta não encontrado
    };
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }
