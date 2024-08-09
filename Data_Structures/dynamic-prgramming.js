/*Comparación entre llamadas recursivas y programación dinámica */
//Función normal
function fibonacci(n) {
    if(n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

//Función con programación dinámica

function fibonacciDynamic(n, memo = {}) {
    if(n in memo) return memo[n];
    if(n <= 1) return n;
    return memo[n] = fibonacciDynamic(n - 1, memo) + fibonacciDynamic(n - 2, memo);
}

//Ejemplo de uso
console.log(fibonacci(10)); //55 tiempo de ejecución 0.5ms
console.log(fibonacciDynamic(10)); //55 tiempo de ejecución 0.1ms

/*
En este caso la diferencia de tiempo no es muy significativa, pero a medida que el 
número de llamadas recursivas aumenta, la diferencia de tiempo se vuelve más notable.
La programación dinámica es una técnica que se utiliza para resolver problemas que
pueden ser descompuestos en subproblemas superpuestos más pequeños. En lugar de
resolver los mismos subproblemas una y otra vez, la programación dinámica almacena
los resultados de los subproblemas en una tabla para que puedan ser reutilizados más
tarde. Esto puede resultar en una mejora significativa en el rendimiento de la
aplicación.
*/

/*Usos de la programación dinámica en la vida real
La programación dinámica se utiliza en una amplia variedad de aplicaciones en la vida
real, incluyendo:
*Algoritmos de optimización: La programación dinámica se utiliza para resolver
problemas de optimización, como la mochila 0/1, el problema del viajante de
comercio y el problema de la ruta más corta.
*Procesamiento de imágenes: La programación dinámica se utiliza en el procesamiento
de imágenes para mejorar la calidad de las imágenes y reducir el ruido.
*Inteligencia artificial: La programación dinámica se utiliza en la inteligencia
artificial para resolver problemas de búsqueda y planificación.
*Biología computacional: La programación dinámica se utiliza en la biología
computacional para alinear secuencias de ADN y proteínas.
*Finanzas: La programación dinámica se utiliza en las finanzas para optimizar
portafolios de inversión y gestionar el riesgo.
*Juegos: La programación dinámica se utiliza en los juegos para tomar decisiones
óptimas en situaciones complejas.
La programación dinámica es una técnica poderosa que se utiliza en una amplia
variedad de aplicaciones en la vida real para resolver problemas difíciles de manera
eficiente y efectiva.
*/