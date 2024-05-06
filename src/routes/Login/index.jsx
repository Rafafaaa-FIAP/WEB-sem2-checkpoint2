import { useState } from 'react';
import './styles.scss'

import TextField from '../../components/TextField'

function hashCredentials(username, password) {
  return `${username}:${password}`;
}

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function onSubmitLoginButton() {
    if(password == '123' && username == 'admin') {
    const hashedCredentials = hashCredentials(username, password);

    localStorage.setItem('credentials', hashedCredentials);

    window.location.href = '/Produtos';
    }
    else {
      alert('Tente username: admin e senha: 123')
    }
  
  }

  return (
    <div id='login-page'>
      <h1>Login</h1>
      <TextField id='user' placeholder='Usuário' value={username}
        onChange={(e) => setUsername(e.target.value)} />
      <TextField id='password' placeholder='Senha' value={password}
        onChange={(e) => setPassword(e.target.value)}/>
      <button type='submit' onClick={onSubmitLoginButton}>Entrar</button>
    </div>
  )
}

export default Login
