import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import { api } from '../../service/api';
import {  ListMultipleWinner } from '.';

// Mock da api
jest.mock('../../service/api', () => ({
    api: {
      get: jest.fn(),
    },
  }));
  
  describe('ListMultipleWinner', () => {
    it('should fetch and display years with multiple winners', async () => {
        const mockResponse = {
            years: [
              {
                year: 2020,
                winnerCount: 3,
              },
            ],
          };
  
    // Cria um spy para a função api.get
    const getSpy = jest.spyOn(api, 'get');

    // Define a implementação fictícia para o spy
    getSpy.mockResolvedValue({ data: mockResponse });
  
      render(<ListMultipleWinner />);
  
  
      // Aguardando a resolução da chamada da API
      await waitFor(() => {
        expect(api.get).toHaveBeenCalledWith('/movies?projection=years-with-multiple-winners');
      });
       
        expect(screen.getByText(2020)).toBeInTheDocument();
      
    });
  });