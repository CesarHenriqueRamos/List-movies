import {  useState } from 'react';
import { api } from '../../service/api';
import styles from './ListMovieWinnerByYear.module.css';
import {AiOutlineSearch} from 'react-icons/ai';

interface MutipleProps{
    id:number;
    year:number;
    title:string;
}
export function ListMovieWinnerByYear(){
    const [year, setYear] = useState(0);
    const [data, setData] = useState<MutipleProps[]>([])
    
    function search(){
        api.get(`/movies?winner=true&year=${year}`).then(
            response => setData(response.data)
        )
    }
        
    
    return(
        <div className={styles.container}>
            <h2>List Movie Winner by Year</h2>
            <div className={styles.search} >
                <input type="number" onChange={e=>setYear(Number(e.target.value))}  />
                <button onClick={search}><AiOutlineSearch size={20} /></button>
            </div>
        <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Year</th>
                        <th>Title</th>                        
                    </tr>
                </thead>
                <tbody>
                    {data.map((multiple:MutipleProps)=>(
                        <tr key={multiple.id}>
                            <td>{multiple.id}</td>
                            <td>{multiple.year}</td>
                            <td>{multiple.title}</td>                       
                        </tr>
                    ))}                   
                </tbody>
            </table>
            </div>
    )
}