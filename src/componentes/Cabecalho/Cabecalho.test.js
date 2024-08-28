import { render, screen } from '@testing-library/react';
import Cabecalho from './index';

test('Deve renderizar o nome de usuário logado', () => {
  render(<Cabecalho />);
  const nomeUsuario = screen.getByText('Joana Fonseca Gomes');
  expect(nomeUsuario).toBeInTheDocument();
});
