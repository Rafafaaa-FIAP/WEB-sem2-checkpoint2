import './styles.scss'

import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <Link to="/Home" className='linkImage'><img id="logo" className="logo" alt="logo" src={logo} /></Link>

      <div id="nav-menu">
        <ul>
          <li><Link to="/Produtos">Produtos</Link></li>
          <li><Link to="/Login">Login</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav