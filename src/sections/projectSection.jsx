import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardProject from '../components/cardProject';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';

import empregaJovemMaisImg from '../assets/img/emprega-jovem-mais.png';
import catMessengerImg from '../assets/img/cat-messenger.png';
import sushiDaSerraImg from '../assets/img/sushi-da-serra.png';
import getQrImg from '../assets/img/get-qr.png';

export function ProjectSection() {
    return (
        <section id="projetos" className="relative min-h-screen flex items-center overflow-hidden bg-zinc-100">
            <div className="container mx-auto px-4">
                <div className="mb-12 sm:mb-24">
                    <h1 className="text-4xl sm:text-6xl font-semibold text-zinc-950 text-center mb-2">
                        Nossos Projetos
                    </h1>
                    <p className="max-w-screen-xl mx-auto font-light text-zinc-700 text-center lg:mb-8 text-sm sm:text-base lg:text-lg mb-8 sm:mb-12">
                        Conheça alguns projetos já desenvolvidos pela Script.
                    </p>
                </div>

                <div className="flex justify-center mx-auto">
                    <Swiper
                        className="max-w-screen-xl mx-auto"
                        modules={[Pagination]}
                        pagination={{ dynamicBullets: true }}
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <CardProject
                                title="Emprega Jovem +"
                                description="Sistema que gera currículos e divulga vagas de emprego."
                                imgUrl={empregaJovemMaisImg}
                                link="https://empregajovemmais.netlify.app/"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <CardProject
                                title="CatMessenger"
                                description="Sistema de mensagens em tempo real."
                                imgUrl={catMessengerImg}
                                link="https://catmessenger.vercel.app/"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <CardProject
                                title="Sushi da Serra"
                                description="Sistema de simulação de pedidos."
                                imgUrl={sushiDaSerraImg}
                                link="https://restaurante-sushi-da-serra.netlify.app/"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <CardProject
                                title="GetQr"
                                description="Sistema de criação e escaneamento de QrCodes."
                                imgUrl={getQrImg}
                                link="https://get-qrcode.netlify.app/"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
