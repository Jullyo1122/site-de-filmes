let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 2000)

function nextImage(){
    count++;
    if(count>5){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}

function menuShow(){
    let menuMobile = document.querySelector('.menu-ico');
    menuMobile.classList.add('open')
}
function menuRemove(){
    let menuMobile = document.querySelector('.menu-ico');
    menuMobile.classList.remove('open')
}
const apiKey = 'ba1e00ddb07d7a15eb83dfd6dd51b14a';
const frmPesquisa = document.querySelector('.pesquisar');

frmPesquisa.onsubmit = (ev) => {
    ev.preventDefault();

    const pesquisa = ev.target.pesquisa.value;

    if (pesquisa === "") {
        alert('Preencha o campo!');
        return;
    }

    // Fazer requisição à TMDB
    fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(pesquisa)}&api_key=${apiKey}&language=pt-BR`)
        .then(result => result.json())
        .then(json => carregaLista(json));
}

const carregaLista = (json) => {
    const lista = document.querySelector("div.listas");
    lista.innerHTML = "";

    json.results.forEach(element => {
        const item = document.createElement("div");
        item.classList.add("item");

        item.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w200${element.poster_path}" alt="${element.title}" />
            <h1>${element.title}</h1>
        `;

        lista.appendChild(item);
    });
}

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = searchInput.value.trim();

  if (query) {
    // Redireciona para a página de pesquisa com o termo na URL
    window.location.href = `pesquisa.html?query=${encodeURIComponent(query)}`;
  }
});

