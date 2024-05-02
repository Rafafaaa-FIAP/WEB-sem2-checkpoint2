import './styles.scss'

import TextField from '../../components/TextField'

function Contact() {
  return (
    <div id='contact-page'>
      <h1>Contato</h1>
      <TextField id='name' placeholder='Nome' />
    </div>
  )
}

export default Contact