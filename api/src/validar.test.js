const test = require('node:test');
const assert = require('node:assert');
const { validarDespesa } = require('./validar');

test('aceita despesa válida', () => {
  const d = { descricao: 'Mercado', valor: 150, categoria: 'Alimentação', data: '2026-11-05' };
  assert.strictEqual(validarDespesa(d), null);
});

test('rejeita valor negativo', () => {
  const d = { descricao: 'X', valor: -5, categoria: 'Y', data: '2026-11-05' };
  assert.notStrictEqual(validarDespesa(d), null);
});