export const menu = function(items,value,field){
    const menu = [];
    for(let item of items){
        menu.push( {values:item[value], displayValue:item[field]} );
    }

    return menu;
}