/*
**
** QWASAR.IO -- my_average_mark
**
**
** @param {String_integer[]} param_1
** @return {float}

**
*/


function my_average_mark(param_1) {
    var i = 0;
    var suma = 0;
    var promedio = 0;
    while(param_1[i] != undefined){
        suma = suma + param_1[i]["integer"];
        i++;
    }
    
    promedio = (suma/i);
    
    return promedio.toFixed(1);
}