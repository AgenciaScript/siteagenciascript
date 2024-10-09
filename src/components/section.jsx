import React, { useState, useEffect } from 'react';
import { CornerRightDown } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardProject from './cardProject';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';

const Sections = ({ setActiveSection }) => {
    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, [setActiveSection]);

    return (
        <>
            <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-zinc-100">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 w-full relative z-10">
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <h1 className="max-w-2xl mb-2 text-4xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl text-zinc-950">
                            Transforme<br/>Ideias em Soluções
                        </h1>
                        <p className="max-w-xl font-light text-zinc-700 lg:mb-8 text-sm md:text-base lg:text-lg">
                            Desenvolvemos softwares personalizado para seu sucesso. Inovação e qualidade em cada projeto.
                        </p>
                        <a href="#sobreNos" className="transform hover:scale-110 relative mt-6 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white rounded-full bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-800 transition-all max-w-fit">
                            Ver mais
                            <CornerRightDown className="ml-2"/>
                        </a>
                    </div>
                    <div className="hidden lg:col-span-5 lg:flex items-center justify-center">
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

            <section id="sobreNos" className="relative min-h-screen flex items-center overflow-hidden bg-zinc-950">
                <div className="grid max-w-screen-xl mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 w-full relative z-10">
                    <div className="hidden lg:col-span-5 lg:flex items-center justify-center">
                        <div className="w-96 h-96 rounded-3xl flex items-center justify-center">
                            <img src="./src/assets/gif/logosAgencia.gif" alt="" className="w-full h-full object-cover rounded-3xl" />
                        </div>
                    </div>
                    <div className="lg:col-span-7 flex flex-col items-start text-left -ml-4">
                        <h1 className="max-w-2xl mb-2 text-4xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl text-zinc-100">
                            Sobre nós
                        </h1>
                        <p className="max-w-2xl font-light text-zinc-400 lg:mb-8 text-sm md:text-base lg:text-lg text-justify mt-5">
                            A Agência Script, fundada por Luan Rodrigues e Thainara Marques, é especializada no desenvolvimento de soluções de software para dispositivos mobile, desktop e web. Nosso foco está em criar aplicativos, sites e sistemas sob medida que atendem às demandas e desafios específicos de cada cliente. Utilizamos tecnologias avançadas e metodologias ágeis para garantir que nossos produtos sejam robustos, eficientes e escaláveis. Combinamos expertise técnica com uma abordagem centrada no usuário para entregar soluções que realmente fazem a diferença.
                        </p>
                    </div>
                </div>
            </section>

            <section id="projetos" className="relative min-h-screen flex items-center overflow-hidden bg-zinc-100">
                <div className="container mx-auto px-4">
                    <div className="mt-32 mb-24">
                        <h1 className="text-6xl font-semibold text-zinc-950 text-center mb-2">
                            Nossos Projetos
                        </h1>
                        <p className="max-w-screen-xl mx-auto font-light text-zinc-700 text-center lg:mb-8 text-base lg:text-lg mb-12">
                            Conheça alguns projetos já desenvolvidos pela Script.
                        </p>
                    </div>

                    <div className="flex justify-center mx-auto">
                        <Swiper className="mt-24-12 max-w-screen-xl mx-auto" modules={[Pagination]}  pagination={{ dynamicBullets: true }} spaceBetween={20} slidesPerView={1}
                            breakpoints={{
                                300: {
                                    slidesPerView: 1,
                                },
                                800: {
                                    slidesPerView: 2,
                                },
                                1200: {
                                    slidesPerView: 3,
                                },
                        }}>
                            <SwiperSlide>
                                <CardProject
                                    title="Projeto 1"
                                    description="Descrição breve do projeto 1. Uma solução personalizada desenvolvida para atender às necessidades do cliente."
                                    imgUrl="url_da_imagem_projeto_1"
                                    link="#link1"
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <CardProject
                                    title="Projeto 2"
                                    description="Descrição breve do projeto 1. Uma solução personalizada desenvolvida para atender às necessidades do cliente."
                                    imgUrl="url_da_imagem_projeto_2"
                                    link="#link2"
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <CardProject
                                    title="Projeto 3"
                                    description="Descrição breve do projeto 1. Uma solução personalizada desenvolvida para atender às necessidades do cliente."
                                    imgUrl="url_da_imagem_projeto_3"
                                    link="#link3"
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <CardProject
                                    title="Projeto 4"
                                    description="Descrição breve do projeto 1. Uma solução personalizada desenvolvida para atender às necessidades do cliente."
                                    imgUrl="url_da_imagem_projeto_4"
                                    link="#link4"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Sections;
