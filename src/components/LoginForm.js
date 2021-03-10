import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login, auth } from '../store/actions'
import styles from '../css/main.module.css'

function LoginForm() {
    const fields = ['email', 'password']
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })
    const users = useSelector(store => store.users)
    // const authUser = useSelector(store => store.auth)
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    
    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    const loginHandler = (e) => {
        e.preventDefault()
        setError('incorrect email or password')
        users.forEach(user => {
            if(user.email === inputs.email && user.password === inputs.password) {
                dispatch(login(user.id))
                dispatch(auth(users[user.id]))
                setError('')
            }
        })
    }

    return(
        <form onSubmit={loginHandler} className={styles.loginForm}>
            <h1>Login Form</h1>
            {fields.map((field, index) => (
                <label key={index}>
                    <p>{field}:</p>
                    <input 
                        value={inputs[field]} 
                        name={field}
                        type={field==='password'? 'password' : 'text'} 
                        onChange={changeHandler} 
                        autoComplete="off"
                    />
                </label>
            ))}
            <button type="submit">Login</button>
            {error ? <p className={styles.error}>{error}</p> : null}
        </form>
    )
}

export default LoginForm;