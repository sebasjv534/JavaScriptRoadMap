let sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("dog"); // woof
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");
sayings.has("dog"); // false

for (let [key, value] of sayings) {
    console.log(key + " goes " + value);
}
// Output:
// cat goes meow
// elephant goes toot

sayings.clear();
sayings.size; // 0

//uso del weakmap

const private = new WeakMap();

function Public() {
    const me = {
        // Private data goes here
    };
    private.set(this, me);
}

Public.prototype.method = function () {
    const me = private.get(this);
    // Do stuff with private data in `me`...
};

/*
Ejemplo de Uso de Map en el Desarrollo Real: Gestión de Configuraciones de Componentes
Descripción:
Imagina que estás desarrollando una aplicación de interfaz de usuario (UI) 
compleja con múltiples componentes. Cada componente puede tener configuraciones 
específicas que deseas gestionar centralizadamente. Puedes usar un Map para almacenar 
estas configuraciones, asociándolas con el identificador único de cada componente.

Implementación:
Supongamos que tienes un sistema que gestiona las configuraciones de diferentes componentes 
de una UI. Cada componente tiene un id único, y deseas poder obtener y actualizar la 
configuración de cualquier componente en cualquier momento.

*/

class ComponentManager {
    constructor() {
        this.configurations = new Map();
    }

    setConfiguration(componentId, config) {
        this.configurations.set(componentId, config);
    }

    getConfiguration(componentId) {
        return this.configurations.get(componentId);
    }

    updateConfiguration(componentId, newConfig) {
        if (this.configurations.has(componentId)) {
            const existingConfig = this.configurations.get(componentId);
            this.configurations.set(componentId, { ...existingConfig, ...newConfig });
        }
    }

    removeComponent(componentId) {
        this.configurations.delete(componentId);
    }

    showAllConfigurations() {
        this.configurations.forEach((config, id) => {
            console.log(`Component ID:${id}, Configuration:`, config);
        });
    }
}

//Ejemplo de uso
const manager = new ComponentManager();
manager.setConfiguration(1, { theme: "dark", layout: "grid" });
manager.setConfiguration(2, { theme: "light", layout: "list" });

console.log(manager.getConfiguration(1)); // {theme: 'dark', layout: 'grid'}

manager.updateConfiguration(1, { layout: "flex" });
console.log(manager.getConfiguration(1)); // {theme: 'dark', layout: 'flex'}

manager.showAllConfigurations();
// Component ID:1, Configuration: {theme: 'dark', layout: 'flex'}
// Component ID:2, Configuration: {theme: 'light', layout: 'list'}

manager.removeComponent(1);
manager.showAllConfigurations();

// Component ID:2, Configuration: {theme: 'light', layout: 'list'}

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