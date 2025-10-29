'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'

type Mestre = {
    name: string
    image: string
}

const linhagem: Mestre[] = [
    { name: 'Helio Grace', image: '/helio.webp' },
    { name: 'Armando Wriedt', image: '/wriedt.jpg' },
    { name: 'Ataíde Jr.', image: '/ataide.jpg' },
]

export default function LineageSection() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'center',
        skipSnaps: false,
        active: isMobile,
    })

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

    const lightAnimation = useAnimation()

    useEffect(() => {
        AOS.init({ duration: 800, once: true })

        if (emblaApi && !isMobile) {
            emblaApi.destroy()
        }

        if (!isMobile) {
            const animateLight = async () => {
                while (true) {
                    await lightAnimation.start({
                        x: 320,
                        transition: { duration: 1.8, ease: 'easeInOut' },
                    })
                    await lightAnimation.start({
                        x: 640,
                        transition: { duration: 1.8, ease: 'easeInOut' },
                    })
                    await lightAnimation.start({
                        x: 0,
                        transition: { duration: 2.5, ease: 'easeInOut' },
                    })
                }
            }
            animateLight()
        } else {
            lightAnimation.stop()
        }
    }, [lightAnimation, isMobile, emblaApi])

    return (
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
            {/* Background com overlay escuro */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/backg.png" // Certifique-se que esta imagem existe em /public
                    alt="Background"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>
            </div>

            <div className="container px-4 mx-auto">
                {/* Cabeçalho */}
                <div className="text-center mb-10 md:mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-5 tracking-tight leading-tight">
                        Linhagem do Nosso Mestre Ataíde Jr.
                    </h2>
                    <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                        A Constrictor Team carrega um legado profundo no mundo do Jiu-Jitsu Brasileiro,
                        com raízes que remontam ao Grão-Mestre Armando Wriedt, um dos primeiros faixas-pretas de Hélio Gracie.
                        Conheça os mestres que formaram a nossa escola.
                    </p>
                </div>

                <div className="relative flex justify-center items-center">
                    {/* Botões de navegação (apenas mobile) */}
                    {isMobile && (
                        <>
                            <button
                                onClick={scrollPrev}
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/10 hover:bg-white/20 rounded-full transition md:hidden"
                                aria-label="Scroll left"
                            >
                                <ChevronLeft className="text-white w-6 h-6" />
                            </button>
                            <button
                                onClick={scrollNext}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/10 hover:bg-white/20 rounded-full transition md:hidden"
                                aria-label="Scroll right"
                            >
                                <ChevronRight className="text-white w-6 h-6" />
                            </button>
                        </>
                    )}

                    {/* Linha conectiva com efeito de glow (apenas desktop) */}
                    {!isMobile && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 h-[4px] bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 blur-[1px] z-0 rounded-full w-[calc(100%-20rem)] max-w-[640px]">
                            {/* Ponto de luz animado */}
                            <motion.div
                                className="absolute -top-2.5 w-8 h-8 rounded-full bg-yellow-400 shadow-[0_0_20px_8px_rgba(255,255,100,0.8)]"
                                style={{ left: 0 }}
                                animate={lightAnimation}
                            />
                        </div>
                    )}

                    {/* Container dos Cards (Carrossel em mobile, Grid em desktop) */}
                    <div ref={emblaRef} className="overflow-hidden w-full md:overflow-visible">
                        <div
                            className={`flex relative z-10 ${isMobile
                                    ? 'gap-6 px-10'
                                    : 'justify-center gap-16 md:gap-24'
                                }`}
                        >
                            {linhagem.map((mestre, index) => (
                                <div
                                    key={index}
                                    className={`relative flex flex-col items-center ${isMobile ? 'flex-[0_0_75%]' : ''
                                        }`}
                                >
                                    {/* Card do Mestre */}
                                    <div
                                        data-aos="zoom-in-up"
                                        data-aos-delay={index * 150}
                                        className="flex flex-col items-center justify-center w-full max-w-[280px] bg-black/70 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl hover:scale-[1.07] transition-transform duration-400 ease-in-out border border-gray-600 hover:border-yellow-500/80"
                                    >
                                        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-yellow-500/80 shadow-[0_0_30px_rgba(255,255,100,0.4)] transform hover:scale-105 transition-transform duration-500 ease-out">
                                            <Image
                                                src={mestre.image}
                                                alt={mestre.name}
                                                fill
                                                sizes="(max-width: 768px) 160px, 192px"
                                                className="object-cover"
                                            />
                                        </div>
                                        <p className="mt-6 text-white font-extrabold text-center text-xl md:text-2xl drop-shadow-xl tracking-wide">
                                            {mestre.name}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}