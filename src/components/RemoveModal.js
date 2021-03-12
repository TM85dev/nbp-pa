import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { removeCurrency } from '../store/actions'
import { removeModal as styleRemove, buttons as styleButtons } from '../css/modals.module.css'
import { burntBtn } from '../css/main.module.css'

function RemoveModal({ currency }) {
    const dispatch = useDispatch()
    const authUser = useSelector(store => store.auth)
    const [isVisible, setIsVisible] = useState(false)
    const removeCurrencyHandler = (select) => {
        if(select === 'yes') {
            dispatch(removeCurrency({user: authUser.name, code: currency.code}))
        }
        setIsVisible(false)
    }
    return(
        <>
        <button className={burntBtn} onClick={() => setIsVisible(true)}>remove</button>
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