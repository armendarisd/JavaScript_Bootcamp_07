/*
**
** QWASAR.IO -- my_array_uniq
**
**
** @param {Integer[]} param_1
** @return {integer[]}

**
*/


function my_array_uniq(param_1) {
    const unicos = param_1.filter((valor, indice) => {
        return param_1.indexOf(valor) === indice;
      }
    );
    return unicos;

};