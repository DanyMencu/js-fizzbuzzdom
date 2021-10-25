//Ref
const container = document.getElementById('container');

//1. Generare gli square da 1 a 100
for (let i = 1; i <= 100; i++) {
    container.innerHTML += `<div class="square square-${i}">${i}</div>`;
}
//2. Creare la variabile dei nimeri divisibile per 3 o 5 o entrambi
