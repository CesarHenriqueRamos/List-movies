import { useEffect, useState } from 'react';
import styles from './ProducersWithLongestAndShortest.module.css';
import { api } from '../../service/api';

interface getDataProps{
    producer:string;
    interval:number;
    previousWin:number;
    followingWin:number;
}
export function ProducersWithLongestAndShortest() {
    const [min, setMin] = useState<getDataProps>({} as getDataProps)
    const [max, setMax] = useState<getDataProps>({} as getDataProps)
    useEffect(() => {
        getData()
    }, [])
   async function  getData(){
    const response = await  api.get('/movies?projection=max-min-win-interval-for-producers')
    setMax(response.data.max[0])
    setMin(response.data.min[0])
    }
    return (
        <div className={styles.container}>
            <h2>Producers With Longest and Shortest Interval Between Wins</h2>
            <h3>Maximum</h3>
            <table>
                <thead>
                    <tr>
                        <th>Producer</th>
                        <th>Interval</th>
                        <th>Previous Year</th>
                        <th>Following Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{max.producer}</td>
                        <td>{max.interval}</td>
                        <td>{max.previousWin}</td>
                        <td>{max.followingWin}</td>
                    </tr>
                </tbody>
            </table>
            <h3>Minimum</h3>
            <table>
                <thead>
                    <tr>
                        <th>Producer</th>
                        <th>Interval</th>
                        <th>Previous Year</th>
                        <th>Following Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{min.producer}</td>
                        <td>{min.interval}</td>
                        <td>{min.previousWin}</td>
                        <td>{min.followingWin}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}