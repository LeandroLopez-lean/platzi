let texto = document.getElementById("texto_lineas");
let boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujarporclick );


let d = document.getElementById("dibujito.js");
let ancho = d.clientWidth;
let lienzo = d.getContext("2d");


function dibujarporclick()
{
    
    let lineas = parseInt(texto.value);  
    let l = 0;
    let yi, xf;
    let colorcito = "red";
    let espacio = ancho / lineas;
    
    
    for (l = 0; l < lineas; l++) 
    {
        yi = espacio * l;
        xf = espacio *  (l + 1);
        
        dibujarLinea(colorcito, 500, yi, xf, 0);
        dibujarLinea(colorcito, 1, yi, xf, 500);
        dibujarLinea(colorcito, 500, yi, xf, 1);
    
        console.log("Linea " + 1);
    }
    
    dibujarLinea(colorcito, 0,0,0,500);
    dibujarLinea(colorcito, 0,499,500,500)
    
    function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
    {
     lienzo.beginPath();
     lienzo.strokeStyle = color;
     lienzo.moveTo(xinicial, yinicial,);
     lienzo.lineTo(xfinal, yfinal);
     lienzo.stroke();
     lienzo.closePath();
    }
    


 









}