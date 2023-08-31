import { ListMovieWinnerByYear } from '../../components/ListMovieWinnerByYear'
import { ListMultipleWinner } from '../../components/ListMultipleWinner'
import { ProducersWithLongestAndShortest } from '../../components/ProducersWithLongestAndShortest'
import { TopStudiosWinner } from '../../components/TopStudiosWinner'
import styles from './Dashboard.module.css'

export function Dashboard(){
    return(
        <div className={styles.container}>
            <div className={styles.containerTable}>
                <ListMultipleWinner />
                <TopStudiosWinner />
            </div>
            <div className={styles.containerTable}>
                <ProducersWithLongestAndShortest />
                <ListMovieWinnerByYear />
            </div>
        </div>
    )
}