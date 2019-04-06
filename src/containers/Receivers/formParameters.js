export const items = {
    receiverForm:{
        sender_id:{
            elementType : 'select',
            elementConfig:{
                placeholder:'Please select a sender',
                options:[]  
            },
            validation:{},
            value:'Mr',
            valid:true
        },
           
            fname: {
                elementType : 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your First Name'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            
            lname: {
                elementType : 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Last Name'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            
            phone: {
                elementType : 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Phone'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            
            transfer_type: {
                elementType : 'select',
                elementConfig:{
                    placeholder:'Transfer Type',
                    options:[
                        {values:'Bank Account', displayValue:'Bank Account'},
                        {values:'Pick Up', displayValue:'Pick Up'}]
                      
                },
                validation:{},
                value:'Mr',
                valid:true
            },
            bank: {
                elementType : 'select',
                elementConfig:{
                    placeholder:'Please Select Bank',
                    options:  []
                },
                validation:{},
                value:'Choose Bank',
                valid:true
            },
            account_number:{
                elementType : 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Account No',
                    id:'account'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            identity_type: {
                elementType : 'select',
                elementConfig:{
                    placeholder:'What identity Are You Using',
                    options:[
                        {values:'National Id ', displayValue:'National Id '},
                        {values:"Intl Passport", displayValue:"Intl Passport"},
                        {values:"Driving License", displayValue:"Driving License"}]
                      
                },
                validation:{},
                value:'Choose Bank',
                valid:true
            },
         
           
          
    },
    formIsValid:false,
    loading:false
}