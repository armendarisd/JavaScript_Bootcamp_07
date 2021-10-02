/*
**
** QWASAR.IO -- my_count_on_it
**
**
** @param {String[]} param_1
** @return {integer[]}

**
*/


function my_count_on_it(param_1) {
    var i = 0;
    var newArray = [];
    while(param_1[i]!=undefined){
        newArray[i] = param_1[i].length;
        i++;
    };
    return newArray;
   
};

