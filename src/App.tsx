import './App.css';
import PokeList from './infrastructure/components/pokeList';
import './App.css';
import { Header } from './infrastructure/components/header/header';

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
