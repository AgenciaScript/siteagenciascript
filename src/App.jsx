import React, { useState } from 'react';
import useActiveSectionObserver from "./components/useActiveSectionObserver";
import Navbar from "./components/navbar";
import { SpeedDial } from './components/speedDial'; 
import { HomeSection } from './sections/homeSection';
import { AboutUsSection } from './sections/AboutUsSection';
import { ProjectSection } from './sections/projectSection';
import { ContactsSection } from './sections/contactsSection';
import { FooterSection } from './sections/footerSection';

function App() {
    const [activeSection, setActiveSection] = useState('inicio');
    const [menuOpen, setMenuOpen] = useState(false);

    useActiveSectionObserver(setActiveSection);

    return (
        <>
            <Navbar activeSection={activeSection} setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
            <HomeSection />
            <AboutUsSection />
            <ProjectSection />
            <ContactsSection />
            <FooterSection />
            <div className="fixed bottom-6 right-6 z-50">  
                <SpeedDial />
            </div>
        </>
    );
}

export default App;
