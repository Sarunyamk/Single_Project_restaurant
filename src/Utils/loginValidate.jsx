import Joi from "joi"


const loginAuthen = Joi.object({

    email: Joi.string()
        .email({ tlds: false })
        .required()
        .messages({
            "string.empty": "please enter your 'Email'",
            "string.email": "Email should contain '@'"
        }),

    password: Joi.string()
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=\-{}[\]:;"'<>,.?/\\|`~]).{6,}$/)
        .required()
        .messages({
            "string.empty": "please enter your 'Password'",
            "string.pattern.base": "Password is invalid"
        }),



})

const validateLogin = (input) => {

    const { error } = loginAuthen.validate(input, {
        abortEarly: false
    })


    if (error) {
        const formatError = error.details.reduce((prev, cur) => {


            prev[cur.path[0]] = cur.message
            return prev
        }, {})

        return formatError
    }
}

export default validateLogin
