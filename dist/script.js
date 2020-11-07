let addBtn = document.getElementById('add');
let calories = document.getElementById('calories')
let foods = document.querySelectorAll('button')
let added = document.getElementById('added')

let sum = 0;

foods[0].addEventListener('click', dodajRuzu);

function dodajRuzu(){
    sum += 163;
    let x = document.createElement('p');
    x.textContent = "-Ruza";
    added.appendChild(x)
}

foods[1].addEventListener('click', dodajBananu);

function dodajBananu(){
    sum += 105;
    let x = document.createElement('p');
    x.textContent = "-Banana";
    added.appendChild(x)
}

foods[2].addEventListener('click', dodajJaje);

function dodajJaje(){
    sum += 72;
}

foods[3].addEventListener('click', dodajMlijeko);

function dodajMlijeko(){
    sum += 50;
}

foods[4].addEventListener('click', dodajCokoladu);

function dodajCokoladu(){
    sum += 80;
}

foods[5].addEventListener('click', dodajGrah);

function dodajGrah(){
    sum += 300;
}

foods[6].addEventListener('click', dodajSladoled);

function dodajSladoled(){
    sum += 94;
}

foods[7].addEventListener('click', dodajHren);

function dodajHren(){
    sum += 236;
}

foods[8].addEventListener('click', dodajPljesku);

function dodajPljesku(){
    sum += 204;
}

foods[9].addEventListener('click', dodajPB);

function dodajPB(){
    sum += 94;
}

foods[10].addEventListener('click', dodajCevap);

function dodajCevap(){
    sum += 90;
}

addBtn.addEventListener('click', dodaj);

function dodaj(){
    calories.innerHTML = `${sum}/3300`
    added.removeChild(x)
}
