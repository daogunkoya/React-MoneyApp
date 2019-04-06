export const items = {
    currencyForm:{
           
        destination: {
                elementType : 'select',
                elementConfig:{
                    options:[],
                    placeholder:'Destination'
                },
                value:"",
               
                valid:true,
                touched:true
            },
            income_category:{
                elementType : 'select',
                elementConfig:{
                    options:[{value:'commission',displayValue:'commission'},
                    {value:'income',displayValue:'income'}],
                    placeholder:'Income Category'
                },
                value:"",
               
                valid:true,
                touched:true
            },
            
            
    },
    formIsValid:false,
    loading:false
}