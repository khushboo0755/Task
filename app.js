const joi = require("joi")
//const passwordComplexity = require("joi-password-complexity");
const schema = joi.object({
    name: joi.string().min(4).max(12).required(),
    age: joi.number().integer().min(1).max(80).required(),
//password: passwordComplexity().valid("aPassword123!"),
     email: joi.string().email()
})

const data = {
    name: "abdec",
    age: 1,
    //password: "aPassword123!",
    email:"abc@gmail.com"
}
const {error, value} = schema.validate(data)   // to validate
if (error) {
    console.log(error.message);
}else console.log(value);