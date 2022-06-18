import { Nave } from './nave'
import { NaveAnalogica } from './nave-analogica';
import { NaveElectrica } from './nave-electrica'
import { NaveEspacial } from './nave-espacial';

//Esta clase se encargará de gestionar toda la creación de naves para ver su funcionamiento
//No tiene que ver con la gestion en base de datos, solo para ver su comportamiento
//Es similar al carrito de compras
export class Fabrica{
   
    crearNave(naveModel){        
        const {tipo, nombre,sistema,ton,pais,transporte,vuelo} = naveModel;
        switch(naveModel.tipo.toUpperCase()){
            case 'ESPACIAL':
                return new NaveEspacial(tipo, nombre,sistema,ton,pais,transporte,vuelo);

            case 'ELECTRICA':
                return new NaveElectrica(tipo, nombre,sistema,ton,pais,transporte,vuelo);

            case 'ANALOGICA':
                return new NaveAnalogica(tipo, nombre,sistema,ton,pais,transporte,vuelo);

            default:
                return new Nave(tipo, nombre,sistema,ton,pais,transporte,vuelo);           
                
        }
    }
   

}
