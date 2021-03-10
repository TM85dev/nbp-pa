import styles from '../css/main-menu.module.css'
import { useSelector } from 'react-redux'
import LogoutForm from './LogoutForm'

function MainMenu() {
    const auth = useSelector(store => store.auth)
    return(
        <nav className={styles.nav}>
            <div>
                <h1>NBP</h1>
            </div>
            <div>
                <p>Welcome <strong>{`${auth.name ? auth.name : 'guest'}`}</strong></p>
                {auth.isLogin ? <LogoutForm /> : null}
            </div>
        </nav>
    )
}

export default MainMenu