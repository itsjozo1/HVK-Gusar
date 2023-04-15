const slider = document.querySelector(".slider");
const arrLeft = document.querySelector(".arrow-left");
const arrRight = document.querySelector(".arrow-right");
const heading = document.querySelector(".caption h1");
const description = document.querySelector(".caption p");

const images = [
  "stara1.jpg",
  "stara2.jpg",
  "stara3.jpg",
  "stara4.jpg",
  "stara5.jpg",
];
const headings = [
  "Gusarov dom",
  "1998 4+ SM",
  "OLYMPICS CRO",
  "Matejuška 1931",
  "2+ SM",
];
const descriptions = [
  "Pogled s mora na prvi dom i ponton s veslačima",
  "Denis Boban, Siniša Skelin, Igor Boraska, Tihomir Franković kor. Ratko Cvitanić, Henley Royal Regata",
  "Brončani osmerac na Olimpijskim igrama 2000. u Sidneyu",
  "Regata na rivi u čast Duji Kaliterni",
  "Davor Siriščević , Zlatko Celent kor. Denis Boban 1985 prvenstvo Balkana, Ioaninna Grčka",
];

let id = 0;

function slide(id) {
  slider.style.backgroundImage = `url(/img/info/${images[id]})`;
  slider.classList.add("image-fade");
  setTimeout(() => {
    slider.classList.remove("image-fade");
  }, 550);
  heading.innerText = headings[id];
  description.innerText = descriptions[id];
}

arrLeft.addEventListener("click", () => {
  id--;
  if (id < 0) {
    id = images.length - 1;
  }
  slide(id);
});
arrRight.addEventListener("click", () => {
  id++;
  if (id > images.length - 1) {
    id = 0;
  }
  slide(id);
});
