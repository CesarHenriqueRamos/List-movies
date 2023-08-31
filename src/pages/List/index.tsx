import { useEffect, useState } from 'react'
import styles from './List.module.css'
import { api } from '../../service/api';
import Pagination from '../../components/Pagination';


interface PageProps {
    pageInitial: number,
    totalPage: number;
}
interface ContentProps {
    id: string;
    year: string;
    title: string;
    winner: boolean;
}

export function List() {
    const [winner, setWinner] = useState('');
    const [year, setYear] = useState('');
    const [content, setContent] = useState<ContentProps[]>([]);
    const [page, setPage] = useState<PageProps>({} as PageProps);
    const [changePage, setChangePage] = useState(1)

    useEffect(() => {
         getData();
    }, [winner, year,changePage])

    async function getData() {
        const response = await api.get(`/movies?page=${changePage}&size=7&winner=${winner}&year=${year}`)
        setContent(response.data.content)
        setPage({
            pageInitial: response.data.number,
            totalPage: response.data.totalPages
        })
        if(response.data.totalPages < changePage){
            setChangePage(1)
        }

    }
    return (
        <div className={styles.container}>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>
                            Year
                            <input placeholder='Filter by year' value={year} onChange={e => setYear(e.target.value)} />
                        </th>
                        <th>Title</th>
                        <th>
                            Winner?
                            <select value={winner} onChange={e => setWinner(e.target.value)}>
                                <option value=""></option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {content?.map((element: ContentProps) => (
                        <tr key={element.id}>
                            <td>{element.id}</td>
                            <td>{element.year}</td>
                            <td>{element.title}</td>
                            <td>{element.winner ? 'yes' : 'no'}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <Pagination
                currentPage={page.pageInitial}
                totalPages={page.totalPage}
                onPageChange={setChangePage}
            />
        </div>
    )
}