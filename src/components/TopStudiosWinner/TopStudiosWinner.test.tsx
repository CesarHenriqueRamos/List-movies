import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import { api } from '../../service/api';
import { TopStudiosWinner } from '.';



// Mock da api
jest.mock('../../service/api', () => ({
    api: {
      get: jest.fn(),
    },
  }));
  
  describe('ProducersWithLongestAndShortest', () => {
    it('should fetch and display data for producers with longest and shortest interval between wins', async () => {
      const mockResponse = {
        studios: [
          {
            name: 'Studio A',
            winCount: 10,
          },
        ],
      };
  
    // Cria um spy para a função api.get
    const getSpy = jest.spyOn(api, 'get');

    // Define a implementação fictícia para o spy
    getSpy.mockResolvedValue({ data: mockResponse });
  
      render(<TopStudiosWinner />);
  
  
      // Aguardando a resolução da chamada da API
      await waitFor(() => {
        expect(api.get).toHaveBeenCalledWith('/movies?projection=studios-with-win-count');
      });
       
        expect(screen.getByText(10)).toBeInTheDocument();
        expect(screen.getByText('Studio A')).toBeInTheDocument();
      
    });
  });