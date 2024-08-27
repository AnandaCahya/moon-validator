const { Validator, Check } = require("moon-validator")
var nama = "Andi"
var umur = 23

var validate = [new Validator(nama).isString({maxLength: 3, minLength: 1}), new Validator(umur).isNumber({max: 20})]
var error = new Check(validate)