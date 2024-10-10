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
                                {/* Sessão "Nos Conte Sua Ideia" */}
                <section id="conteSuaIdeia" className="relative min-h-screen flex items-center  bg-zinc-950 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-5xl font-semibold text-zinc-100 text-center mb-8">Nos Conte Sua Ideia</h2>
                        <p className="max-w-2xl mx-auto font-light text-zinc-400  text-center lg:mb-12 text-base lg:text-lg">
                            Queremos ouvir sobre o seu projeto. Preencha o formulário abaixo e entraremos em contato para ajudar a transformar sua ideia em realidade.
                        </p>
                        <form className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg">
                            {/* Nome da Empresa */}
                            <div className="mb-6">
                                <label htmlFor="empresa" className="block text-sm font-medium text-zinc-900 mb-2">Nome da Empresa</label>
                                <input 
                                    type="text" 
                                    id="empresa" 
                                    className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
                                    placeholder="Digite o nome da empresa" 
                                />
                            </div>

                            {/* Tipo de Serviço */}
                            <div className="mb-6">
                                <label htmlFor="servico" className="block text-sm font-medium text-zinc-900 mb-2">Que tipo de serviço você procura?</label>
                                <select 
                                    id="servico" 
                                    className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                                    <option value="" disabled selected>Escolha uma opção</option>
                                    <option value="site">Site</option>
                                    <option value="aplicativo">Aplicativo</option>
                                    <option value="desktop">Software Desktop</option>
                                </select>
                            </div>

                            {/* Breve Descrição da Ideia */}
                            <div className="mb-6">
                                <label htmlFor="descricao" className="block text-sm font-medium text-zinc-900 mb-2">Breve Descrição da Ideia</label>
                                <textarea 
                                    id="descricao" 
                                    rows="4" 
                                    className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
                                    placeholder="Descreva brevemente sua ideia"
                                ></textarea>
                            </div>

                            {/* Botão de Envio */}
                            <button 
                                type="submit" 
                                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-all focus:ring-4 focus:ring-indigo-800"
                            >
                                Enviar Ideia
                            </button>
                        </form>
                              {/* Contato da Empresa */}
                        <div className="text-center py-16">
                            <h3 className="text-3xl font-semibold text-zinc-100  mb-4">Entre em Contato</h3>
                            <p className="text-zinc-400 font-light text-base lg:text-lg mb-6">
                                Siga-nos nas redes sociais ou envie um e-mail para tirar dúvidas ou iniciar um projeto.
                            </p>
                            <div className="flex justify-center items-center space-x-8">
                                {/* Instagram */}
                                <a href="https://www.instagram.com/agenciascriptt/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                                    <img src="./src/assets/img/instagram.png" alt="Instagram" className="w-12 h-12" />
                                    <span className="text-indigo-600 font-medium text-lg">@agenciascriptt</span>
                                </a>
                                {/* E-mail */}
                                <div className="flex flex-col items-center">
                                <a href="mailto:contatoagenciascript@gmail.com"  className="flex flex-col items-center">
                                    <img src="./src/assets/img/gmail.png" alt="E-mail" className="w-12 h-12" />
                                    <span className="text-indigo-600 font-medium text-lg">contatoagenciascript@gmail.com</span>
                                    </a>
                                </div>
                            </div>
                      </div> 
                    </div>
            </section>
            <footer className="bg-zinc-900 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    
                    {/* Informações da empresa centralizadas */}
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold">Agência Script</h3>
                             <p className="text-sm">Transformando ideias em websites incríveis</p>
                    </div>

                    {/* Direitos autorais centralizados */}
                    <div className="text-sm text-zinc-500 mt-6">
                    <p>&copy; 2024 Agência Script. Todos os direitos reservados.</p>
                    </div>
                    
                </div>
             </footer>

        </>
    );
};

export default Sections;
