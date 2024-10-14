import React from "react";

function CardProject({ title, description, imgUrl, link }) {
    return (
        <div className="bg-white w-full max-w-lg aspect-square rounded-3xl shadow-sm overflow-hidden transform transition-transform duration-300">
            <img src={imgUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-800 mb-3">{title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-4">{description}</p>
                <a href={link} className="transform hover:scale-110 relative mt-2 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white rounded-full bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-800 transition-all max-w-fit">
                    Visitar
                </a>
            </div>
        </div>
    );
}

export default CardProject;
