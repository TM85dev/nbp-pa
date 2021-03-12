import { table as styleTable, added as styleAdded } from '../css/main.module.css'
import RemoveModal from './RemoveModal'

function Table({ currency, addCurrencyHandler = false, isCurrencyActive = false }) {
    return(
        <table border={1} className={styleTable}>
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
                        <td>{addCurrencyHandler ? 
                            <button className={isCurrencyActive(item) ? styleAdded : ''} 
                                    onClick={() => addCurrencyHandler(item)}>
                                        {isCurrencyActive(item) ? 'added' : 'add'}
                            </button> :

                        <RemoveModal currency={item} />
                        }</td>
                    </tr> 
                ))}
            </tbody>
        </table>
    )
}

export default Table;