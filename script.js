//MANIPULACION DEL DOM
//funcion document

// const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const parrafito = document.querySelector('.parrafito');
// const pid = document.querySelector('#pid');
// const input = document.querySelector('input');

// console.log(h1);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input
// })

//modificando html
// h1.innerHTML = 'Patito <br> feo';
// h1.innerText = 'Patito <br feo>';
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');

// h1.classList.add('rojo');
// h1.classList.remove('verde');

// h1.classList.toggle('verde');
// h1.classList.contains('verde');
// input.value = "456";
//crear un elmento desde 

//console.log(document.createElement('img'));

// const img = document.createElement('img');
// img.setAttribute('src', 'https://scontent.fmdz9-1.fna.fbcdn.net/v/t1.18169-9/196166_521861957824976_349166457_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=Ue8H1Q0XNQwAX9uTRYP&_nc_ht=scontent.fmdz9-1.fna&oh=00_AT99oQEFxnzVEZc5ARpEy05fLFwb7VXbsh8qw0kVa51uow&oe=63629BC9');

// console.log(img);
// pid.innerHTML = "";
// pid.append(img);
 
 const h1 = document.querySelector('h1');
 const form = document.querySelector('#form');
 const input1 = document.querySelector('#calculo1');
 const input2 = document.querySelector('#calculo2');
 const btn = document.querySelector('#btnCalcular');
 const pResult = document.querySelector('#result');

 form.addEventListener('submit' ,sumarInputValue);

 //escuchar eventos 
 function sumarInputValue(event){
    // console.log({event});
    event.preventDefault();
    const sumaInputs = Number(input1.value)+ Number(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
 }