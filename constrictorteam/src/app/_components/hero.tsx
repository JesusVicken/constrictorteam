


'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Hero() {
    const [isIOS, setIsIOS] = useState(false)

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out',
        })

        // Detecta iOS (iPhone/iPad)
        if (typeof window !== 'undefined') {
            const ua = window.navigator.userAgent
            const iOS = /iPad|iPhone|iPod/.test(ua) || (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
            setIsIOS(iOS)
        }
    }, [])

    // Classe condicional: remove bg-fixed no iOS
    const parallaxClass = isIOS
        ? 'relative h-[85vh] flex items-center justify-center bg-cover bg-center' // sem fixed
        : 'relative h-[85vh] flex items-center justify-center bg-fixed bg-cover bg-center'

    return (
        <main className="w-full text-white overflow-hidden bg-black">
            {/* --- PARALLAX 1: VÍDEO DE FUNDO --- */}
            <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="/cobra.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>

                <div className="relative z-10 flex flex-col items-center space-y-6 px-4">
                    <div data-aos="fade-down">
                        <Image
                            src="/logo.png"
                            alt="Constrictor Team"
                            width={400}
                            height={130}
                            priority
                            className="drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] brightness-110"
                        />
                        <div className="w-24 h-[2px] bg-white mx-auto mt-4 opacity-60"></div>
                    </div>
                </div>
            </section>

            {/* --- PARALLAX 2 --- */}
            <section
                className={parallaxClass}
                style={{ backgroundImage: 'url(/ataide.jpg)' }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div
                    className="relative z-10 text-center max-w-2xl px-6"
                    data-aos="fade-up"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-wide uppercase">
                        Um Legado de Excelência
                    </h2>
                    <p className="text-lg opacity-90 leading-relaxed text-gray-200">
                        <strong>Mestre Ataíde Ludgero Jr.</strong> — Fundador e líder da Constrictor Team, é faixa preta 6º grau de Jiu-Jitsu, registrado na CBJJ / IBJJF sob o nº 5.680.
                        Iniciou sua trajetória nas artes marciais aos 4 anos, no Judô, e desde então dedicou a vida ao aperfeiçoamento técnico e ao ensino.
                        Além do Jiu-Jitsu, possui graduações em Judô, Luta Livre, Taekwondo e Muay Thai, refletindo sua versatilidade e compromisso com a arte marcial.
                        Discípulo do lendário Mestre Armando Wriedt, Ataíde é reconhecido por sua excelência, disciplina e paixão por formar campeões dentro e fora dos tatames.
                        Fora das artes marciais, é biólogo, especialista em répteis e defensor ativo da sustentabilidade — um verdadeiro exemplo de dedicação, conhecimento e legado.
                    </p>
                </div>
            </section>

            {/* --- CONTEÚDO CENTRAL PRETO E BRANCO --- */}
            <section className="py-24 bg-[#111] text-gray-100 text-center px-6">
                <div className="max-w-3xl mx-auto space-y-6" data-aos="fade-up">
                    <h2 className="text-3xl font-extrabold uppercase tracking-widest text-white">
                        Transformando vidas por meio do Jiu-Jitsu
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-300">
                        No Constrictor Team – Instituto Vida Suave, acreditamos que o Jiu-Jitsu vai além do tatame: é uma filosofia de vida. Nosso projeto social tem como missão oferecer disciplina, respeito, saúde e desenvolvimento pessoal por meio da arte suave.
                    </p>
                </div>
            </section>

            {/* --- PARALLAX 3 --- */}
            <section
                className={parallaxClass}
                style={{ backgroundImage: 'url(/backg.png)' }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div
                    className="relative z-10 text-center max-w-2xl px-6"
                    data-aos="fade-up"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 uppercase tracking-wide">
                        Projeto Social Constrictor Team Instituto Vida Suave
                    </h2>
                    <p className="text-lg opacity-90 leading-relaxed text-gray-200">
                        Nossa missão é transformar vidas através do Jiu-Jitsu.
                        Mais do que um esporte, o Jiu-Jitsu é uma ferramenta de transformação social. O Instituto Vida Suave nasceu para oferecer oportunidades a crianças, jovens e adultos em situação de vulnerabilidade.
                        Com aulas regulares, acompanhamento, valores sólidos e um ambiente de respeito, o projeto promove educação, saúde, disciplina e inclusão.
                    </p>
                </div>
            </section>

            {/* --- FOTO CONSTRICTOR TEAM --- */}
            <section className="py-8 bg-black text-white text-center px-6">
                <div className="max-w-4xl mx-auto" data-aos="fade-up">
                    <div className="relative rounded-lg overflow-hidden shadow-2xl">
                        <Image
                            src="/constrictor.webp"
                            alt="Constrictor Team - Família"
                            width={1179}
                            height={719}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* --- PARALLAX 4: GRADUAÇÃO --- */}
            <section
                className={isIOS
                    ? 'relative h-[90vh] flex items-center justify-center bg-cover bg-center text-center'
                    : 'relative h-[90vh] flex items-center justify-center bg-fixed bg-cover bg-center text-center'}
                style={{
                    backgroundImage: 'url(/graduacao.jpeg)',
                    backgroundPosition: 'center 30%',
                }}
            >
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="relative z-10 max-w-3xl px-6" data-aos="fade-up">
                    <h2 className="text-4xl sm:text-5xl font-extrabold uppercase mb-6 text-yellow-400 drop-shadow-[0_0_15px_rgba(255,255,0,0.6)]">
                        Encontro Histórico de Faixas Pretas - Graduação 2025
                    </h2>
                    <p className="text-lg sm:text-xl leading-relaxed text-gray-200 mb-8">
                        Atenção, faixas pretas da <strong>Constrictor Team</strong> de todo o Brasil e do mundo!
                        Está chegando o maior encontro da nossa história — um marco de legado, honra e irmandade.
                    </p>

                    <div className="space-y-2 text-gray-300 text-base sm:text-lg">
                        <p>📅 <strong>Data:</strong> 29 de novembro de 2025</p>
                        <p>⏰ <strong>Horário:</strong> 11h da manhã</p>
                        <p>📍 <strong>Local:</strong> Centro de Treinamento Constrictor Team</p>
                        <p>👕 <strong>Traje obrigatório:</strong> Kimono branco</p>
                    </div>

                    <p className="mt-8 text-gray-300 italic">
                        ⚠️ Evento exclusivo e restrito a faixas pretas Constrictor Team.
                    </p>

                    <div className="mt-10">
                        <p className="text-lg text-gray-200 font-light max-w-xl mx-auto">
                            Venha honrar sua faixa e sua história neste grande encontro que simboliza o caminho, a força e o legado da nossa equipe.
                        </p>
                        <p className="mt-6 text-xl font-semibold text-white uppercase tracking-wider">
                            Constrictor Team – Honra, Técnica e Irmandade
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}
