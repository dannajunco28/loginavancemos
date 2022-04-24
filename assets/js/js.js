const mostrarOcultar = document.getElementById("mostrarOcultar");

document.getElementById('ocultar').style.display = 'block'
document.getElementById('mostrar').style.display = 'none';

function Ocultar(){
    document.getElementById('texto').style.display = 'none';
    document.getElementById('ocultar').style.display = 'none';
    document.getElementById('mostrar').style.display = 'block';
}

function Mostrar(){
    document.getElementById("texto").style.display = 'block';
    document.getElementById('ocultar').style.display = 'block';
    document.getElementById('mostrar').style.display = 'none';
}
