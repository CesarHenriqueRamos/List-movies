import { useEffect, useState } from 'react';
import styles from './ListMultipleWinner.module.css';
import { api } from '../../service/api';

interface MutipleProps{
    year:number;
    winnerCount:number
}
export function ListMultipleWinner(){
    const [data, setData] = useState<MutipleProps[]>([])
    useEffect(()=>{
        api.get('/movies?projection=years-with-multiple-winners').then(
            response => setData(response.data.years)
        )
    },[])
    return(
        <div className={styles.container}>
            <h2>List Years With Multiple Winners</h2>
        <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Win Count</th>                        
                    </tr>
                </thead>
                <tbody>
                    {data.map((multiple:MutipleProps)=>(
                        <tr key={multiple.year}>
                            <td>{multiple.year}</td>
                            <td>{multiple.winnerCount}</td>                       
                        </tr>
                    ))}                   
                </tbody>
            </table>
            </div>
    )
}