import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Home from './Home';
import Wyatt from './projects/Wyatt';
import Toggle from './components/Toggle';

import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Wyatt />} />
                <Route path='/wyatt' element={<Wyatt />} />
            </Routes>
            <Toggle />
        </Router>
    );
};

export default App;
