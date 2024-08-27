import NumberOption from "./interface/NumberOption";
import StringOption from "./interface/StringOption";

/**
 * * You can use this package for Javascript, Typescript, Coffescript
 * * Note i writed in indonesian language is message for me
 * ? What is function? Use to parameter on method isString validation
 */

export class Validator {
    value: any
    errors: Array<string>

    constructor(value: any) {
        this.value = value;
        this.errors = []
    }

    public isString(options: StringOption): Validator {
        if (typeof this.value !== "string") this.errors.push("Value must be string")
        if (typeof options?.maxLength !== "undefined" && this.value.length > options.maxLength) this.errors.push(`Max length is ${options.maxLength}`)
        if (typeof options?.minLength !== "undefined" && this.value.length < options.minLength) this.errors.push(`Max length is ${options.minLength}`)
        return this
    }
    public isNumber(options: NumberOption): Validator {
        if (typeof this.value !== "number") this.errors.push("Value must be number")
        if (typeof options?.max !== "undefined" && this.value > options.max) this.errors.push(`Max range is ${options.max}`)
        if (typeof options?.min !== "undefined" && this.value < options.min) this.errors.push(`Min length is ${options.min}`)
        return this
    }
    public toNumber(): Validator {
        this.value = parseInt(this.value)
        return this
    }
}

export class Check {
    errors: Array<string>
    constructor(validations: Array<Validator>) {
        this.errors = []
        validations.forEach((data) => {
            this.errors = [...this.errors, ...data.errors]
        })

    }
}