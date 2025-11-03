'use client'

import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import {
    FacebookLogo,
    InstagramLogo,
    YoutubeLogo,
    WhatsappLogo,
    MapPin,
    Envelope,
    Phone,
} from '@phosphor-icons/react/dist/ssr'

export default function SobrePage() {
    const [isMobile, setIsMobile] = useState(false)
    const whatsappNumber = '6191627171'
    const whatsappMessage = 'Olá, gostaria de mais informações sobre a Constrictor Team.'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)

        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
        })

        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    return (
        <>
            {/* Seção principal com vídeo de fundo */}
            <section className="relative w-full min-h-screen flex items-center justify-center py-20 lg:py-0 overflow-hidden">
                {/* Vídeo de fundo */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="/bgcobra.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>

                {/* Overlay gradiente para melhor contraste */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

                {/* Conteúdo textual */}
                <div className="relative z-10 max-w-6xl px-4 sm:px-6 lg:px-8 text-white">
                    <div className="text-center mb-8 lg:mb-12" data-aos="fade-down">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Constrictor Team
                        </h1>
                        <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-6 lg:space-y-8 max-w-4xl mx-auto">
                        <div
                            className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-yellow-500/30 transition-all duration-500"
                            data-aos="fade-right"
                        >
                            <p className="text-base sm:text-lg lg:text-xl leading-relaxed lg:leading-loose text-gray-100">
                                A <strong className="text-yellow-400">Constrictor Team</strong> é uma equipe familiar de Jiu-Jitsu Brasileiro, MMA, Luta Livre e Judô, liderada pelo Mestre <strong className="text-yellow-400">Ataíde Ludgero Júnior</strong>. Com raízes que remontam ao Grão-Mestre Armando Wriedt — um dos primeiros faixas-pretas de Hélio Gracie — a equipe carrega um legado profundo no mundo do Jiu-Jitsu e das artes marciais.
                            </p>
                        </div>

                        <div
                            className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-yellow-500/30 transition-all duration-500"
                            data-aos="fade-left"
                            data-aos-delay="100"
                        >
                            <p className="text-base sm:text-lg lg:text-xl leading-relaxed lg:leading-loose text-gray-100">
                                Originalmente estabelecida como Ataíde Junior Top Team, o grupo concentrou-se em dominar torneios de Jiu-Jitsu, competindo ocasionalmente em Vale-Tudo. Durante esse período, a eficácia de um estilo único de Jiu-Jitsu, mais tarde conhecido como <strong className="text-yellow-400">Jiu-Jitsu Constrictor</strong>, foi demonstrada.
                            </p>
                        </div>

                        <div
                            className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-yellow-500/30 transition-all duration-500"
                            data-aos="fade-right"
                            data-aos-delay="200"
                        >
                            <p className="text-base sm:text-lg lg:text-xl leading-relaxed lg:leading-loose text-gray-100">
                                Este estilo foi desenvolvido pelo Mestre Ataíde Júnior, inspirado por sua formação como biólogo. Inspirado nas técnicas de caça eficientes das serpentes constritoras, o sistema enfatiza <strong className="text-yellow-400">pressão, controle e estratégia</strong> — eficazes no Jiu-Jitsu, MMA e outras artes de luta agarrada.
                            </p>
                        </div>

                        <div
                            className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-yellow-500/30 transition-all duration-500"
                            data-aos="fade-left"
                            data-aos-delay="300"
                        >
                            <p className="text-base sm:text-lg lg:text-xl leading-relaxed lg:leading-loose text-gray-100">
                                Hoje, a Constrictor Team é reconhecida mundialmente, com atletas que competem em organizações como <strong className="text-yellow-400">UFC, ONE Championship e Shooto Brasil</strong>. Além de formar campeões, a equipe promove disciplina, respeito e integridade, incorporando Jiu-Jitsu, Luta Livre e Judô.
                            </p>
                        </div>

                        <div
                            className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-yellow-500/30 transition-all duration-500"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <p className="text-base sm:text-lg lg:text-xl leading-relaxed lg:leading-loose text-gray-100">
                                Mestre Ataíde Ludgero Júnior começou nas artes marciais aos quatro anos, conquistou a faixa preta na Academia de Judô Miura e treinou diversas modalidades. Formou-se faixa-preta em Jiu-Jitsu sob Armando Wriedt, desenvolvendo seu estilo único baseado em controle e pressão. Atualmente, detém a <strong className="text-yellow-400">faixa preta de 6º grau</strong>, inspirando gerações de artistas marciais em todo o mundo.
                            </p>
                        </div>
                    </div>

                    {/* CTA Mobile */}
                    {isMobile && (
                        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50" data-aos="zoom-in" data-aos-delay="500">
                            <a
                                href={whatsappLink}
                                className="bg-green-600 hover:bg-green-700 px-6 py-4 rounded-full font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-2xl hover:shadow-green-500/25 hover:scale-105"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <WhatsappLogo className="w-6 h-6" />
                                <span>Fale Conosco</span>
                            </a>
                        </div>
                    )}
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce" data-aos="fade-up" data-aos-delay="600">
                    <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-yellow-500 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* Contato e Redes Sociais */}
            <section className="bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
                    <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Entre em Contato
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Pronto para começar sua jornada nas artes marciais?
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12 lg:mb-16">
                        {/* Sobre */}
                        <div
                            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-500"
                            data-aos="fade-up"
                        >
                            <div className="flex flex-col items-center text-center mb-6">
                                <div className="mb-4 transform hover:scale-105 transition-transform duration-300">
                                    <Image
                                        src="/logo1234.png"
                                        alt="Logo Constrictor Team"
                                        width={200}
                                        height={70}
                                        priority
                                        className="drop-shadow-lg"
                                    />
                                </div>
                                <p className="text-gray-300 mb-6 text-sm lg:text-base">
                                    Excelência em Jiu-Jitsu Brasileiro e artes marciais com a liderança do Mestre Ataíde Jr.
                                </p>
                            </div>
                            {!isMobile && (
                                <a
                                    href={whatsappLink}
                                    className="w-full bg-green-600 hover:bg-green-700 px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <WhatsappLogo className="w-6 h-6" />
                                    Contato via WhatsApp
                                </a>
                            )}
                        </div>

                        {/* Contatos */}
                        <div
                            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-500"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-center lg:text-left">Contatos</h3>
                            <div className="space-y-4 lg:space-y-5">
                                <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors duration-300">
                                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                                        <Envelope className="text-yellow-500 w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Email</p>
                                        <p className="text-white font-medium">contato@constrictorteam.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors duration-300">
                                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                                        <Phone className="text-yellow-500 w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Telefone</p>
                                        <p className="text-white font-medium">(61) 99162-7171</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors duration-300">
                                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center mt-1">
                                        <MapPin className="text-yellow-500 w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Localização</p>
                                        <p className="text-white font-medium">Brasília - DF</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Redes Sociais */}
                        <div
                            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-500"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-center lg:text-left">Redes Sociais</h3>
                            <p className="mb-6 text-gray-300 text-center lg:text-left">
                                Siga a Constrictor Team para acompanhar treinos, eventos e novidades
                            </p>
                            <div className="flex justify-center lg:justify-start gap-4 lg:gap-6">
                                <a
                                    href="https://www.facebook.com/constrictorteam"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 lg:w-14 lg:h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25"
                                    aria-label="Facebook"
                                >
                                    <FacebookLogo className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                                </a>
                                <a
                                    href="https://www.instagram.com/constrictorteam/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/25"
                                    aria-label="Instagram"
                                >
                                    <InstagramLogo className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                                </a>
                                <a
                                    href="https://www.youtube.com/@constrictorteam"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 lg:w-14 lg:h-14 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-red-500/25"
                                    aria-label="YouTube"
                                >
                                    <YoutubeLogo className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Mapa */}
                    <div
                        className="rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                    >
                        <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
                            <iframe
                                title="Brasília, Distrito Federal"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245795.716750481!2d-48.1419609!3d-15.7214313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3d18d9b105ef%3A0x1c3ccb0d81a161b2!2zQnJhc8OtbGlhLCBERg!5e0!3m2!1spt-BR!2sbr!4v1712345678901!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                loading="lazy"
                                style={{ border: 0 }}
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                className="filter grayscale hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}