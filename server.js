const express = require("express");
const app = express();
const joi = require("joi");
app.use(express.json());

const schema = joi.object({
    name: joi.string().min(6).max(60).required(),
    age: joi.number().min(1).max(20).required(),
    email: joi.string().email().required(),
});

app.post("/",(req,res)=>{
    const body = req.body;
    //const response = schema.validate(body);
    const {error, value} = schema.validate(body);
    if (error) return res.status(400).send({ error: error.details[0].message });
    console.log(error,value);
    //console.log(value)
    res.send({ msg: "Successfully Registered"});
 
});
app.listen(4000, () => console.log("server is running"));