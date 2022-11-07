// creo un array con dei nomi
const nomi = ["Latte", "Pecorino", "Uova", "Gnocchi", "Verdure"];
let OutputName = document.querySelector(".Name");
// creo una variabile per contenere l'indice dell'array
let i = 0;

// creo un ciclo while per scorrere l'array
while (i < nomi.length) {
  // stampo a video i nomi
  console.log(nomi[i]);
  // incremento l'indice
  OutputName.innerHTML += `<li>${nomi[i]}</li>`;
  i++;

}


