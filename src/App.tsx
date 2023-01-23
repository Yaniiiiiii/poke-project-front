import './App.css';
import { Header } from './infrastructure/components/header/header';
import SearchBar from './infrastructure/components/searchBar/searchBar';
import AppRoutes from './infrastructure/routes/routes';

function App() {
    return (
        <>
            <Header></Header>
            <SearchBar></SearchBar>
            <AppRoutes></AppRoutes>
        </>
    );
}

export default App;
