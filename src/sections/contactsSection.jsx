import React, { useState } from 'react';
import { SendHorizontal } from 'lucide-react';
import emailjs from 'emailjs-com';
import Alert from '../components/alert';

export function ContactsSection() {
    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        email: '',
        descricao: ''
    });

    const [alertMessage, setAlertMessage] = useState('');
    const [isAlertOpen, setIsAlertOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_qxyfpv3', 'template_o2r4649', {
            to_name: 'Agência Script',
            from_name: formData.nome,
            telefone: formData.telefone,
            email: formData.email,
            descricao: formData.descricao 
        }, 'jhafmpc4JlA4_wPh1')
        .then((response) => {
            console.log('Mensagem enviada com sucesso!', response.status, response.text);
            setAlertMessage('Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.');
            setIsAlertOpen(true);
            setFormData({ nome: '', telefone: '', email: '', descricao: '' }); 
        })
        .catch((error) => {
            console.error('Erro ao enviar a mensagem:', error);
            setAlertMessage('Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.');
            setIsAlertOpen(true);
        });
    };

    const closeAlert = () => {
        setIsAlertOpen(false);
    };
    
    return (
        <section id="contatos" className="relative min-h-screen flex items-center overflow-hidden bg-zinc-950">
            <Alert isOpen={isAlertOpen} message={alertMessage} onClose={closeAlert} />
            <div className="container mx-auto px-4">
                <div className="mt-32 mb-24">
                    <h2 className="text-6xl font-semibold text-zinc-100 text-center mb-2">
                        Nos Conte Sua Ideia
                    </h2>
                    <p className="max-w-screen-lg mx-auto font-light text-zinc-400 text-center lg:mb-8 text-base lg:text-lg mb-12">
                        Conte-nos sobre seu projeto. Preencha o formulário e entraremos em contato para transformá-lo em realidade. Atendemos presencialmente na Serra da Ibiapaba, Ceará.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <form onSubmit={handleSubmit} className="bg-zinc-100 p-8 shadow-lg rounded-lg">
                        <div className="mb-6">
                            <label htmlFor="nome" className="block text-sm font-medium text-zinc-900 mb-2">Nome</label>
                            <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none" placeholder="Digite o nome (pessoa ou empresa)" required />
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="telefone" className="block text-sm font-medium text-zinc-900 mb-2">Telefone</label>
                                <input type="text" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none" placeholder="Digite o seu telefone" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-zinc-900 mb-2">E-mail</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none" placeholder="Digite o seu e-mail" required />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="descricao" className="block text-sm font-medium text-zinc-900 mb-2">Breve Descrição da Ideia</label>
                            <textarea id="descricao" name="descricao" rows="4" value={formData.descricao} onChange={handleChange} className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none" placeholder="Descreva brevemente sua ideia" required></textarea>
                        </div>
                        <button type="submit" className="w-full transform relative mt-6 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white rounded-full bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-800 transition-all">
                            Enviar Ideia
                            <SendHorizontal className="ml-2" />
                        </button>
                    </form>
                    <div className="shadow-lg rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127417.17241512718!2d-41.01008805687781!3d-3.6361116830823033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7eb471b50dc8603%3A0x983b3c28be7f6677!2sTiangu%C3%A1%2C%20CE%2C%2062320-000!5e0!3m2!1spt-BR!2sbr!4v1728838907168!5m2!1spt-BR!2sbr"
                            className="map"
                            width="100%"
                            height="500"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}