const posterPelicula = [
  { id: 1, nombre: "Iron Man", fecha: 2008, img: "img/Iron_Man.jpg" },
  { id: 2, nombre: "Iron Man 2", fecha: 2010, img: "img/Iron Man 2.jpg" },
  {
    id: 3,
    nombre: "Capitan America",
    fecha: 2011,
    img: "img/Capitan_America.jpg",
  },
  { id: 4, nombre: "Thor", fecha: 2011, img: "img/Thor.jpg" },
  {
    id: 5,
    nombre: "Los Vengadores",
    fecha: 2012,
    img: "img/Los_Vengadores.jpg",
  },
  {
    id: 6,
    nombre: "Capitan America 2",
    fecha: 2014,
    img: "img/Capitan-America_2.jpg",
  },
];

const cardSection = document.querySelector(".poster-card_container");
const cardFavoriteSection = document.querySelector(".favorite_section");
let peliculasFavoritas = [];
document.addEventListener("DOMContentLoaded", () => {
  mostrarPoster();
});

function mostrarPoster() {
  posterPelicula.forEach((poster) => {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card_container");

    const favoriteButtom = document.createElement("buttom");
    favoriteButtom.classList.add("buttom_container");
    favoriteButtom.onclick = () => {
      if (peliculasFavoritas.find((favorito) => favorito.id === poster.id)) {
        alert("Ya se encuentra dentro de tus favoritos");
      } else {
        agregarAFavorito(poster.id);
      }
    };

    const favoriteStar = document.createElement("i");
    favoriteStar.classList.add("fas", "fa-star", "icon-style");

    const imgMovie = document.createElement("img");
    imgMovie.classList.add("img-item");
    imgMovie.src = poster.img;

    const movieName = document.createElement("h2");
    movieName.classList.add("tittle-item");
    movieName.textContent = poster.nombre;

    const dateMovie = document.createElement("p");
    dateMovie.classList.add("date-item");
    dateMovie.textContent = poster.fecha;

    cardSection.appendChild(cardContainer);
    cardContainer.appendChild(imgMovie);
    cardContainer.appendChild(favoriteButtom);
    favoriteButtom.appendChild(favoriteStar);
    cardContainer.appendChild(movieName);
    cardContainer.appendChild(dateMovie);
  });
}

function agregarAFavorito(id) {
  const peliculaFavorita = posterPelicula.find(
    (pelicula) => pelicula.id === id
  );

  peliculasFavoritas.push(peliculaFavorita);
  mostrarPelicula(peliculasFavoritas);
}

function mostrarPelicula(arreglo) {
  limpiarHtmlPrevio();

  arreglo.forEach((poster) => {
    cardFavoriteSection.innerHTML += `
    <div class="card_container">
        <buttom class="buttom_container"><i class="fas fa-star icon-style"></i></buttom>
        <img src="${poster.img}" alt="" class="img-item">
        <h2 class="tittle-item">${poster.nombre}</h2>
        <p class="date-item">${poster.fecha}</p>
    </div>
  
    `;
  });
}

function limpiarHtmlPrevio() {
  cardFavoriteSection.innerHTML = "";
}
