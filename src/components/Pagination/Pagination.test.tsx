import { render, fireEvent, screen } from '@testing-library/react';
import Pagination from '.';

describe('Pagination Component', () => {
  it('renders page numbers correctly', () => {
    render(<Pagination currentPage={3} totalPages={10} onPageChange={() => {}} />);

    const pageNumbers = screen.getAllByRole('listitem');
    expect(pageNumbers.length).toBe(7); // 3 page numbers + 2 ellipsis + 2 additional page numbers

    // Assert the page numbers are rendered correctly
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();

    // Simulate clicking on a page number
    fireEvent.click(screen.getByText('4'));
  });
});
