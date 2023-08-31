import styles from './Pagination.module.css'

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            onPageChange(newPage);
        }
    };

    const generatePagesArray = (from: number, to: number) => {
        const pagesArray = [];
        for (let i = from; i <= to; i++) {
            pagesArray.push(i);
        }
        return pagesArray;
    };

    const renderPageNumbers = () => {
        const minPageToShow = Math.max(1, currentPage - 2);
        const maxPageToShow = Math.min(totalPages, currentPage + 2);

        const pagesArray = generatePagesArray(minPageToShow, maxPageToShow);

        const pageNumbers = pagesArray.map((pageNumber) => (
            <li
                key={pageNumber}
                className={currentPage === pageNumber ? styles.linkActive : styles.link}
                onClick={() => handlePageChange(pageNumber)}
                
            >
                {pageNumber}
            </li>
        ));

        if (minPageToShow > 1) {
            pageNumbers.unshift(
                <>
                    <li onClick={() => handlePageChange(1)} className={styles.link}>1</li>
                    <li
                        key="ellipsis-start"
                        className="ellipsis"
                    >
                        ...
                    </li>
                </>
            );
        }

        if (maxPageToShow < totalPages) {
            pageNumbers.push(
                <>
                <li
                    key="ellipsis-end"
                    className="ellipsis"
                >
                    ...
                </li>
                <li onClick={() => handlePageChange(totalPages)} className={styles.link}>{totalPages}</li>
                </>
            );
        }

        return pageNumbers;
    };

    return (
        <div className={styles.pagination}>
            <ul>{renderPageNumbers()}</ul>
        </div>
    );
}

export default Pagination;
