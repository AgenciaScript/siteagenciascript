import React from 'react';
import { X, Mail, Linkedin } from 'lucide-react';

const Modal = ({ isOpen, onClose, name, description, imageUrl, linkedInUrl, email }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-in-out">
            <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 ease-in-out" onClick={onClose}></div>
            <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 md:p-8 z-10 flex flex-col md:flex-row relative transform transition-transform duration-300 ease-in-out scale-95">
                <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
                    <X size={24} />
                </button>
                <img src={imageUrl} alt={`${name}`} className="w-full md:w-40 h-56 object-cover rounded-xl mb-4 md:mb-0 md:mr-6" />
                <div>
                    <h2 className="text-2xl font-bold mb-4">{name}</h2>
                    <p className="text-gray-700 text-sm text-justify">{description}</p>
                    <div className="flex space-x-4 mt-4">
                        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-blue-600 rounded-full p-2 text-white hover:bg-blue-700 transition duration-300">
                            <Linkedin size={20} />
                        </a>
                        <a href={`mailto:${email}`} className="flex items-center justify-center bg-red-600 rounded-full p-2 text-white hover:bg-red-700 transition duration-300">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
