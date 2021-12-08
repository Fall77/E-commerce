import './Header.css'
import Icono from './Icono'

const Header = () => {
    return (
        <div class="text-light">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Store</a>
      </li>
      <li class="nav-item dropdown ">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Menu
             </a>
            <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                <a class="dropdown-item bg-dark text-light" href="#">About</a>
                <a class="dropdown-item bg-dark text-light" href="#">Contact</a>
            <div class="dropdown-divider"></div>
                <a class="dropdown-item bg-dark text-light" href="#">Map</a>
            </div>
            </li>
        </ul>
        <Icono />
            </div>
        </nav>
    </div>
    )
}

export default Header