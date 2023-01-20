import './App.css';
import { Header } from './infrastructure/components/header/header';
import AppRoutes from './infrastructure/routes/routes';

function App() {
    return (
        <>
            <Header></Header>
            <AppRoutes></AppRoutes>
        </>
    );
}

export default App;
