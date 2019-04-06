export const updateObject = (oldObject,updatedproperties)=>{
    return {
        ...oldObject,
        ...updatedproperties
    }
}

export const checkValidity = (value, rules)=>{


    let isValid = true
    if(!rules){
        return true
    }
    if(rules.required){
        isValid = value.trim() !=="" && isValid
    }
    if(rules.minLength){
        isValid = value.length >= rules.minLength && isValid
    }
    if(rules.maxLength){
        isValid = value.length <= rules.maxLength && isValid
    }

    return isValid

}


export const makeOptions = function(items,value,field){
    const menu = [];
    for(let item of items){
        menu.push( {value:item[value], displayValue:item[field]} );
    }

    return menu;
}


export const formSelectOptions = function(state,
                                    form,
                                     input,
                                      data,options='options',
                                      elementConfig='elementConfig'){

    const  updatedOption = updateObject(state[form][input].elementConfig,{[options]:data})
           // console.log('updatedOptions=', updatedOption)

        const updateConfig = updateObject(state[form][input],{[elementConfig]:updatedOption})
            // console.log('updateConfig=', updateConfig)

        const formUpdated = updateObject(state[form],{[input]:updateConfig})
        
        return formUpdated
}


