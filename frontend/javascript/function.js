var vetorVeiculos = [{
  id: 1,
  modelo: "Polo",
  renavan: "123123",
  cor: 'Branco',
  ano: 2020,
  preco: 20000,
  vendido: true,
  photo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcarroesporteclube.com.br%2Fnoticias%2Fpolo-track-2023-o-novo-gol-que-voce-precisa-conhecer%2F&psig=AOvVaw0wRz4voNOBJd0heW2kGzcT&ust=1698779045124000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDr9527noIDFQAAAAAdAAAAABAE'
},
{
  id: 1,
  modelo: "Polo",
  renavan: "123123",
  cor: 'Branco',
  ano: 2020,
  preco: 20000,
  vendido: false,
  photo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcarroesporteclube.com.br%2Fnoticias%2Fpolo-track-2023-o-novo-gol-que-voce-precisa-conhecer%2F&psig=AOvVaw0wRz4voNOBJd0heW2kGzcT&ust=1698779045124000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDr9527noIDFQAAAAAdAAAAABAE'
}];
var veiculoEditar = {};

function buscarVeiculos() {
  axios.get('http://localhost:8080/api/carro/')
    .then(response => {
      vetorVeiculos = response.data
      desenharVeiculos()
    })
    .catch(error => {
      console.log(error)
    })
}

function buscarVeiculoEspecifico(id) {
  axios.get(`http://localhost:8080/api/carro/${id}`)
    .then(response => {
      veiculoEditar = response.data
    })
    .catch(error => {
      console.log(error)
    })
}

function limparCampos() {

  document.getElementById("modelo").value = ""
  document.getElementById("renavan").value = ""
  document.getElementById("cor").value = ""
  document.getElementById("ano").value = ""
  document.getElementById("preco").value = ""
  document.getElementById("vendido").checked = false;
  document.getElementById("url").value = ""

}


function cadastrarVeiculo() {
  const body = {
    modelo: document.getElementById("modelo").value,
    renavan: document.getElementById("renavan").value,
    cor: document.getElementById("cor").value,
    ano: Number(document.getElementById("ano").value),
    preco: Number(document.getElementById("preco").value),
    vendido: document.getElementById("vendido").checked,
    photo: document.getElementById("url").value
  }

  axios({
    method: 'post',
    url: 'http://localhost:8080/api/carro/',
    data: body
  }).then(_ => {
    console.log(response)
    vetorVeiculos = response.data;
    desenharVeiculos();
  }).catch(error => {
    console.log(error)
  })
  buscarVeiculos();
  limparCampos();
}

function desenharVeiculos() {
  const main = document.getElementById("ulItens");
  main.innerHTML = "";

  vetorVeiculos.forEach(veiculo => {
    main.innerHTML += `<li class="dev-item">
      <header>
        <img src="${veiculo.photo}" alt="Profile" />
        <div class="user-info">
          <strong>${veiculo.modelo}</strong>
          <p>Renavan: ${veiculo.renavan}</p>
          <p>Cor: ${veiculo.cor}</p>
          <p>Ano: ${veiculo.ano}</p>
          <p>Preço: ${veiculo.preco} </p>
          <p>Vendido: ${(veiculo.vendido ? "Sim" : "Não")}</p>
          <br />
          <button onclick="deletarVeiculo(${veiculo.id})">Remover</button>
        </div>
      </header>
    </li>`
  })
}

function init() {
  buscarVeiculos();
}