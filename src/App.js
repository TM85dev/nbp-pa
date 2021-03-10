import styles from './css/main.module.css'
import MainMenu from './components/MainMenu'
import LoginForm from './components/LoginForm'
import { useSelector } from 'react-redux'

function App() {
  const authUser = useSelector(store => store.auth)
  return (
    <div className={ styles.background }>
      <MainMenu />
      {authUser.isLogin ? null : <LoginForm />}
    </div>
  );
}

export default App;
