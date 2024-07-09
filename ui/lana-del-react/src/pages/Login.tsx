import {useState} from "react";
import {useNavigate} from "react-router-dom";
import '../styles/Login.scss'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password}),
        })

        const data = await response.text()
        if (data == 'Success') {
            navigate('/')
        } else {
            alert("Invalid username or password");
        }
    }

    return (
        <div className="login">
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)}/>
                <input type="password" placeholder="password" value={password}
                       onChange={e => setPassword(e.target.value)}/>
            </form>
        </div>
    )
}

export default Login;