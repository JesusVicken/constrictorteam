'use client'

import { useEffect } from 'react'
import {
    FacebookLogo,
    InstagramLogo,
    WhatsappLogo,
    MapPin,
    Envelope,
    Phone,
} from '@phosphor-icons/react/dist/ssr'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'

export default function Contact() {
    const whatsappNumber = '61991627171'
    const whatsappMessage =
        'Olá, gostaria de agendar uma aula experimental na Constrictor Team.'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
    )}`

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out',
        })
    }, [])

    return (
        <section className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
                {/* Grade Responsiva Principal */}
                <footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* SOBRE */}
                    <div data-aos="fade-up">
                        <div className="flex flex-col items-center sm:items-start mb-6">
                            <Image
                                src="/constrictor.webp"
                                alt="Logo Constrictor Team"
                                width={220}
                                height={80}
                                priority
                                className="drop-shadow-md"
                            />
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-8 text-center sm:text-left">
                            A <strong>Constrictor Team</strong> é referência em
                            formar cidadãos conscientes.
                            Preparar para a vida com base em valores.
                            Construir autoestima e propósito.
                            Ensinar a filosofia do Jiu-Jitsu como caminho de superação.
                        </p>
                        <a
                            href={whatsappLink}
                            className="w-full sm:w-auto bg-[#25D366] text-white hover:bg-[#1DA851] transition-colors px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 shadow-md"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Fale conosco via WhatsApp"
                            data-aos="zoom-in"
                        >
                            <WhatsappLogo className="w-5 h-5" />
                            Vamos treinar!?
                        </a>
                    </div>

                    {/* CONTATOS */}
                    <div data-aos="fade-up" data-aos-delay="100">
                        <h3 className="text-2xl font-semibold mb-6 text-center sm:text-left">
                            Contatos
                        </h3>
                        <ul className="space-y-4 text-gray-300 text-center sm:text-left">
                            <li className="flex flex-col sm:flex-row sm:items-center justify-center sm:justify-start gap-2">
                                <Envelope className="text-gray-400 w-5 h-5 inline-block" />
                                <span>contato@constrictorteam.com.br</span>
                            </li>
                            <li className="flex flex-col sm:flex-row sm:items-center justify-center sm:justify-start gap-2">
                                <Phone className="text-gray-400 w-5 h-5 inline-block" />
                                <span>(61) 99874-8228</span>
                            </li>
                            <li className="flex gap-2 justify-center sm:justify-start items-start text-sm leading-relaxed">
                                <MapPin className="text-gray-400 w-5 h-5 flex-shrink-0 mt-1" />
                                <span>
                                    Centro de Treinamento Constrictor Team - Sede<br />
                                    Parque da Cidade, Estacionamento 08 - Brasília/DF<br />
                                    Unidades e filiais por todo o Brasil
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* REDES SOCIAIS */}
                    <div data-aos="fade-up" data-aos-delay="200">
                        <h3 className="text-2xl font-semibold mb-6 text-center sm:text-left">
                            Acompanhe nas Redes
                        </h3>
                        <p className="text-gray-300 mb-6 text-center sm:text-left leading-relaxed">
                            Siga a <strong>Constrictor Team</strong> e fique por dentro
                            dos nossos treinos, eventos e conquistas.
                        </p>
                        <div className="flex justify-center sm:justify-start gap-6">
                            <a
                                href="https://www.facebook.com/Constrictorteam"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#1877F2] hover:scale-110 transition-transform"
                                aria-label="Facebook"
                            >
                                <FacebookLogo className="w-8 h-8" />
                            </a>
                            <a
                                href="https://www.instagram.com/constrictorteam/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#E4405F] hover:scale-110 transition-transform"
                                aria-label="Instagram"
                            >
                                <InstagramLogo className="w-8 h-8" />
                            </a>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#25D366] hover:scale-110 transition-transform"
                                aria-label="WhatsApp"
                            >
                                <WhatsappLogo className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>

            {/* MAPA RESPONSIVO */}
            <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[450px] border-t border-gray-700">
                <iframe
                    title="Constrictor Team Brasília"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.000338429802!2d-47.9170703!3d-15.8087543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b896d8b3de5%3A0x54ddfa28bf4248bb!2sConstrictor%20Team!5e0!3m2!1spt-BR!2sbr!4v1730816823000!5m2!1spt-BR!2sbr"
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                    style={{ border: 0 }}
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            {/* COPYRIGHT / RODAPÉ FINAL */}
            <div className="text-center text-gray-500 py-6 text-sm border-t border-gray-800">
                © {new Date().getFullYear()} Constrictor Team — Todos os direitos reservados.
            </div>
        </section>
    )
}
