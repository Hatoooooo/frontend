import '../styles/HeaderStyle.css'

function Header() {
    return ( 
        <header className="header">
            <div className="header-logo">
                <img src='/assets/img/logo.png' />
            </div>
            <div className="header-menu">
                <nav>
                    <h2><a href="https://www.youtube.com/watch?v=WRRkHwihSAk&t=39s">Menu 1</a></h2>
                    <h2><a href="https://www.youtube.com/watch?v=Hy8kmNEo1i8">Menu 2</a></h2>
                    <h2><a href="https://www.youtube.com/watch?v=02vDkMEdIkY">Menu 3</a></h2>
                </nav>
            </div>
            <div className="header-resaux">
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" />
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384072.png" />
            </div>
        </header>
     );
}

export default Header;