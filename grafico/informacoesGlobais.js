const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json&#39'
//url='20.201.28.151/main/dados/grafico-principal.json';
//modelo de endereço servidor de dados para o javaScript.

async function visualizarInformacoesGlobais() {
    const res= await fetch(url)
    const dados = await res.json
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_de_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medios - horas) * 100)
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo) * 100).toFixed(2)
    
    console.log(dados);
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${horas} horas</span> e <span>${minutos} minutos</span> conectadas.<br>Isso significa que aproximadamente <span>${porcentagemConectada}%</span> de pessoas estão conectadas em alguma rede social.`
}

visualizarInformacoesGlobais();
