import '../styles/HeaderStyle.css'

function Header () {
  return (
    <header className='header'>
      <div className='header-logo'>
        <img src='/assets/img/logo.png' />
      </div>
      <div className='header-menu'>
        <nav>
          <h2><a href='/'>Acceuil</a></h2>
          <h2><a href='/restaurants'>Restaurants</a></h2>
          <h2><a href='/about'>About</a></h2>
        </nav>
      </div>
      <div className='header-resaux'>
        <img src='https://cdn-icons-png.flaticon.com/512/1384/1384063.png' />
        <img src='https://cdn-icons-png.flaticon.com/512/1384/1384072.png' />
      </div>
    </header>
  )
}

export default Header
