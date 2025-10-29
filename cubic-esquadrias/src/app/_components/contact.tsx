'use client'

import { useEffect } from 'react'
import {
    FacebookLogo,
    InstagramLogo,
    YoutubeLogo,
    WhatsappLogo,
    MapPin,
    Envelope,
    Phone
} from '@phosphor-icons/react/dist/ssr'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'

export default function Contact() {
    const whatsappNumber = '61994258350'
    const whatsappMessage = 'Olá, gostaria de orçar com a Cubic Esquadrias.'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out'
        })
    }, [])

    return (
        <section className="bg-black text-white">
            <div className="container mx-auto px-4 py-16">
                {/* Informações e Contatos */}
                <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {/* Sobre */}
                    <div data-aos="fade-up">
                        <div className="mb-4">
                            <Image
                                src="/logo2.png"
                                alt="Logo Cubic Esquadrias"
                                width={180}
                                height={60}
                                priority
                            />
                        </div>
                        <p className="mb-6 text-gray-300">
                            Excelência em esquadrias de alumínio sob medida para seu projeto em Brasília.
                        </p>
                        <a
                            href={whatsappLink}
                            className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-md font-medium flex items-center justify-center w-fit gap-2 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            <WhatsappLogo className="w-5 h-5" />
                            Contato via WhatsApp
                        </a>
                    </div>

                    {/* Contatos */}
                    <div data-aos="fade-up" data-aos-delay="100">
                        <h3 className="text-2xl font-semibold mb-4">Contatos</h3>
                        <div className="space-y-3">
                            <p className="flex items-center gap-2">
                                <Envelope className="text-yellow-500 w-5 h-5" />
                                contato@cubicesquadrias.com.br
                            </p>
                            <p className="flex items-center gap-2">
                                <Phone className="text-yellow-500 w-5 h-5" />
                                (61) 99425-8350
                            </p>
                            <p className="flex items-start gap-2">
                                <MapPin className="text-yellow-500 w-5 h-5 flex-shrink-0" />
                                Brasília - DF
                            </p>
                        </div>
                    </div>

                    {/* Redes Sociais */}
                    <div data-aos="fade-up" data-aos-delay="200">
                        <h3 className="text-2xl font-semibold mb-4">Redes Sociais</h3>
                        <p className="mb-4 text-gray-300">Siga a Cubic para ver nossos projetos e novidades</p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/cubicesquadr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-400 transition-colors text-yellow-500"
                                aria-label="Facebook"
                            >
                                <FacebookLogo className="w-8 h-8" />
                            </a>
                            <a
                                href="https://www.instagram.com/cubicesquadrias/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-400 transition-colors text-yellow-500"
                                aria-label="Instagram"
                            >
                                <InstagramLogo className="w-8 h-8" />
                            </a>
                            <a
                                href="https://www.youtube.com/@cubicesquadrias"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-400 transition-colors text-yellow-500"
                                aria-label="YouTube"
                            >
                                <YoutubeLogo className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>

            {/* Mapa da Esplanada dos Ministérios */}
            <div className="w-full h-[300px] md:h-[400px] lg:h-[450px]">
                <iframe
                    title="Brasília, Distrito Federal"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245795.716750481!2d-48.1419609!3d-15.7214313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3d18d9b105ef%3A0x1c3ccb0d81a161b2!2zQnJhc8OtbGlhLCBERg!5e0!3m2!1spt-BR!2sbr!4v1712345678901!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    style={{ border: 0 }}
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    )
}