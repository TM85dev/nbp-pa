import { topHeader, tableWrapper } from '../css/user-panel.module.css'
import UserCurrencyList from './UserCurrencyList'

function UserPanel({ authUser }) {
    return(
        <>
        <div className={topHeader}>
            <h1><strong>{authUser.name}</strong> Panel</h1>
        </div>
        <div className={tableWrapper}>
            <UserCurrencyList authUser={authUser} />
        </div>
        </>
    )
}

export default UserPanel;