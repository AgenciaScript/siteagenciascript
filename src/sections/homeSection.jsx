import React from 'react';
import { CornerRightDown } from 'lucide-react';

export function HomeSection() {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-zinc-100">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 xl:grid-cols-12 w-full relative z-1">
                <div className="xl:col-span-7 flex flex-col justify-center items-center xl:items-start text-center xl:text-left">
                    <h1 className="max-w-2xl mb-2 text-4xl font-semibold tracking-tight leading-none sm:text-5xl md:text-5xl xl:text-6xl text-zinc-950">
                        Transforme<br />Ideias em Soluções
                    </h1>
                    <p className="max-w-lg font-light text-zinc-700 xl:mb-8 text-sm md:text-base xl:text-md">
                        Desenvolvemos softwares personalizados para seu sucesso. Inovação e qualidade em cada projeto.
                    </p>
                    <a href="#sobreNos" className="transform hover:scale-110 relative mt-6 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white rounded-full bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-800 transition-all max-w-fit">
                        Ver mais
                        <CornerRightDown className="ml-2" />
                    </a>
                </div>
                <div className="hidden xl:col-span-5 xl:flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-3">
                        <div className="relative w-60 h-60 rounded-2xl bg-center bg-gradient-to-tl from-indigo-500 to-indigo-900 transition transform hover:scale-95 hover:brightness-110">
                            <span className="absolute bottom-6 left-6 text-white text-3xl font-semibold tracking-tight leading-none select-none">
                                Mais<br />Resultados
                            </span>
                        </div>
                        <div className="relative w-60 row-span-2 rounded-2xl bg-center bg-cover bg-gradient-to-tl from-indigo-900 to-indigo-500 transition transform hover:scale-95 hover:brightness-110">
                            <span className="absolute bottom-6 left-6 text-white text-3xl font-semibold tracking-tight leading-none select-none">
                                Redução<br />de Custos
                            </span>
                        </div>
                        <div className="relative w-60 h-60 rounded-2xl bg-center bg-cover bg-gradient-to-b from-indigo-500 to-indigo-900 transition transform hover:scale-95 hover:brightness-110">
                            <span className="absolute bottom-6 left-6 text-white text-3xl font-semibold tracking-tight leading-none select-none">
                                Escale<br />seu Negócio
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
