export const items = {
    commissionForm:{
        user_id: {
            elementType : 'select',
            elementConfig:{
                options:[],
                placeholder:'Existing users'
            },
            value:1,
            validation:{},
            valid:true
        },
        currency_id: {
            elementType : 'select',
            elementConfig:{
                options:[],
                placeholder:'currency codes'
            },
            value:1,
            validation:{},
            valid:true
        },
           
            start_from: {
                elementType : 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Amount From '
                },
                value:"",
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            end_at:{
                elementType : 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Amount To'
                },
                value:"",
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            value:{
                elementType : 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Commission Value'
                },
                value:"",
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            agent_quota:{
                elementType : 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'% To Agent'
                },
                value:"",
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            
    },
    formIsValid:false,
    loading:false
}