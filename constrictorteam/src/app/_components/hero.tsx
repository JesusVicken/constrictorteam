'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Hero() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out',
        })
    }, [])

    return (
        <main className="w-full text-white overflow-hidden bg-black">
            {/* --- SEÇÃO 1: VÍDEO DE FUNDO --- */}
            <section className="relative min-h-[100dvh] flex items-center justify-center text-center overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="/bgcobra.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/bgcobra-fallback.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>

                <div className="relative z-10 flex flex-col items-center space-y-6 px-4">
                    <div data-aos="fade-down">
                        <Image
                            src="/logo.png"
                            alt="Constrictor Team"
                            width={350}
                            height={120}
                            priority
                            className="drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] brightness-110 max-w-[80vw]"
                        />
                        <div className="w-20 sm:w-24 h-[2px] bg-white mx-auto mt-4 opacity-60"></div>
                    </div>
                </div>
            </section>

            {/* --- SEÇÃO 2: PARALLAX / IMAGEM --- */}
            <section
                className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundAttachment: 'scroll', // fallback pro mobile
                    backgroundImage: 'url(/ataide.jpg)',
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 text-center max-w-2xl px-6" data-aos="fade-up">
                    <h2 className="text-2xl sm:text-4xl font-bold mb-4 uppercase tracking-wide">
                        Um Legado de Excelência
                    </h2>
                    <p className="text-base sm:text-lg opacity-90 leading-relaxed text-gray-200">
                        Liderada pela família Ludgero, a Constrictor Team carrega a tradição do
                        Grão-Mestre Armando Wriedt, um dos primeiros faixas-pretas de Hélio
                        Gracie. Mais de quatro décadas moldando campeões no Jiu-Jitsu, MMA e
                        artes marciais.
                    </p>
                </div>
            </section>

            {/* --- CONTEÚDO CENTRAL --- */}
            <section className="py-20 sm:py-24 bg-[#111] text-gray-100 text-center px-6">
                <div className="max-w-3xl mx-auto space-y-6" data-aos="fade-up">
                    <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-widest text-white">
                        A Filosofia Constrictor
                    </h2>
                    <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                        Inspirado nas serpentes constritoras, nosso estilo único de Jiu-Jitsu
                        enfatiza pressão, controle e estratégia. Uma abordagem precisa e
                        científica desenvolvida pelo Mestre Ataíde Junior — eficaz no
                        Jiu-Jitsu, MMA, Luta Livre e Judô.
                    </p>
                </div>
            </section>

            {/* --- SEÇÃO 3: PARALLAX FINAL --- */}
            <section
                className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundAttachment: 'scroll',
                    backgroundImage: 'url(/constrictor.webp)',
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 text-center max-w-2xl px-6" data-aos="fade-up">
                    <h2 className="text-2xl sm:text-4xl font-bold mb-4 uppercase tracking-wide">
                        Campeões Mundiais
                    </h2>
                    <p className="text-base sm:text-lg opacity-90 leading-relaxed text-gray-200">
                        Formamos atletas de elite que competem nas maiores organizações do
                        mundo: UFC, ONE Championship e Shooto Brasil. Nomes como Rani Yahya,
                        Renato Moicano, Paulo Thiago e Adriano Moraes carregam nossa bandeira
                        com honra e tradição.
                    </p>
                </div>
            </section>

            {/* --- SEÇÃO FINAL: VALORES --- */}
            <section className="py-20 sm:py-24 bg-black text-white text-center px-6">
                <div className="max-w-5xl mx-auto" data-aos="fade-up">
                    <h2 className="text-2xl sm:text-3xl font-extrabold mb-12 uppercase tracking-widest">
                        Mais que uma Equipe, uma Família
                    </h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {[
                            { icon: '👑', title: 'Tradição', text: 'Raízes no Jiu-Jitsu clássico, com legado que remonta aos primórdios da arte suave.' },
                            { icon: '⚡', title: 'Inovação', text: 'Sistema tático e científico de Jiu-Jitsu Constrictor, aprimorado por décadas de experiência.' },
                            { icon: '🌎', title: 'Global', text: 'Presente no Brasil e Austrália, levando nossa filosofia marcial além das fronteiras.' },
                        ].map((item, i) => (
                            <div key={i} className="space-y-5">
                                <div className="w-14 h-14 border border-white/30 rounded-full mx-auto flex items-center justify-center hover:bg-white/10 transition">
                                    <span className="text-2xl">{item.icon}</span>
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold uppercase">{item.title}</h3>
                                <p className="text-gray-400 text-sm sm:text-base">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
