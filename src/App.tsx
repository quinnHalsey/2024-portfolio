import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Home from './Home';
import Wyatt from './projects/Wyatt';
import Toggle from './components/Toggle';

import { keepTheme } from './utils/themes';

import './App.css';

const App = () => {
    useEffect(() => {
        keepTheme();
    }, []);

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Wyatt />} />
                <Route path='/wyatt' element={<Wyatt />} />
                {/* TEMP TOGGLE FOR TESTING DARK/LIGHT MODE */}
            </Routes>
            <Toggle />
        </Router>
    );
};

export default App;
