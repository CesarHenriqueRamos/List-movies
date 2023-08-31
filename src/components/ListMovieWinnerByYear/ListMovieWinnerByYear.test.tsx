import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import { api } from '../../service/api';
import { ListMovieWinnerByYear } from '.';

// Mock da api
jest.mock('../../service/api', () => ({
    api: {
      get: jest.fn(),
    },
  }));
  
  describe('ListMovieWinnerByYear', () => {
    it('should fetch and display movie winners when search button is clicked', async () => {
      const mockResponse = [
        {
          id: 1,
          year: 2023,
          title: 'Example Movie',
        },
      ];
  
    // Cria um spy para a função api.get
    const getSpy = jest.spyOn(api, 'get');

    // Define a implementação fictícia para o spy
    getSpy.mockResolvedValue({ data: mockResponse });
  
      render(<ListMovieWinnerByYear />);
  
      // Simulando a entrada do ano e clique no botão de pesquisa
      const yearInput = screen.getByRole('spinbutton');
      const searchButton = screen.getByRole('button');
      fireEvent.change(yearInput, { target: { value: '2023' } });
      fireEvent.click(searchButton);
  
      // Aguardando a resolução da chamada da API
      await waitFor(() => {
        expect(api.get).toHaveBeenCalledWith('/movies?winner=true&year=2023');
      });
  
      // Verificando se os dados fictícios foram exibidos corretamente
      mockResponse.forEach(movie => {
        expect(screen.getByText(movie.title)).toBeInTheDocument();
      });
    });
  });