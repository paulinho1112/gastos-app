function validarDespesa(d) {
  if (!d || !d.descricao) return 'descricao é obrigatória';
  if (typeof d.valor !== 'number' || d.valor <= 0) return 'valor deve ser um número maior que zero';
  if (!d.categoria) return 'categoria é obrigatória';
  if (!d.data) return 'data é obrigatória';
  return null;
}

module.exports = { validarDespesa };