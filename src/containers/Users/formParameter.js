export const items = {
    userForm:{
        currencies:{
            elementType : 'select',
            elementConfig:{
                options:[]
            },
            validation:{},
            value:'',
            valid:true
        },
        title:{
            elementType : 'select',
            elementConfig:{
                options:[
                    {values:'Mr', displayValue:'Mr'},
                    {values:'Mrs', displayValue:'Mrs'}]
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
            
            dob: {
                elementType : 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Date  Of Birth'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            email:{
                elementType : 'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Your Email'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            postcode:{
                elementType : 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Post Code / Address',
                    id:'address'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            address:{
                elementType : 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Address'
                },
                value:'',
                validation:{
                    required:true,
                    minLength:5
                },
                valid:false,
                touched:false
            },
         
           
          
    },
    formIsValid:false,
    loading:false
}