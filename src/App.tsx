import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './componets/pages/Home';
import Basket from './componets/pages/Basket';
import Selected from './componets/pages/Selected';
import { Header } from './componets/header/Header';
import { fetchData } from './features/slices/autosSlice';
import { getDatas } from './thunks/getDatas';
import { useAppDispatch } from './app/hooks';

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchData());
        dispatch(getDatas());
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route index element={<Home />} />
                        <Route path="basket" element={<Basket />}></Route>
                        <Route path="selected" element={<Selected />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
