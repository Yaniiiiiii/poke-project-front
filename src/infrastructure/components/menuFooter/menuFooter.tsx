import { Link } from 'react-router-dom';

function MenuFooter() {
    return (
        <nav>
            <Link to="/pokemons">
                <img src="assets/home.png"></img>
            </Link>
            <Link to="/favoriteList">
                <img src="assets/like.png"></img>
            </Link>
        </nav>
    );
}
export default MenuFooter;
