
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardProject from '../components/cardProject';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';

export function ProjectSection() {
    return (
        <section id="projetos" className="relative min-h-screen flex items-center overflow-hidden bg-zinc-100">
            <div className="container mx-auto px-4">
                <div className="mb-24">
                    <h1 className="text-6xl font-semibold text-zinc-950 text-center mb-2">
                        Nossos Projetos
                    </h1>
                    <p className="max-w-screen-xl mx-auto font-light text-zinc-700 text-center lg:mb-8 text-base lg:text-lg mb-12">
                        Conheça alguns projetos já desenvolvidos pela Script.
                    </p>
                </div>

                <div className="flex justify-center mx-auto">
                    <Swiper className="mt-24-12 max-w-screen-xl mx-auto" modules={[Pagination]} pagination={{ dynamicBullets: true }} spaceBetween={20} slidesPerView={1}
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
    );
}