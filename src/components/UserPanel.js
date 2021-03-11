import styles from '../css/user-panel.module.css'

function UserPanel({ authUser }) {
    return(
        <div className={styles.topHeader}>
            <h1><strong>{authUser.name}</strong> Panel</h1>
        </div>
    )
}

export default UserPanel;