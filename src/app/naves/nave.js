export class Nave{
    constructor(tipo,nombre){
        this.tipo = tipo;
        this.nombre = nombre;
        this.velocidad = 0;
    }

    iniciar(){
        console.log('Arrancando nave');
        //setInterval(()=>{ this.velocidad += 20; console.log(this.velocidad) }, 1000);
    }
}