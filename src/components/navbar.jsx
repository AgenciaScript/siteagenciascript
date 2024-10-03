import React, { useState, useEffect } from 'react';

const Navbar = ({ activeSection, setMenuOpen, menuOpen }) => {
    return (
        <nav className="bg-zinc-950 fixed top-0 py-2 left-0 w-full z-50">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex items-center justify-between w-full sm:w-auto">
                        <div className="flex flex-shrink-0 items-center">
                            <img src="./src/assets/img/logo.png" className="h-10" alt="Logo Agência Script" />
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                            <button type="button" className="relative inline-flex items-center justify-center rounded-full p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
                                <span className="sr-only">Open main menu</span>
                                <svg className={`${menuOpen ? 'hidden' : 'block'} h-6 w-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                <svg className={`${menuOpen ? 'block' : 'hidden'} h-6 w-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="hidden sm:flex sm:items-center sm:space-x-4">
                        <div className="flex space-x-4 ml-auto">
                            <a href="#inicio" className={`rounded-full px-3 py-2 text-sm font-medium ${activeSection === 'inicio' ? 'bg-indigo-600 text-white' : 'text-zinc-300 hover:bg-zinc-700 hover:text-white'} transition-all`}>Início</a>
                            <a href="#sobreNos" className={`rounded-full px-3 py-2 text-sm font-medium ${activeSection === 'sobreNos' ? 'bg-indigo-600 text-white' : 'text-zinc-300 hover:bg-zinc-700 hover:text-white'} transition-all`}>Sobre nós</a>
                            <a href="#" className={`rounded-full px-3 py-2 text-sm font-medium ${activeSection === 'botao1' ? 'bg-indigo-600 text-white' : 'text-zinc-300 hover:bg-zinc-700 hover:text-white'} transition-all`}>Botão</a>
                            <a href="#" className={`rounded-full px-3 py-2 text-sm font-medium ${activeSection === 'botao2' ? 'bg-indigo-600 text-white' : 'text-zinc-300 hover:bg-zinc-700 hover:text-white'} transition-all`}>Botão</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`sm:hidden ${menuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <a href="#inicio" className={`block rounded-full px-3 py-2 text-base font-medium ${activeSection === 'inicio' ? 'bg-indigo-600 text-white' : 'text-zinc-300 hover:bg-zinc-700 hover:text-white'} transition-all`}>Início</a>
                    <a href="#sobreNos" className={`block rounded-full px-3 py-2 text-base font-medium ${activeSection === 'sobreNos' ? 'bg-indigo-600 text-white' : 'text-zinc-300 hover:bg-zinc-700 hover:text-white'} transition-all`}>Sobre nós</a>
                    <a href="#" className={`block rounded-full px-3 py-2 text-base font-medium ${activeSection === 'botao1' ? 'bg-indigo-600 text-white' : 'text-zinc-300 hover:bg-zinc-700 hover:text-white'} transition-all`}>Botão</a>
                    <a href="#" className={`block rounded-full px-3 py-2 text-base font-medium ${activeSection === 'botao2' ? 'bg-indigo-600 text-white' : 'text-zinc-300 hover:bg-zinc-700 hover:text-white'} transition-all`}>Botão</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
