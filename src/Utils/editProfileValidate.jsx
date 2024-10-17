import Joi from "joi";


const editProfileAuthen = Joi.object({
  id: Joi.number().allow(),

  firstname: Joi.string()
    .required()
    .pattern(/^[a-zA-Zก-๙]+$/)
    .max(20)
    .messages({
      "string.empty": "please enter your 'Firstname'",
      "string.pattern.base": "Firstname can only contain letters (Thai or English)",
      "string.max": "Firstname must not exceed 20 characters"
    }),
  lastname: Joi.string()
    .required()
    .pattern(/^[a-zA-Zก-๙]+$/)
    .max(20)
    .messages({
      "string.empty": "please enter your 'Lastname'",
      "string.pattern.base": "Lastname can only contain letters (Thai or English)",
      "string.max": "Lastname must not exceed 20 characters"
    }),
  phonenumber: Joi.string()
    .required()
    .pattern(/^[0-9]{10}$/)
    .messages({
      "string.empty": "please enter your 'Phone number'",
      "string.pattern.base": "Phone number must be 10 numbers"
    }),
  address: Joi.string()
    .required()
    .messages({
      "string.empty": "please enter your 'Address'"
    }),

  email: Joi.string()
    .email({ tlds: false })
    .required()
    .messages({
      "string.empty": "please enter your 'Email'",
      "string.email": "Email should contain '@'"
    }),

});

const validateEditProfile = (input) => {
  console.log(input, "this is input")
  const { error } = editProfileAuthen.validate(input, {
    abortEarly: false
  });
  console.log(error, "this is error")

  if (error?.details) {
    const formatError = error.details.reduce((prev, cur) => {

      prev[cur.path[0]] = cur.message;
      return prev;
    }, {});

    return formatError;
  }
  return null;
}

export default validateEditProfile;

