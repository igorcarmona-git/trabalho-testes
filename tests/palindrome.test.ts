import { describe, expect, test } from '@jest/globals';
import { isPalindrome } from '../code1';

describe('isPalindrome', () => {
  // Testes com palíndromos comuns
  test('deve retornar true para palavras palíndromas simples', () => {
    expect(isPalindrome('ovo')).toBe(true);
    expect(isPalindrome('arara')).toBe(true);
    expect(isPalindrome('radar')).toBe(true);
    expect(isPalindrome('level')).toBe(true);
  });

  // Testes com palavras não palíndromas
  test('deve retornar false para palavras que não são palíndromas', () => {
    expect(isPalindrome('araraa')).toBe(false);
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('palindrome')).toBe(false);
    expect(isPalindrome('jest')).toBe(false);
  });

  // Testes com strings vazias
  test('deve retornar true para uma string vazia', () => {
    expect(isPalindrome('')).toBe(true);
  });

  // Testes com strings de um único caractere
  test('deve retornar true para strings de um único caractere', () => {
    expect(isPalindrome('a')).toBe(true);
    expect(isPalindrome('z')).toBe(true);
  });

  // Testes com mistura de letras maiúsculas e minúsculas
  test('deve retornar true para palíndromos com mistura de maiúsculas e minúsculas', () => {
    expect(isPalindrome('RaceCar'.toLowerCase())).toBe(true);
    expect(isPalindrome('Madam'.toLowerCase())).toBe(true);
  });

  // Testes com espaços e pontuação
  test('deve considerar espaços e pontuação ao verificar se é palíndromo', () => {
    expect(isPalindrome('A man a plan a canal Panama'.replace(/\s/g, '').toLowerCase())).toBe(true);
    expect(isPalindrome('No lemon, no melon'.replace(/[\s,]/g, '').toLowerCase())).toBe(true);
    expect(isPalindrome('Was it a car or a cat I saw'.replace(/[\s?]/g, '').toLowerCase())).toBe(true);
  });

  // Testes com números
  test('deve retornar true para números palíndromos representados como strings', () => {
    expect(isPalindrome('121')).toBe(true);
    expect(isPalindrome('12321')).toBe(true);
  });

  // Testes com strings que são quase palíndromos
  test('deve retornar false para strings que são quase palíndromos', () => {
    expect(isPalindrome('abccba')).toBe(true);
    expect(isPalindrome('abcba')).toBe(true);
    expect(isPalindrome('abccbaa')).toBe(false);
  });
});
