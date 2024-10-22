import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';

import Home from './Home';
import Wyatt from './projects/Wyatt';
import Navigation from './components/Navigation';

import './App.css';

const App = () => {
    return (
        <Router>
            <ThemeProvider>
                <Navigation />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/wyatt' element={<Wyatt />} />
                </Routes>
            </ThemeProvider>
        </Router>
    );
};

export default App;
