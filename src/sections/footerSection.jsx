import React from 'react';

export function FooterSection() {
    return (
        <footer className="bg-zinc-950 mt-24">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="flex flex-col items-center mb-6">
                    <a href="" className="flex items-center justify-center">
                        <img src="./src/assets/img/logo.svg" className="h-12 mb-3" alt="Agência Script" />
                    </a>
                </div>
                <hr className="my-6 border-zinc-700 sm:mx-auto" />
                <div className="flex flex-col items-center">
                    <span className="text-sm text-zinc-500 text-center">
                        © 2024 <a href="" className="hover:underline">Agência Script</a>. Todos direitos reservados.
                    </span>
                </div>
            </div>
        </footer>
    );
}
