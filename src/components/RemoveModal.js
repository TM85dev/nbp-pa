import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { removeCurrency, flushCurrency } from '../store/actions'
import { removeModal as styleRemove, buttons as styleButtons } from '../css/modals.module.css'
import { removeAllBtn as removeAllStylesBtn } from '../css/user-panel.module.css'
import { burntBtn } from '../css/main.module.css'

function RemoveModal({ currency, removeAll = false }) {
    const dispatch = useDispatch()
    const authUser = useSelector(store => store.auth)
    const [isVisible, setIsVisible] = useState(false)
    const removeCurrencyHandler = (select) => {
        if(removeAll && select === 'yes') {
            dispatch(flushCurrency(authUser.name))
        } else {
            if(select === 'yes') {
                dispatch(removeCurrency({user: authUser.name, code: currency.code}))
            }
        }
        setIsVisible(false)
    }
    return(
        <>
        <button className={removeAll ? removeAllStylesBtn : burntBtn} onClick={() => setIsVisible(true)}>
            {removeAll ? 'remove all' : 'remove'}
        </button>
        {isVisible ?
            <div className={styleRemove}>
                <div>
                    <p>Are you sure?</p>
                    <div className={styleButtons}>
                        <button onClick={() => removeCurrencyHandler('yes')}>Yes</button>
                        <button onClick={() => removeCurrencyHandler('no')}>No</button>
                    </div>
                </div>
            </div> : null
        }</>
    )
}

export default RemoveModal;