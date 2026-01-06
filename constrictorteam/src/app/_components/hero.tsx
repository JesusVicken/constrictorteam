'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
// import AOS from 'aos' <--- REMOVER
// import 'aos/dist/aos.css' <--- REMOVER

export default function Hero() {
    const [isIOS, setIsIOS] = useState(false)

    useEffect(() => {
        // A lógica do AOS.init agora fica no seu componente init-aos.tsx
        // Não precisamos iniciar aqui de novo.

        // Detecta iOS (iPhone/iPad) para ajuste do Parallax
        if (typeof window !== 'undefined') {
            const ua = window.navigator.userAgent
            const iOS = /iPad|iPhone|iPod/.test(ua) || (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
            setIsIOS(iOS)
        }
    }, [])

    const parallaxClass = isIOS
        ? 'relative flex items-center justify-center bg-cover bg-center'
        : 'relative flex items-center justify-center bg-fixed bg-cover bg-center'

    return (
        <main className="w-full text-white overflow-hidden bg-black">
            
            {/* PARALLAX 1 */}
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

            {/* PARALLAX 2 */}
            <section
                className={`${isIOS ? 'relative h-[85vh]' : 'relative h-[85vh] bg-fixed'} flex items-center justify-center bg-cover bg-center`}
                style={{ backgroundImage: 'url(/ataide.jpg)' }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 text-center max-w-2xl px-6" data-aos="fade-up">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-wide uppercase">Um Legado de Excelência</h2>
                    <p className="text-lg opacity-90 leading-relaxed text-gray-200">
                        <strong>Mestre Ataíde Ludgero Jr.</strong> — Fundador e líder da Constrictor Team, é faixa preta 6º grau de Jiu-Jitsu.
                    </p>
                </div>
            </section>

            {/* SEÇÃO 3 */}
            <section className="py-24 bg-[#111] text-gray-100 text-center px-6">
                <div className="max-w-3xl mx-auto space-y-6" data-aos="fade-up">
                    <h2 className="text-3xl font-extrabold uppercase tracking-widest text-white">Transformando vidas</h2>
                    <p className="text-lg leading-relaxed text-gray-300">
                        No Constrictor Team – Instituto Vida Suave, acreditamos que o Jiu-Jitsu é uma filosofia de vida.
                    </p>
                </div>
            </section>

            {/* PARALLAX 3 */}
            <section
                className={`${isIOS ? 'relative h-[85vh]' : 'relative h-[85vh] bg-fixed'} flex items-center justify-center bg-cover bg-center`}
                style={{ backgroundImage: 'url(/backg.png)' }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 text-center max-w-2xl px-6" data-aos="fade-up">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 uppercase tracking-wide">Projeto Social</h2>
                    <p className="text-lg opacity-90 leading-relaxed text-gray-200">
                        Nossa missão é transformar vidas através do Jiu-Jitsu.
                    </p>
                </div>
            </section>

            {/* FOTO CONSTRICTOR */}
            <section className="py-8 bg-black text-white text-center px-6">
                <div className="max-w-4xl mx-auto" data-aos="fade-up">
                    <div className="relative rounded-lg overflow-hidden shadow-2xl">
                        <Image src="/constrictor.webp" alt="Constrictor Team" width={1179} height={719} className="w-full h-auto object-cover" />
                    </div>
                </div>
            </section>

            {/* PARALLAX 4: SEMINÁRIO KIM (Com Botão WhatsApp) */}
            <section className="relative w-full py-20 overflow-hidden flex items-center justify-center bg-black">
                <div
                    className={`absolute inset-0 opacity-40 blur-lg scale-110 pointer-events-none ${!isIOS ? 'bg-fixed' : ''}`}
                    style={{
                        backgroundImage: 'url(/seminarioKim.jpg)',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black"></div>

                <div className="relative z-10 px-4 max-w-5xl w-full flex flex-col items-center" data-aos="zoom-in">
                    <div className="relative w-full max-w-[600px] shadow-[0_0_50px_rgba(255,215,0,0.15)] rounded-xl overflow-hidden border border-white/10">
                        <Image
                            src="/seminarioKim.jpg"
                            alt="Seminário Kim Ludgero"
                            width={1024}
                            height={1365}
                            priority
                            className="w-full h-auto object-contain bg-black"
                        />
                    </div>

                    <div className="mt-12 text-center flex flex-col items-center">
                        <a
                            href="https://chat.whatsapp.com/CIlQtxdzx7nDjxMqmci8ki"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xl uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(37,211,102,0.6)] transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.8)]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                            </svg>
                            Entrar no Grupo 
                        </a>
                        <p className="mt-4 text-gray-400 text-sm max-w-md">
                            Entre no grupo para garantir sua vaga e receber o link de pagamento.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}