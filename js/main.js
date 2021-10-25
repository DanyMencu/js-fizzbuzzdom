//Ref
const container = document.getElementById('container');

//Generare gli square da 1 a 100
for (let i = 1; i <= 100; i++) {
    //Condizione se è un numero divisibile sia per 3 che per 5
    if ( (i % 3 == 0) && (i % 5 == 0) ) {
        container.innerHTML += `<div class="square fizzbuzz">FizzBuzz</div>`;
    }
    //Condizione se è un numero divisibile per 5
    else if (i % 5 == 0) {
        container.innerHTML += `<div class="square buzz">Buzz</div>`;
    }
    //Condizione se è un numero divisibile per 3
    else if (i % 3 == 0) {
        container.innerHTML += `<div class="square fizz">Fizz</div>`;
    }
    //Condizione di default
    else {
        container.innerHTML += `<div class="square">${i}</div>`;
    }
}
