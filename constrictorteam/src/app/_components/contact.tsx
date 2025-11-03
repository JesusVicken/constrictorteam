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
            <div className="container mx-auto px-4 py-16">
                {/* Informações e Contatos */}
                <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
                    {/* Sobre */}
                    <div data-aos="fade-up">
                        <div className="mb-6">
                            <Image
                                src="/constrictor.webp"
                                alt="Logo Constrictor Team"
                                width={200}
                                height={80}
                                priority
                                className="mx-auto md:mx-0"
                            />
                        </div>
                        <p className="mb-6 text-gray-300 leading-relaxed max-w-sm">
                            A <strong>Constrictor Team</strong> é referência em
                            jiu-jitsu, defesa pessoal e condicionamento físico.
                            Treine com os melhores professores e faça parte
                            dessa equipe campeã.
                        </p>
                        <a
                            href={whatsappLink}
                            // Cor original do WhatsApp para o botão
                            className="bg-[#25D366] text-white hover:bg-[#1DA851] px-6 py-3 rounded-md font-medium flex items-center justify-center md:justify-start gap-2 transition-colors w-full sm:w-fit"
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
                        <h3 className="text-2xl font-semibold mb-4 text-white">
                            Contatos
                        </h3>
                        <div className="space-y-3 text-gray-300">
                            <p className="flex items-center gap-2">
                                <Envelope className="text-gray-300 w-5 h-5" /> {/* Mantido cinza */}
                                constrictorteam@gmail.com
                            </p>
                            <p className="flex items-center gap-2">
                                <Phone className="text-gray-300 w-5 h-5" /> {/* Mantido cinza */}
                                (61) 99162-7171
                            </p>
                            <p className="flex items-start gap-2 max-w-xs">
                                <MapPin className="text-gray-300 w-5 h-5 flex-shrink-0" /> {/* Mantido cinza */}
                                Constrictor Team - Sede<br />
                                SIG Q. 1, Lote 385, Brasília - DF
                            </p>
                        </div>
                    </div>

                    {/* Redes Sociais */}
                    <div data-aos="fade-up" data-aos-delay="200">
                        <h3 className="text-2xl font-semibold mb-4 text-white">
                           Acompanhe nossas Redes Sociais
                        </h3>
                        <p className="mb-4 text-gray-300">
                            Siga a <strong>Constrictor Team</strong> e acompanhe
                            nossos treinos e eventos.
                        </p>
                        <div className="flex gap-5">
                            <a
                                href="https://www.facebook.com/Constrictorteam"
                                target="_blank"
                                rel="noopener noreferrer"
                                // Cor do Facebook
                                className="hover:text-blue-400 transition-colors text-[#1877F2]"
                                aria-label="Facebook"
                            >
                                <FacebookLogo className="w-8 h-8" />
                            </a>
                            <a
                                href="https://www.instagram.com/constrictorteam/"
                                target="_blank"
                                rel="noopener noreferrer"
                                // Cor aproximada do Instagram (o gradiente é mais complexo em CSS puro)
                                className="hover:text-pink-400 transition-colors text-[#E4405F]"
                                aria-label="Instagram"
                            >
                                <InstagramLogo className="w-8 h-8" />
                            </a>
                            {/* Opcional: Adicionar ícone do WhatsApp aqui também se quiser um link separado */}
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                // Cor do WhatsApp
                                className="hover:text-[#1DA851] transition-colors text-[#25D366]"
                                aria-label="WhatsApp"
                            >
                                <WhatsappLogo className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>

            {/* Mapa - Localização correta da Constrictor Team */}
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] border-t border-gray-700">
                <iframe
                    title="Constrictor Team Brasília"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.43166299863!2d-47.92540938515091!3d-15.795632889052042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3997e3357597%3A0xc4b7a1d1e4e4e4e!2sConstrictor%20Team%20-%20Sede!5e0!3m2!1spt-BR!2sbr!4v1678901234567!5m2!1spt-BR!2sbr"
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