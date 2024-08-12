function executeFunctionRecursively(callbackFunction, currentObject, processedObjects = null) {
    if (!processedObjects) processedObjects = new WeakSet(); // Inicializa el WeakSet si no se ha hecho aún
    
    if (processedObjects.has(currentObject)) return; // Detiene si el objeto ya ha sido procesado

    callbackFunction(currentObject); // Ejecuta la función en el objeto actual
    
    if (typeof currentObject === "object") {
        processedObjects.add(currentObject); // Marca el objeto como procesado
        for (let property in currentObject) {
            executeFunctionRecursively(callbackFunction, currentObject[property], processedObjects);
        }
    }
}

// Ejemplo de uso con referencia circular
const objectA = {
    name: "Object A",
    relatedObject: {
        name: "Related Object",
    },
};

// Crear una referencia circular
objectA.relatedObject.circularReference = objectA;

// Ejecutar la función recursiva
executeFunctionRecursively((obj) => console.log(obj), objectA);
