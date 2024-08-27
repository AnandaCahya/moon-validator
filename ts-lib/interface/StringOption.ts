export default interface StringOption {
    maxLength: Partial<number | undefined>, //maxLength itu type datanya number to nggak ya undefined
    minLength: Partial<number | undefined> //minLength itu sama kayak diatas
}
/**
 * ? Partial itu ngasih tanda kalau itu opsional
 */