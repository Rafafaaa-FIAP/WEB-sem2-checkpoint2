

import './styles.scss'

import TextField from '../../components/TextField'

function Contact() {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const description = e.target.elements.description.value;

    if (name && email && description) {
      alert('Formulário preenchido com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div id='contact-page'>
      <h1>Contato</h1>
      <form onSubmit={handleSubmit}>
      <TextField id='name' placeholder='Nome'/>
      <TextField type='email' id='email' placeholder='E-mail'/>
      <TextField id='description' placeholder='Descrição'/>
      <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default Contact;