import './Nav.css'

const Navbar = () => {
    return (
        <>
            <ul>
                <li><a href="home.asp" id="Home"><h2>Home   </h2></a></li>
                <li><a href="favorites.asp" id="Favorites"><h2>Favorites  </h2></a></li>
                <li><a href="about.asp" id="About"><h2>About   </h2></a></li>
            </ul>
        </>
    )
}

export default Navbar;