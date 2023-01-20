import './App.css';
import PokeList from './infrastructure/components/pokeList';
import { Header } from '../header/header';
import './App.css';

function App() {
    return (
        <>
            <Header></Header>
            <PokeList></PokeList>
            <div>Pokemon</div>
        </>
    );
}

export default App;
