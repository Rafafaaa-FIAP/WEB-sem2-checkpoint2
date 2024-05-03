import './styles.scss'

import TextField from '../../components/TextField'

function Login() {
  return (
    <div id='login-page'>
      <h1>Login</h1>
      <TextField id='user' placeholder='Usuário' />
    </div>
  )
}

export default Login