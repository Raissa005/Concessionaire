var vetorVeiculos = [{
  id: 1,
  modelo: "Polo",
  renavan: "123123",
  cor: 'Branco',
  ano: 2020,
  preco: 20000,
  vendido: true
},
{
  id: 1,
  modelo: "Polo",
  renavan: "123123",
  cor: 'Branco',
  ano: 2020,
  preco: 20000,
  vendido: true
}];
var veiculoEditar = {};

function buscarVeiculos(){
  axios.get('http://localhost:8080/aula03/webresources/usuario')
    .then(response => {
      vetorVeiculos = response.data
      desenharVeiculos()
    })
    .catch(error => {
      console.log(error)
    })
}

function buscarVeiculoEspecifico(id){
  axios.get(`http://localhost:8080/aula03/webresources/usuario/${id}`)
    .then(response => {
      veiculoEditar = response.data
    })
    .catch(error => {
      console.log(error)
    })
}

function cadastrarVeiculo(){

  const body = {
     modelo: document.getElementById("modelo").value,
     renavan : document.getElementById("renavan").value,
     cor: document.getElementById("cor").value,
     ano: Number(document.getElementById("ano").value),
     preco: Number(document.getElementById("preco").value),
     vendido: document.getElementById("vendido").checked,
     url: document.getElementById("url").value
  }

  axios({
    method: 'post',
    url: 'http://localhost:8080/aula03/webresources/usuario',
    data: body
  }).then(_ => {
    console.log(response)
    vetorVeiculos = response.data;
    desenharVeiculos();
  }).catch(error => {
    console.log(error)
  })
}

function deletarVeiculo(id){
  if(confirm("Deseja mesmo apagar esse veiculo?")){
    axios.delete(`http://localhost:8080/aula03/webresources/usuario/${id}`)
    .then(response => {
      vetorVeiculos = response.data
      desenharVeiculos()
    })
    .catch(error => {
      console.log(error)
    })
  }
}

function editarVeiculo(id){
  const body = {
    modelo: document.getElementById("modelo").value,
    renavan : document.getElementById("renavan").value,
    cor: document.getElementById("cor").value,
    ano: Number(document.getElementById("ano").value),
    preco: Number(document.getElementById("preco").value),
    vendido: document.getElementById("vendido").checked,
    url: document.getElementById("url").value
 }

  axios({
    method: 'put',
    url: `http://localhost:8080/aula03/webresources/usuario/${id}`,
    data: body
  }).then(_ => {
    window.location("index.html")
    desenharVeiculos();
  }).catch(error => {
    console.log(error)
  })
}


function desenharVeiculos() {
  const main = document.getElementById("ulItens");
  main.innerHTML = "";

  vetorVeiculos.forEach(veiculo => {
      main.innerHTML += `<li class="dev-item">
      <header>
        <img src="https://toppng.com/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png" alt="Profile" />
        <div class="user-info">
          <strong>${veiculo.modelo}</strong>
          <p>Renavan: ${veiculo.renavan}</p>
          <p>Cor: ${veiculo.cor}</p>
          <p>Ano: ${veiculo.ano}</p>
          <p>Preço: ${veiculo.preco} </p>
          <p>Vendido: ${(veiculo.preco ? "Sim" : "Não")}</p>
          <br />
          <a href="editar.html?codigo=${veiculo.id}">Editar</a>
          <button onclick="deletarVeiculo(${veiculo.id})">Remover</button>
        </div>
      </header>
    </li>`
  })
}

