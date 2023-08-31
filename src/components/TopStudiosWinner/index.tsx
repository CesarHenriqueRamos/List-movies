import { useEffect, useState } from 'react';
import styles from './TopStudiosWinner.module.css';
import { api } from '../../service/api';

interface TopProps{
    name:string;
    winCount:number;
}
export function TopStudiosWinner(){
    const [studios, setStudios] = useState([]);

  useEffect(() => {

    api.get('/movies?projection=studios-with-win-count')
      .then(response => {
        const sortedStudios = response.data.studios.sort((a:TopProps, b:TopProps)  => b.winCount - a.winCount);
        const topThreeStudios = sortedStudios.slice(0, 3);
        setStudios(topThreeStudios);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
    return(
        <div className={styles.container}>
            <h2>Top 3 Studios With Win Count</h2>
        <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Win Count</th>                        
                    </tr>
                </thead>
                <tbody>
                {studios.map((top:TopProps)=>(
                        <tr key={top.name}>
                            <td>{top.name}</td>
                            <td>{top.winCount}</td>                       
                        </tr>
                    ))}                
                </tbody>
            </table>
            </div>
    )
}