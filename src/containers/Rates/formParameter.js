export const items = {
    rateForm:{
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

           
         rate: {
                elementType : 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'New Rate £1 = '
                },
                value:400,
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            bou_rate:{
                elementType : 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Bou Rate'
                },
                value:0 ,
                validation:{
                    required:false
                },
                valid:true,
                touched:false
            },
            sold_rate:{
                elementType : 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Sold rate'
                },
                value:0,
                validation:{
                    required:false
                },
                valid:true,
                touched:false
            },
            
    },
    value:"",
    formIsValid:false,
    loading:false
}