import React from 'react';
import { X } from 'lucide-react';

const Alert = ({ isOpen, message, onClose }) => {
    if (!isOpen) return null;

    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={handleOutsideClick}>
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full relative">
                <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
                    <X size={24} />
                </button>
                <h2 className="text-lg font-semibold mb-4">Notificação</h2>
                <p className="mb-4">{message}</p>
            </div>
        </div>
    );
};

export default Alert;
