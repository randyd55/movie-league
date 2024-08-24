import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import League from './components/League';

function App() {
    return (
        <Router>
            <div style={styles.app}>
                <Header />
                <main style={styles.main}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/league" element={<League />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

const styles = {
    app: {
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
};

export default App;