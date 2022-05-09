class pakiman
{
    constructor(n, v, a)
    {   
        this.nombre = n;
        this.vida = v;
        this.ataque = a;
    }
    hablar()
    {
        alert(this.nombre);
    }
}

let cauchin = new pakiman("cauchin", 100, 30);
let pokacho = new pakiman("pokacho", 80, 50);
let tocinauro = new pakiman("tocinauro", 120, 40);
console.log(cauchin, pokacho, tocinauro);
 