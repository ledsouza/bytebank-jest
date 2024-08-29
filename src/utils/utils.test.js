import { calculaNovoSaldo } from './index';

describe('Quando eu realizo uma transação', () => {
  test('Que é um depósito, o saldo deve aumentar', () => {
    const transacao = {
      transacao: 'Depósito',
      valor: 50,
    };

    const novoSaldo = calculaNovoSaldo(transacao, 100);

    expect(novoSaldo).toBe(150);
  });

  test('Que é uma Transferência, o saldo deve ddiminuir', () => {
    const transacao = {
      transacao: 'Tranferência',
      valor: 50,
    };

    const novoSaldo = calculaNovoSaldo(transacao, 100);

    expect(novoSaldo).toBe(50);
  });
});
