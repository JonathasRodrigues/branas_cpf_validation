const CPF_LENGTH = 11;

enum enDigitType {
    FIRST = 10,
    SECOND = 11
}

const isEmpty = (cpf: string) => !cpf || cpf === '';
const getCpfWithoutDigit = (cpf: string) => cpf.substring(0, 9);
const removePunctuation = (cpf: string) => cpf.replace(/[.-]/gi, '');
const hasRepeatedDigits = (cpf: string) => cpf === cpf[0].repeat(CPF_LENGTH);
const hasValidLength = (cpf: string) => cpf.length === CPF_LENGTH;

const calculateDigitByType = (cpf: string, digitType: enDigitType) => {
    const digitValue = cpf.split('')
        .map(digit => Number(digit))
        .reduce((acc, digit, index) => acc + (digitType - index) * digit, 0);
    return normalizeDigit(digitValue);
}

const calculateDigits = (cpf: string) => {
    const cpfWithoutDigits = getCpfWithoutDigit(cpf);
    const firstDigit = calculateDigitByType(cpfWithoutDigits, enDigitType.FIRST);
    const cpfWithFirstDigit = `${cpfWithoutDigits}${firstDigit}`;
    const secondDigit = calculateDigitByType(cpfWithFirstDigit, enDigitType.SECOND);
    return `${firstDigit}${secondDigit}`;
}

const normalizeDigit = (digitValue: number) => {
    const remainder = digitValue % CPF_LENGTH;
    return (remainder < 2) ? 0 : CPF_LENGTH - remainder;
}

export const validate = (cpf: string) => {
    const formattedCpf = removePunctuation(cpf);
    if (isEmpty(formattedCpf)) return false;
    if (hasRepeatedDigits(formattedCpf)) return false;
    if (!hasValidLength(formattedCpf)) return false;
    const digits = calculateDigits(formattedCpf);
    return formattedCpf.endsWith(digits);
}
