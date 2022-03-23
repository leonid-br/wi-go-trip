import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import s from './App.module.css';
import Container from './Container';

const Header = lazy(() =>
    import(/*webpackChunkName: "Header"*/ './Header'),
);
const Sidebar = lazy(() =>
    import(/*webpackChunkName: "Sidebar"*/ './Sidebar'),
);
const Reports = lazy(() =>
    import(/*webpackChunkName: "Reports"*/ './Reports'),
);

function App() {
    return (
        <>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Container>
                    <Header />
                    <div className={s.flex}>
                        <Sidebar />
                        <Routes>
                            <Route
                                path="/reports/*"
                                element={<Reports />}
                            />
                        </Routes>
                    </div>
                </Container>
            </Suspense>
        </>
    );
}

export default App;
