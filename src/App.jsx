import React, { useState } from 'react';
import Sections from "./components/section";
import Navbar from "./components/navbar";

function App() {
    const [activeSection, setActiveSection] = useState('inicio');
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <Navbar activeSection={activeSection} setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
            <Sections setActiveSection={setActiveSection} />
        </>
    );
}

export default App;
