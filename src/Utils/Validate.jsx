import Joi from "joi"


const registerAuthen = Joi.object({

    firstname : Joi.string()
                .required()
                .messages({
                     "string.empty" : "Firstname is required"
                }),
    lastname : Joi.string()
                .required()
                .messages({
                    "string.empty" : "Lastname is required"
                }),
    phonenumber : Joi.string()
                .required()
                .pattern(/^[0-9]{10}$/)
                .messages({
                    "string.empty" : "Phonenumber is required"
                }),
    address : Joi.string()
                .required()
                .messages({
                    "string.empty" : "Address is required"
                }),
    
    email: Joi.string()
                .email({tlds : false})  
                .required()
                .messages({
                    "string.empty": "Email is required",
                    "string.email": "Email must be a valid email address"
                 }),
        
    password: Joi.string()
                .pattern((/^[a-zA-Z0-9]{6,}$/))
                .required()
                .messages({
                    "string.empty": "Password is required",
                    "string.pattern.base": "Password must contain a-z A-Z 0-9 and at least 6 characters"
                }),
    confirmPassword: Joi.string()
                .required()
                .valid(Joi.ref("password"))
                .messages({
                    "string.empty": "Confirm password is required",
                    "any.only": "Password does not match",
                }),
              
                
})

const loginAuthen = Joi.object({

    
    email: Joi.string()
            .email({tlds : false})  
            .required()
            .messages({
                "string.empty": "Email is required",
                "string.email": "Email must be a valid email address"
             }),
    password: Joi.string()
            .pattern((/^[a-zA-Z0-9]{6,}$/))
            .required()
            .messages({
                "string.empty": "Password is required",
                "string.pattern.base": "Password must contain a-z A-Z 0-9 and at least 6 characters"
            }),
})

const validateRegister = (input)=>{

    const {error} = registerAuthen.validate(input,{
        abortEarly: false
    })
   
   
    if(error){
        const formatError = error.details.reduce((prev,cur)=>{
            

            prev[cur.path[0]] = cur.message
            return prev
        },{})

        return formatError
    }  
    
}

export default validateRegister
