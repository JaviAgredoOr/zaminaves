import { Nave } from './nave'

export function crearNave(){
    const nave = new Nave('Espacial','Mi nave');
    nave.iniciar();
    return nave;
}