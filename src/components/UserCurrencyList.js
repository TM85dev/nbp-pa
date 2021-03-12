import { useSelector, useDispatch } from 'react-redux'
import { flushCurrency } from '../store/actions'
import Table from './Table';
import { removeAllBtn as stylesBtn } from '../css/user-panel.module.css'

function UserCurrencyList({ authUser }) {
    const dispatch = useDispatch()
    const usersCurrency = useSelector(store => store.userCurrency);
    const userCurrency = usersCurrency.filter(item => item.user === authUser.name)

    const flushCurrencyHandler = () => {
        dispatch(flushCurrency(authUser.name))
    }
    return(
        <>
        <Table currency={userCurrency} />
        <button className={stylesBtn} onClick={flushCurrencyHandler}>remove all</button>
        </>
    )
}

export default UserCurrencyList;