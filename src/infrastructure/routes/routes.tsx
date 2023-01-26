import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('../components/pokeList/pokeList'));
const DetailsPage = lazy(() => import('../components/details/details'));

function AppRoutes() {
    return (
        <Suspense>
            <Routes>
                <Route path="/pokemons">
                    <Route index element={<MainPage></MainPage>}></Route>
                    <Route
                        path=":name"
                        element={<DetailsPage></DetailsPage>}
                    ></Route>
                </Route>
                <Route path="/" element={<MainPage></MainPage>}></Route>
            </Routes>
        </Suspense>
    );
}
export default AppRoutes;
