import React, { useState } from 'react';
import { MessageCircle, Instagram, Mail } from 'lucide-react'; 

export function SpeedDial() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSpeedDial = () => {
        setIsOpen(!isOpen);
    };

    const buttons = [
        { 
            icon: <Instagram className="h-6 w-6" />, 
            href: "https://www.instagram.com/agenciascriptt/", 
            target: "_blank", 
            rel: "noopener noreferrer",
            color: 'bg-pink-600' 
        },
        { 
            icon: <Mail className="h-6 w-6" />, 
            href: "mailto:contatoagenciascript@gmail.com",
            color: 'bg-red-600'
        },
    ];

    return (
        <div className="fixed bottom-5 right-5">
            <div className={`flex flex-col items-center transition-all duration-300 ease-in-out ${isOpen ? 'mb-3 opacity-100' : 'opacity-0'}`}>
                {isOpen && (
                    <>
                        {buttons.map((button, index) => (
                            <a key={index} href={button.href} target={button.target} rel={button.rel} className={`${button.color} p-3 rounded-full shadow-lg mb-2 transition duration-300 transform hover:scale-105 flex items-center justify-center`}>
                                <span className="text-white">
                                    {button.icon}
                                </span>
                            </a>
                        ))}
                    </>
                )}
            </div>
            <button className="bg-indigo-600 text-zinc-100 p-4 rounded-full shadow-lg transition duration-300 transform hover:scale-110 hover:bg-indigo-700 focus:outline-none" onClick={toggleSpeedDial}>
                <MessageCircle className="h-7 w-7" />
            </button>
        </div>
    );
}
