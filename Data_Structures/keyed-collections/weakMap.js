
/*
Ejemplo de Uso de WeakMap en el Desarrollo Real: Almacenamiento de Datos Privados en Componentes
Descripción:
En un escenario de desarrollo donde necesitas almacenar datos privados asociados a objetos (como instancias de componentes), 
un WeakMap es ideal. Este asegura que si un objeto ya no se necesita y no hay más referencias a él, los datos asociados 
a ese objeto se liberarán automáticamente, evitando fugas de memoria.

Implementación:
Supongamos que estás desarrollando un framework UI donde necesitas asociar datos privados a instancias de componentes. 
Usar WeakMap permite que estos datos sean eliminados automáticamente cuando la instancia del componente se elimina.
*/


class Component {
    static privateData = new WeakMap();
    constructor(name){
        this.name = name;
        Component.privateData.set(this, {state: 'initial'});
    }

    getState(){
        return Component.privateData.get(this).state;
    }

    setState(newState){
        Component.privateData.get(this).state = newState;
    }
}

//Ejemplo de uso
const component1 = new Component('Header');
const component2 = new Component('Footer');

console.log(component1.getState()); // 'initial'
component1.setState('updated');
console.log(component1.getState()); // 'updated'

//si eliminamos la referencia al objeto, sus datos privados también se eliminarán
component1 = null; //'HEADER' object will be garbage collected