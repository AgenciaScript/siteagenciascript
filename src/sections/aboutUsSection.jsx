import React, { useState } from 'react';
import Modal from '../components/modal';
import profileLuan from '../assets/img/profile-luan.svg';
import profileThainara from '../assets/img/profile-thainara.svg';

const miniCurriculos = [
    {
        name: "Luan Rodrigues",
        description: "Desenvolvedor de software e estudante de Sistemas de Informação na FIED/UNINTA. Experiência em desenvolvimento de aplicações web e mobile, utilizando tecnologias como PHP, JavaScript, Typescript, ReactJs, NodeJs e Java.",
        imageUrl: profileLuan, 
        linkedInUrl: "https://www.linkedin.com/in/luanrodriguesti/",
        email: "luanrodrigues.contatoprofissional@outlook.com",
    },
    {
        name: "Thainara Marques",
        description: "Desenvolvedora de software e estudante de Ciência da Computação com foco em Desenvolvimento Web e Design. Busco criar soluções que combinam estética e funcionalidade para melhorar a experiência do usuário.",
        imageUrl: profileThainara, 
        linkedInUrl: "https://www.linkedin.com/in/thainara-marques-da-costa-73a526237/",
        email: "thainara.marques.profissional@gmail.com",
    },
];

export function AboutUsSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentCurriculo, setCurrentCurriculo] = useState({});

    const handleOpenModal = (curriculo) => {
        setCurrentCurriculo(curriculo);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentCurriculo({});
    };

    return (
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
                        A Agência Script, fundada por
                        <span className="font-bold text-zinc-300 cursor-pointer" onClick={() => handleOpenModal(miniCurriculos[0])}> Luan Rodrigues </span>
                        e
                        <span className="font-bold text-zinc-300 cursor-pointer" onClick={() => handleOpenModal(miniCurriculos[1])}> Thainara Marques </span>, é especializada no desenvolvimento de soluções de software para dispositivos mobile, desktop e web. Nosso foco está em criar aplicativos, sites e sistemas sob medida que atendem às demandas e desafios específicos de cada cliente. Utilizamos tecnologias avançadas e metodologias ágeis para garantir que nossos produtos sejam robustos, eficientes e escaláveis. Combinamos expertise técnica com uma abordagem centrada no usuário para entregar soluções que realmente fazem a diferença.
                    </p>
                    <Modal
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                        name={currentCurriculo.name}
                        description={currentCurriculo.description}
                        imageUrl={currentCurriculo.imageUrl}
                        linkedInUrl={currentCurriculo.linkedInUrl}
                        email={currentCurriculo.email}
                    />
                </div>
            </div>
        </section>
    );
}
