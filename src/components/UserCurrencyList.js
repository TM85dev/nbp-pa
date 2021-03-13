import { useSelector } from 'react-redux'
import Table from './Table';
import RemoveModal from './RemoveModal';

function UserCurrencyList({ authUser }) {
    const usersCurrency = useSelector(store => store.userCurrency);
    const userCurrency = usersCurrency.filter(item => item.user === authUser.name)

    return(
        <>
        <Table currency={userCurrency} />
        <RemoveModal removeAll={true} />
        </>
    )
}

export default UserCurrencyList;