import Joi from "joi";


const editProfileAuthen  = Joi.object({
    firstname : Joi.string()
                .required()
                .messages({
                    "string.empty" : "please enter your 'Firstname'"
    }),
    lastname : Joi.string()
                .required()
                .messages({
                    "string.empty" : "please enter your 'Lastname'"
    }),
    phonenumber : Joi.string()
                .required()
                .pattern(/^[0-9]{10}$/)
                .messages({
                    "string.empty" : "please enter your 'Phone number'",
                    "string.pattern.base" : "Phone number must be 10 numbers"
    }),
    address : Joi.string()
                .required()
                .messages({
                    "string.empty" : "please enter your 'Address'"
    }),

    email: Joi.string()
                .email({tlds : false})  
                .required()
                .messages({
                    "string.empty": "please enter your 'Email'",
                    "string.email": "Email should contain '@'"
    }),
   
});

const validateEditProfile = (input) => {

  const { error } = editProfileAuthen.validate(input, {
    abortEarly: false
  });

  if (error) {
    const formatError = error.details.reduce((prev, cur) => {

      prev[cur.path[0]] = cur.message;
      return prev;
    }, {});

    return formatError;
  }
}

export default validateEditProfile;

