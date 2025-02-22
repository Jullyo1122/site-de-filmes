// Pegar o parâmetro da URL
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get('query');

// Selecionar o container onde os resultados serão exibidos
const resultsContainer = document.getElementById('search-results');

// Chave da API
const apiKey = 'ba1e00ddb07d7a15eb83dfd6dd51b14a';

// Função para buscar filmes da API
async function fetchMovies(searchQuery) {
  const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(searchQuery)}&api_key=${apiKey}&language=pt-BR`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayMovies(data.results);
  } catch (error) {
    console.error('Error fetching movies:', error);
    resultsContainer.innerHTML = '<p>Failed to load results.</p>';
  }
}

// Função para exibir os filmes
function displayMovies(movies) {
  if (!movies || !movies.length) {
    resultsContainer.innerHTML = '<p>No results found.</p>';
    return;
  }

  resultsContainer.innerHTML = movies
    .map(
      (movie) => `
        <div class="movie">
          <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
          <h3>${movie.title}</h3>
          <p>${movie.release_date ? movie.release_date : 'Data não disponível'}</p>
        </div>
      `
    )
    .join('');
}

// Executar busca ao carregar a página
if (query) {
  fetchMovies(query);
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
function menuShow(){
  let menuMobile = document.querySelector('.menu-ico');
  if(menuMobile.classList.contains('open')){
      menuMobile.classList.remove('open');
  } else {
      menuMobile.classList.add('open');
  }
}
