import {useState} from "react";
import {useNavigate} from "react-router-dom";
import '../styles/Registration.scss'

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8080/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password, email}),
        });

        if (response.ok) {
            navigate('/login')
        } else {
            alert('Registration Failed')
        }
    }
    return (
        <div className="register">
            <form onSubmit={handleRegister} >
                <h2>Become a Lana Lover</h2>
                <input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
                <input type="email" placeholder="email" value={username} onChange={e => setEmail(e.target.value)} />
            </form>
        </div>
    )
}

export default Register;