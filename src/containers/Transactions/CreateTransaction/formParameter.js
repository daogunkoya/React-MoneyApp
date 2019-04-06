export const items = {
    transactionForm:{
           
            sender: {
                elementType : 'select',
                elementConfig:{
                    type:'text',
                    label:'Senders',
                    options:[]
                },
                value:"",
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            receivers: {
                elementType : 'select',
                elementConfig:{
                    type:'text',
                    label:'Receivers',
                    options:[]
                },
                value:"",
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            amount:{
                elementType : 'input',
                elementConfig:{
                    type:'text',
                    label:'Amount To Send   £'
                },
                value:"",
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            local:{
                elementType : 'input',
                elementConfig:{
                    type:'text',
                    label:`Amount to Send ₦`
                },
                value:"",
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            commission:{
                elementType : 'input',
                elementConfig:{
                    type:'text',
                    label:`Commission`,
                    readOnly:'readOnly'
                },
                value:"",
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            total:{
                elementType : 'input',
                elementConfig:{
                    type:'text',
                    label:`Total`,
                    readOnly:'readOnly'
                },
                value:"",
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            exchange_rate:{
                elementType : 'input',
                elementConfig:{
                    type:'text',
                    label:`Exchange Rate`,
                    readOnly:'readOnly'
                },
                value:"",
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            
    },
    receiverForm:{
           

        fname:{
            elementType : 'input',
            elementConfig:{
                type:'text',
                label:'First Name'
            },
            value:"",
            validation:{
                required:true
            },
            valid:false,
            touched:false
        },
        lname:{
            elementType : 'input',
            elementConfig:{
                type:'text',
                label:`Last Name`
            },
            value:"",
            validation:{
                required:true
            },
            valid:false,
            touched:false
        },
        phone:{
            elementType : 'input',
            elementConfig:{
                type:'text',
                label:`Phone`,
                readOnly:'readOnly'
            },
            value:"",
            validation:{
                required:true
            },
            valid:false,
            touched:false
        },
        transfer_type:{
            elementType : 'input',
            elementConfig:{
                type:'text',
                label:`Transfer Type`,
                readOnly:'readOnly'
            },
            value:"",
            validation:{
                required:true
            },
            valid:false,
            touched:false
        },
        bank:{
            elementType : 'input',
            elementConfig:{
                type:'text',
                label:`Bank`,
                readOnly:'readOnly'
            },
            value:"",
            validation:{
                required:true
            },
            valid:false,
            touched:false
        },
        account_number:{
            elementType : 'input',
            elementConfig:{
                type:'text',
                label:`Account Number`,
                readOnly:'readOnly'
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