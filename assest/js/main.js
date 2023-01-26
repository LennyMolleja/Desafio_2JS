// Desafio 1
const marco = () => {

    const foto = document.querySelector("#familia");
    if (foto.style.border === "10px solid green")
    {
        foto.style.border = "0px";
    }
    else {
        foto.style.border = "10px solid green";
    }
};

//Desafio 2
const boton = document.getElementById('btn');
const homer = document.getElementById('homer').value;
const marge = document.getElementById('marge').value;
const bart = document.getElementById('bart').value;

boton.addEventListener("click", function () {
    let total = (parseInt(homer) + parseInt(marge) + parseInt(bart));

    (total > 10) ? document.querySelector("#text").innerHTML = `Llevas ${total} ,Solo puedes adquirir 10 como maximo, Intentalo Nuevamente.` : document.querySelector("#text").innerHTML = "Gracias por su compra, Vuelva Pronto";
});

//Desafio 3
const boton_1 = document.getElementById('btn_1');
const password1 = document.getElementById('password1').value;
const password2 = document.getElementById('password2').value;
const password3 = document.getElementById('password3').value;

boton_1.addEventListener("click", function () {
      let passwordCorrecto = password1 + password2 + password3;

    (passwordCorrecto == 911 || passwordCorrecto == 714) ? document.getElementById("text_1").innerHTML = `El Password ${passwordCorrecto} es Correcto` : document.querySelector("#text_1").innerHTML = `El Password ${passwordCorrecto} es Incorrecto`;
});