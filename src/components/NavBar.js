import './NavBar.css';


function NavBar() {
    return (
        <nav>
            <img src="https://freesvg.org/img/tikigiki_filmstrip-01.png" className="logo" alt="logo" />
            <h1>Celluloid</h1>
            <div className='navbar-sections'>
                <button className="nav-button">Explorar</button>
                <button className="nav-button">Favoritos</button>
                <button className="nav-button">Mi Cuenta</button>
            </div>
            
        </nav>
    );

}

export default NavBar;