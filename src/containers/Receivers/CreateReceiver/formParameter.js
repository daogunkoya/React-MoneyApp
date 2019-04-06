export const parameter =  {
    senderForm:{
        senders:{
            elementType : 'select',
            elementConfig:{
                options:[{values:'', displayValue:'Please select a sender'}].concat(
                    this.props.senders.map((option,i)=>(
                        {values:option.id, displayValue:option.name.toUpperCase()}
                    )))   
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
                    options:[
                        {values:'Bank Accouny', displayValue:'Bank Account'},
                        {values:'Pick Up', displayValue:'Pick Up'}]
                      
                },
                validation:{},
                value:'Mr',
                valid:true
            },
            bank: {
                elementType : 'select',
                elementConfig:{
                options: [{values:'', displayValue:'Please Select Bank'}]
                            .concat( this.props.banks.map((bank,i)=>(
                             {values:bank.id, displayValue:bank.name.toUpperCase()} )) )
                       
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
            identity: {
                elementType : 'select',
                elementConfig:{
                    options:[
                        {values:'National Id ', displayValue:'National Id '},
                        {values:"Intl Passport", displayValue:"Intl Passport"}]
                      
                },
                validation:{},
                value:'Choose Bank',
                valid:true
            },
         
           
          
    },
    formIsValid:false,
    loading:false
}

