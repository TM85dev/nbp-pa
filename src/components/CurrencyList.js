import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux' 
import { getCurrency, addCurrency, removeCurrency, flushCurrency } from '../store/actions'
import axios from 'axios'
import styles from '../css/main.module.css'
import NotLoginModal from './NotLoginModal'

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
    const addCurrencyHandler = (e, currency, id) => {
        if(authUser.isLogin) {
            setIsModalActive(true)
        } else {
            e.target.textContent = 'Added'
            e.target.classList.add(styles.added)
            dispatch(addCurrency({id, ...currency}))

        }
    }
    const removeCurrencyHandler = (currency, id) => {
        dispatch(removeCurrency({id, ...currency}))
    }
    const isCurrencyActive = (currency) => {
        let isActive = false
        userCurrency.map(item => {
            if(item.code === currency.code) {
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
            {isLoading ? <p className={styles.loading}>loading...</p> : 
                <table border={1} className={styles.table}>
                    <thead>
                        <tr>
                            <th>l.p.</th>
                            <th>currency</th>
                            <th>code</th>
                            <th>mid</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currency.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.currency}</td>
                                <td>{item.code}</td>
                                <td>{item.mid}</td>
                                <td>
                                    <button 
                                        className={isCurrencyActive(item) ? styles.added : ''} 
                                        onClick={(e) => addCurrencyHandler(e, item ,index)}
                                    >{isCurrencyActive(item) ? 'added' : 'add'}
                                    </button>
                                
                                <button onClick={() => removeCurrencyHandler(item, index)}>remove</button>
                                </td>
                            </tr> 
                        ))}
                    </tbody>
                </table>
            }
            {isModalActive ? <NotLoginModal setIsModalActive={setIsModalActive} /> : null}
        </div>
    )
}

export default CurrencyList;