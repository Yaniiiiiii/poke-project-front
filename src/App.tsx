import './App.css';
import { Header } from './infrastructure/components/header/header';
import { LoginButton } from './infrastructure/components/logIn/login';
import SearchBar from './infrastructure/components/searchBar/searchBar';
import AppRoutes from './infrastructure/routes/routes';
import { Auth0Provider } from '@auth0/auth0-react';

function App() {
    return (
        <>
            <Auth0Provider
                domain="dev-y8zew6g3nkhvdzh8.eu.auth0.com"
                clientId="V7P3NmIIRQVbeZqSrIhMwT9lKtIS3B0s"
                redirect_uri={window.location.origin}
            >
                {' '}
                <Header></Header>
                <LoginButton></LoginButton>
                <SearchBar></SearchBar>
                <AppRoutes></AppRoutes>
            </Auth0Provider>
        </>
    );
}

export default App;
