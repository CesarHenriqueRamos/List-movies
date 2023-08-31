import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import { api } from '../../service/api';
import { ProducersWithLongestAndShortest } from '.';


// Mock da api
jest.mock('../../service/api', () => ({
    api: {
      get: jest.fn(),
    },
  }));
  
  describe('ProducersWithLongestAndShortest', () => {
    it('should fetch and display data from API', async () => {
      const mockResponse = {
        min: [
          {
            producer: 'Joel Silver',
            interval: 1,
            previousWin: 1990,
            followingWin: 1991,
          },
        ],
        max: [
          {
            producer: 'Matthew Vaughn',
            interval: 13,
            previousWin: 2002,
            followingWin: 2015,
          },
        ],
      };
  
      // Define a implementação fictícia para a chamada à API
      api.get.mockImplementation(() => Promise.resolve({ data: mockResponse }));
  
      render(<ProducersWithLongestAndShortest />);
  
      // Aguarda a resolução da chamada da API e a atualização do estado
      await waitFor(() => {
        expect(api.get).toHaveBeenCalledWith('/movies?projection=max-min-win-interval-for-producers');
        expect(screen.getByText(mockResponse.min[0].producer)).toBeInTheDocument();
        expect(screen.getByText(mockResponse.min[0].interval.toString())).toBeInTheDocument();
        expect(screen.getByText(mockResponse.min[0].previousWin.toString())).toBeInTheDocument();
        expect(screen.getByText(mockResponse.min[0].followingWin.toString())).toBeInTheDocument();
  
        expect(screen.getByText(mockResponse.max[0].producer)).toBeInTheDocument();
        expect(screen.getByText(mockResponse.max[0].interval.toString())).toBeInTheDocument();
        expect(screen.getByText(mockResponse.max[0].previousWin.toString())).toBeInTheDocument();
        expect(screen.getByText(mockResponse.max[0].followingWin.toString())).toBeInTheDocument();
      });
    });
  });