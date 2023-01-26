import { LoginButton } from '../logIn/login';
import SearchBar from '../searchBar/searchBar';

function TopMenu() {
    return (
        <div
            className="d-flex justify-content-between
         py-4 px-4"
        >
            <SearchBar></SearchBar>

            <LoginButton></LoginButton>
        </div>
    );
}
export default TopMenu;
