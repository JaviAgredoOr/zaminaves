export class Nave{
    constructor(tipo,nombre,sistema,ton,pais,transporte,vuelo){
        this.tipo = tipo;
        this.nombre = nombre;
        this.sistema = sistema;
        this.ton = ton;
        this.pais = pais;
        this.transporte = transporte; 
        this.vuelo = vuelo;
    }

    iniciar(){
        console.log('Arrancando nave');
        //setInterval(()=>{ this.velocidad += 20; console.log(this.velocidad) }, 1000);
    }
}