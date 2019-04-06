export const items = {
    bankForm:{
       
        user_id: {
            elementType : 'select',
            elementConfig:{
                options:[]
            },
            value:1,
            validation:{},
            valid:true
        },

        currency_id: {
            elementType : 'select',
            elementConfig:{
                options:[
                    {values:1, displayValue:'UK-NG'},
                    {values:2, displayValue:'UK-GH'}]
            },
            validation:{},
            value:1,
            valid:true
        },
            name: {
                elementType : 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Enter New Bank'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            }, 
            status: {
                elementType : 'select',
                elementConfig:{
                    options:[
                        {values:'Bank', displayValue:'Bank'},
                        {values:'Pick Up', displayValue:'Pick Up'}]
                },
                validation:{},
                value:1,
                valid:true
            }, 
    },
    formIsValid:false,
    loading:false
}

