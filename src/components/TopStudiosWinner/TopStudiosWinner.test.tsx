import { render, screen, waitFor } from '@testing-library/react';
import { TopStudiosWinner } from '.';

// Mock a função da API para simular uma resposta
jest.mock('../../service/api', () => ({
  api: {
    get: jest.fn(() =>
      Promise.resolve({
        data: {
          studios: [
            { name: 'Studio A', winCount: 10 },
            { name: 'Studio B', winCount: 8 },
            { name: 'Studio C', winCount: 5 },
          ],
        },
      })
    ),
  },
}));

describe('TopStudiosWinner Component', () => {
  it('renders top studios with win count', async () => {
    render(<TopStudiosWinner />);

    // Aguarde a resolução da chamada de API antes de realizar as verificações
    await waitFor(() => {
      expect(screen.getByText('Studio A')).toBeInTheDocument();
      expect(screen.getByText('Studio B')).toBeInTheDocument();
      expect(screen.getByText('Studio C')).toBeInTheDocument();
    });

    // Verifique se os elementos foram renderizados corretamente
    expect(screen.getByText('Top 3 Studios With Win Count')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('8')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });
});
