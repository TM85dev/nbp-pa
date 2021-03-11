import styles from '../css/modals.module.css'

function NotLoginModal({ setIsModalActive }) {
    const clickHandler = () => {
        setIsModalActive(false)
    }
    return(
        <div className={styles.notLoginModal}>
            <div>
                <p>You need login to add currency</p>
                <button onClick={clickHandler}>OK</button>
            </div>
        </div>
    )
}

export default NotLoginModal;