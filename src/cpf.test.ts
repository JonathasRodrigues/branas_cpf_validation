import { validate } from "./cpf";

test("Should be valid when valid CPF", () => {
    const isValid = validate('402.454.798-48');
    expect(isValid).toBe(true);
})

test("Should be invalid when invalid CPF", () => {
    const isValid = validate('123.456.798-01');
    expect(isValid).toBe(false);
})

test("Should be invalid when CPF with repeated digits", () => {
    const isValid = validate('111.111.111-11');
    expect(isValid).toBe(false);
})

test("Should be invalid when only blanks", () => {
    const isValid = validate('     ');
    expect(isValid).toBe(false);
})

test("Should be invalid when empty CPF", () => {
    const isValid = validate('');
    expect(isValid).toBe(false);
})

test("Should be valid when valid CPF doesnt contain . and -", () => {
    const isValid = validate('40245479848');
    expect(isValid).toBe(true);
})

test("Should be invalid when CPF contains string", () => {
    const isValid = validate('4154gdfs42154');
    expect(isValid).toBe(false);
})

test("Should be invalid when CPF is only string", () => {
    const isValid = validate('blahblah');
    expect(isValid).toBe(false);
})

test("Should be valid when valid CPF", () => {
    const isValid = validate('402.454.798-48');
    expect(isValid).toBe(true);
})

