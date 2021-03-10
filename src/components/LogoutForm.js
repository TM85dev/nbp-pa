import { useDispatch } from 'react-redux'
import { logout, unauth } from '../store/actions'
import styles from '../css/main-menu.module.css'

function LogoutForm() {
    const dispatch = useDispatch()
    const logoutHandler = (e) => {
        e.preventDefault()
        dispatch(logout())
        dispatch(unauth())
      }
    return(
        <form onSubmit={logoutHandler} className={styles.logoutForm}>
            <button>Logout</button>
        </form>
    )
}

export default LogoutForm