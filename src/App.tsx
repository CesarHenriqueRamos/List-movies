import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';
import { List } from './pages/List';

import styles from './App.module.css';

function App() {


  return (
    <BrowserRouter> 
      <Header />
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <nav>
            <NavLink  to="/"  end>Dashboard</NavLink >
            <NavLink  to="/list" >List</NavLink >
          </nav>
        </div>

        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/list' element={<List />} />
        </Routes>

      </div>

     </BrowserRouter>
  )
}

export default App
