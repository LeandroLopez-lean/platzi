let d = document.getElementById("dibujito");
let lienzo = d.getContext("2d");
let lineas = 30;
let l = 0;
let yi, xf;
let colorcito = "red";

for (l = 0; l < lineas; l++) 
{
    yi = 10 * l;
    xf = 10 *  (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    console.log("Linea " + 1);
}

dibujarLinea(colorcito, 1,1,1,299);
dibujarLinea(colorcito, 1,299,299,299);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.moveTo(xinicial, yinicial,);
 lienzo.lineTo(xfinal, yfinal);
 lienzo.stroke();
 lienzo.closePath();
}




