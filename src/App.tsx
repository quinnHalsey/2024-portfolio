import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Home from './Home';
import Wyatt from './projects/Wyatt';
import Navigation from './components/Navigation';

import './App.css';

const App = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path='/' element={<Wyatt />} />
                <Route path='/wyatt' element={<Wyatt />} />
            </Routes>
        </Router>
    );
};

export default App;
