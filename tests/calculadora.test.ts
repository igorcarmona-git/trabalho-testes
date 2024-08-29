import { describe, expect, test } from '@jest/globals';
import { calculadora } from '../code1';

describe('calculadora', () => {
  describe('soma', () => {
    test('1 + 2 = 3', () => {
      expect(calculadora(1, 2, '+')).toBe(3);
    });

    test('0 + 0 = 0', () => {
      expect(calculadora(0, 0, '+')).toBe(0);
    });

    test('-1 + 5 = 4', () => {
      expect(calculadora(-1, 5, '+')).toBe(4);
    });
  });

  describe('subtração', () => {
    test('6 - 2 = 4', () => {
      expect(calculadora(6, 2, '-')).toBe(4);
    });

    test('0 - 0 = 0', () => {
      expect(calculadora(0, 0, '-')).toBe(0);
    });

    test('-5 - 5 = -10', () => {
      expect(calculadora(-5, 5, '-')).toBe(-10);
    });
  });

  describe('multiplicação', () => {
    test('6 * 2 = 12', () => {
      expect(calculadora(6, 2, '*')).toBe(12);
    });

    test('0 * 10 = 0', () => {
      expect(calculadora(0, 10, '*')).toBe(0);
    });

    test('-5 * 3 = -15', () => {
      expect(calculadora(-5, 3, '*')).toBe(-15);
    });
  });

  describe('divisão', () => {
    test('6 / 2 = 3', () => {
      expect(calculadora(6, 2, '/')).toBe(3);
    });

    test('0 / 1 = 0', () => {
      expect(calculadora(0, 1, '/')).toBe(0);
    });

    test('divisão por zero', () => {
      expect(calculadora(1, 0, '/')).toBe(Infinity);
    });

    test('-6 / 2 = -3', () => {
      expect(calculadora(-6, 2, '/')).toBe(-3);
    });
  });

  describe('operações inválidas', () => {
    test('operações não suportadas', () => {
      expect(calculadora(1, 2, '%')).toBe('Operação inválida');
      expect(calculadora(1, 2, '^')).toBe('Operação inválida');
      expect(calculadora(1, 2, '')).toBe('Operação inválida');
    });
  });
});
