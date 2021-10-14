// 1- crear un archivo HTML que tenga un div vacío y un boton (añadir). Cada vez que pulse en el botón se debe añadir un p con el texto añadido desde JS dentro del div
// 2. Contador: Crear un HTML con un botón (-) un p y otro botón (+). El p inicialmente mostrará 0. Cuando pulse en el + se deberá sumar uno al valor del p. Cuando pulse en el menos se deberá restar 1.
// 3. Modificar el ejercicio 2 para que cuando el usuario refresque la página, el p se inicialice con el valor que había dejado antes

let contador = 0;
document.querySelector('button').addEventListener('click', function() {
    contador += 1;
    let prueba = document.createElement('p');
    prueba.textContent += `Añadir frase ` + contador;
    document.querySelector('div').appendChild(prueba);
});