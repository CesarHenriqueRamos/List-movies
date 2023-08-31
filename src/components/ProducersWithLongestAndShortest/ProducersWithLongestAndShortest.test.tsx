// import { render, waitFor, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/jest-globals';
// import { api } from '../../service/api';
// import { ProducersWithLongestAndShortest } from '.';


// // Mock da api
// jest.mock('../../service/api', () => ({
//     api: {
//       get: jest.fn(),
//     },
//   }));
  
//   describe('ProducersWithLongestAndShortest', () => {
//     it('should fetch and display data for producers with longest and shortest interval between wins', async () => {
//         const mockResponse = {
//             "min": [
//                 {
//                     "producer": "Joel Silver",
//                     "interval": 1,
//                     "previousWin": 1990,
//                     "followingWin": 1991
//                 }
//             ],
//             "max": [
//                 {
//                     "producer": "Matthew Vaughn",
//                     "interval": 13,
//                     "previousWin": 2002,
//                     "followingWin": 2015
//                 }
//             ]
//         }
  
//     // Cria um spy para a função api.get
//     const getSpy = jest.spyOn(api, 'get');

//     // Define a implementação fictícia para o spy
//     getSpy.mockResolvedValue({ data: mockResponse });
  
//       render(<ProducersWithLongestAndShortest />);
  
  
//       // Aguardando a resolução da chamada da API
//       await waitFor(() => {
//         expect(api.get).toHaveBeenCalledWith('/movies?projection=max-min-win-interval-for-producers');
//       });
       
//         expect(screen.getByText(1990)).toBeInTheDocument();
      
//     });
//   });