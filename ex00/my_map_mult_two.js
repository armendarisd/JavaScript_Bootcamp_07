/*
**
** QWASAR.IO -- my_map_mult_two
**
**
** @param {Integer[]} param_1
** @return {integer[]}

**
*/


function my_map_mult_two(param_1) {
    var i = 0;
    while(param_1[i] != undefined){
        param_1[i] = param_1[i]*2;
        i++;
    };
    return param_1;
};