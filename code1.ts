const calculadora = (n1: number, n2: number, operacao: string): number | string => {
    const operacoes: { [key: string]: number } = {
        '+': n1 + n2,
        '-': n1 - n2,
        '*': n1 * n2,
        '/': n1 / n2,
    };
    return operacoes[operacao] ?? 'Operação inválida';
};

const isPalindrome = (str: string): boolean => {
    return str === str.split('').reverse().join('');
}

export { calculadora, isPalindrome };