import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux' 
import { getCurrency, addCurrency } from '../store/actions'
import axios from 'axios'
import NotLoginModal from './NotLoginModal'
import Table from './Table'
import { loading as styles } from '../css/main.module.css'

function CurrencyList({ authUser, currentList }) {
    const dispatch = useDispatch()
    const currency = useSelector(store => store.currency)
    const userCurrency = useSelector(store => store.userCurrency)
    const [isLoading, setIsLoading] = useState(false)
    const [isModalActive, setIsModalActive] = useState(false)
    const getData = () => {
        setIsLoading(true)
        axios.get(`http://api.nbp.pl/api/exchangerates/tables/${currentList}/`)
            .then(res => dispatch(getCurrency(res.data[0].rates)))
            .finally(() => setIsLoading(false))
    }
    const addCurrencyHandler = (currency) => {
        if(authUser.isLogin) {
            dispatch(addCurrency({user: authUser.name, ...currency}))
        } else {
            setIsModalActive(true)
        }
    }
    const isCurrencyActive = (currency) => {
        let isActive = false
        // eslint-disable-next-line
        userCurrency.map(item => {
            if(item.code === currency.code && item.user === authUser.name) {
                isActive = true
            }
        })
        return isActive
    }
    useEffect(() => {
        getData()
        // eslint-disable-next-line
    }, [currentList])
    return(
        <div>
            {isLoading ? <p className={styles}>loading...</p> : 
            <Table currency={currency} addCurrencyHandler={addCurrencyHandler} isCurrencyActive={isCurrencyActive} />
            }
            {isModalActive ? <NotLoginModal setIsModalActive={setIsModalActive} /> : null}
        </div>
    )
}

export default CurrencyList;