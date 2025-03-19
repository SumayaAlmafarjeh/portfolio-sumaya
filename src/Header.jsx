
import {Link} from 'react-router-dom'
import logo from './assets/logo.png'
function Header() {
  return (
    
   <div className='my-navbar'>
    <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
            <a className="navbar-brand" href="/"><img width={40} src={logo} alt='logo'/> </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="About">About</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="MyWork">My work</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="Contact">Contact</Link></li>
                    
                </ul>
            </div>
        </div>
    </nav>
   </div>
  )
}

export default Header