import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';

import Navigation from './components/Navigation';
import LoadingAnimation from './components/LoadingAnimation';

import './App.css';

const Home = lazy(() => import(/* webpackChunkName: "home" */ './Home'));
const Wyatt = lazy(
    () => import(/* webpackChunkName: "wyatt" */ './projects/Wyatt')
);
const NotFound = lazy(
    () => import(/* webpackChunkName: "not-found" */ './pages/NotFound')
);

const App = () => {
    return (
        <Router>
            <ThemeProvider>
                <Navigation />
                <Suspense
                    fallback={
                        <div className='route-fallback'>
                            <LoadingAnimation />
                        </div>
                    }
                >
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/wyatt' element={<Wyatt />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Suspense>
            </ThemeProvider>
        </Router>
    );
};

export default App;
