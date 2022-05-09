let vp = document.getElementById("villaplatzi");
let papel = vp.getContext("2d");

let fondo = {
url: "tile.png",
cargaOK: false
}
let vaca = {
   url: "vaca.png",
   cargaOK: false
};

fondo.Imagen = new Image();
fondo.Imagen.src = fondo.url;
fondo.Imagen.addEventListener("load", cargarFondo);

vaca.Imagen = new Image();
vaca.Imagen.src = vaca.url;
vaca.Imagen.addEventListener("load", cargarVacas);

   function cargarFondo()
   {
      fondo.cargaOK = true;
      dibujar();
   }
   function cargarVacas()
   {
      vaca.cargaOK = true;
      dibujar();
   }
   function cargarpollos()
   {
      pollos.cargaOK = true;
      dibujar();
   }

   function dibujar()
   { 
      if(fondo.cargaOK)
      {
         papel.drawImage(fondo.Imagen, 0, 0);
      }
      if(vaca.cargaOK)
      {
         for(let v=0; v < 10; v++)
       { 
         let x = aleatorio(80, 420);
         let y = aleatorio(0, 420);
         papel.drawImage(vaca.Imagen, x, y);

      }
 
      if(pollo.cargaOK)
   {
      for(let v=0; v < 50; v++)
    { 
      let x = aleatorio(80, 420);
      let y = aleatorio(0, 420);
      papel.drawImage(pollo.Imagen, x, y);
      console.log(pollo);
   }
}
}   
   }

   function aleatorio(min, maxi)
{
   let resultado;
   resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
   return resultado;

} 