import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Wyatt from './projects/Wyatt';

import "./App.css";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/wyatt" element={<Wyatt />} />
            </Routes>
        </Router>
    );
};

export default App;