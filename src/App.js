import styles from './css/main.module.css'
import MainMenu from './components/MainMenu'
import LoginForm from './components/LoginForm'
import CurrencyList from './components/CurrencyList'
import { useSelector } from 'react-redux'
import UserPanel from './components/UserPanel'
import { useState } from 'react'

function App() {
  const authUser = useSelector(store => store.auth)
  const [currentList, setCurrentList] = useState('A')
  const [tables, setTables] = useState([
    {name: 'A', isActive: true},
    {name: 'B', isActive: false}
  ])
  const listSelected = (e, list, index) => {
    e.preventDefault();
    setTables(prevState => {
      const newState = prevState.map(item => ({name: item.name, isActive: false}))
      newState[index] = {name: list.name, isActive: !list.isActive}
      return newState
    })
    setCurrentList(list.name)
  }
  return (
    <div className={ styles.background }>
      <MainMenu />
      {authUser.isLogin ? <UserPanel authUser={authUser} /> : <LoginForm />}
      <div className={styles.tableSelect}>
        {tables.map((table, index) => (
          <a href={`/list-${table.name}`} 
            key={index}
            onClick={(e) => listSelected(e, table, index)}
            name={table.name}
            className={table.isActive ? styles.tableSelectActive : ''}
          >
              List {table.name}
          </a>
        ))}
      </div>
      <CurrencyList authUser={authUser} currentList={currentList} />
    </div>
  );
}

export default App;
