'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import gsap from 'gsap'
import AOS from 'aos'
import 'aos/dist/aos.css'

type Mestre = {
    name: string
    image: string
    description?: string
}

const linhagem: Mestre[] = [
    {
        name: 'Hélio Gracie',
        image: '/helio.webp',
        description: 'Fundador do Gracie Jiu-Jitsu'
    },
    {
        name: 'Armando Wriedt',
        image: '/wriedt.jpg',
        description: 'Uma das primeiras faixas-pretas de Hélio Gracie'
    },
    {
        name: 'Ataíde Jr.',
        image: '/ataide.jpg',
        description: 'Nosso Mestre e Fundador da Constrictor Team'
    }
]

export default function LineageSection() {
    const [isMobile, setIsMobile] = useState(false)
    const [isTablet, setIsTablet] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const [selectedIndex, setSelectedIndex] = useState(0)

    // Responsividade
    useEffect(() => {
        const checkDevice = () => {
            const width = window.innerWidth
            setIsMobile(width < 768)
            setIsTablet(width >= 768 && width < 1024)
        }
        checkDevice()
        window.addEventListener('resize', checkDevice)
        return () => window.removeEventListener('resize', checkDevice)
    }, [])

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'center',
        dragFree: false,
        skipSnaps: false,
        breakpoints: {
            '(min-width: 768px)': { active: false }
        }
    })

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

    // Atualiza índice selecionado
    useEffect(() => {
        if (!emblaApi) return
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
        emblaApi.on('select', onSelect)
        onSelect()
        return () => emblaApi.off('select', onSelect)
    }, [emblaApi])

    // GSAP + AOS
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
            disable: isMobile
        })

        if (containerRef.current) {
            const cards = containerRef.current.querySelectorAll('.mestre-card')
            const tl = gsap.timeline()

            if (isMobile) {
                tl.fromTo(
                    cards,
                    { opacity: 0, x: 50, scale: 0.9 },
                    {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        duration: 0.6,
                        stagger: 0.2,
                        ease: 'power2.out',
                        delay: 0.1
                    }
                )
            } else {
                tl.fromTo(
                    cards,
                    { opacity: 0, y: 60, scale: 0.85 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        stagger: 0.3,
                        ease: 'back.out(1.7)',
                        delay: 0.2
                    }
                )
            }
        }
    }, [isMobile])

    return (
        <section className="relative text-white py-12 md:py-20 lg:py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/backg2.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-40"
                    priority
                    sizes="100vw"
                    quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/85 to-black/95"></div>
            </div>

            <div className="container px-4 mx-auto max-w-7xl">
                {/* Cabeçalho */}
                <div className="text-center mb-8 md:mb-16 lg:mb-20" data-aos="fade-up">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 lg:mb-5 tracking-tight leading-tight px-2">
                        Linhagem do Nosso <span className="text-yellow-400">Mestre Ataíde Jr.</span>
                    </h2>
                    <p className="text-gray-300 max-w-3xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed px-3">
                        A Constrictor Team carrega um legado profundo no Jiu-Jitsu Brasileiro, com raízes que remontam ao Grão-Mestre Armando Wriedt, um dos primeiros faixas-pretas de Hélio Gracie.
                    </p>
                </div>

                <div className="relative">
                    {/* Container principal */}
                    <div className="relative flex justify-center items-center pt-4 md:pt-0">
                        {/* Navegação mobile/tablet */}
                        {(isMobile || isTablet) && (
                            <>
                                <button
                                    onClick={scrollPrev}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full transition-all duration-300 hover:scale-110 active:scale-95 border border-white/20"
                                    aria-label="Anterior"
                                >
                                    <ChevronLeft className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                                <button
                                    onClick={scrollNext}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full transition-all duration-300 hover:scale-110 active:scale-95 border border-white/20"
                                    aria-label="Próximo"
                                >
                                    <ChevronRight className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                            </>
                        )}

                        {/* Linha conectiva desktop */}
                        {!isMobile && (
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent z-0 rounded-full ${isTablet ? 'w-[calc(100%-8rem)] max-w-[400px]' : 'w-[calc(100%-12rem)] max-w-[560px]'
                                }`}>
                                {linhagem.map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute -top-1 w-3 h-3 rounded-full bg-yellow-400/50"
                                        style={{
                                            left: `${(i / (linhagem.length - 1)) * 100}%`,
                                            transform: 'translateX(-50%)'
                                        }}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Container do Carousel */}
                        <div
                            ref={emblaRef}
                            className={`overflow-hidden w-full max-w-6xl ${!isMobile ? 'md:overflow-visible' : ''}`}
                        >
                            <div
                                ref={containerRef}
                                className={`flex relative ${isMobile
                                    ? 'gap-6 px-4 touch-pan-x snap-x snap-mandatory'
                                    : isTablet
                                        ? 'justify-center gap-10 lg:gap-14'
                                        : 'justify-center gap-12 lg:gap-20'
                                    }`}
                            >
                                {linhagem.map((mestre, index) => (
                                    <div
                                        key={index}
                                        className={`mestre-card flex flex-col items-center flex-shrink-0 ${isMobile
                                            ? 'w-[80vw] sm:w-[60vw] snap-center'
                                            : 'w-auto'
                                            }`}
                                        data-aos={!isMobile ? "fade-up" : undefined}
                                        data-aos-delay={!isMobile ? index * 100 : undefined}
                                    >
                                        {/* Container da imagem */}
                                        <div className={`
                      relative flex flex-col items-center
                      ${isMobile
                                                ? 'w-36 h-36 mb-4 mt-4'
                                                : isTablet
                                                    ? 'w-40 h-40 lg:w-44 lg:h-44 mb-5'
                                                    : 'w-48 h-48 lg:w-52 lg:h-52 mb-6'
                                            }
                    `}>
                                            {/* Imagem do mestre */}
                                            <div className={`
                        relative rounded-full overflow-hidden border-3 transition-all duration-500 w-full h-full
                        ${isMobile
                                                    ? 'border-yellow-400 shadow-lg'
                                                    : isTablet
                                                        ? 'border-yellow-400/80 shadow-xl hover:shadow-2xl'
                                                        : 'border-yellow-400/90 shadow-2xl hover:shadow-3xl'
                                                }
                        ${selectedIndex === index && (isMobile || isTablet)
                                                    ? 'ring-3 ring-yellow-400 scale-105'
                                                    : ''
                                                }
                        ${!isMobile ? 'hover:scale-105 transition-transform duration-300' : ''}
                      `}>
                                                <Image
                                                    src={mestre.image}
                                                    alt={mestre.name}
                                                    fill
                                                    sizes={`
                            ${isMobile ? '144px' :
                                                            isTablet ? '160px' : '192px'
                                                        }
                          `}
                                                    className="object-cover"
                                                    priority={index === 0}
                                                    style={{
                                                        objectPosition: 'center top'
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        {/* Informações do Mestre - CENTRALIZADO no mobile */}
                                        <div className="text-center space-y-2 w-full max-w-[280px] mt-4 md:mt-6 mx-auto">
                                            <h3 className={`
                        text-white font-bold drop-shadow-lg tracking-wide
                        ${isMobile
                                                    ? 'text-lg text-center w-full'
                                                    : isTablet
                                                        ? 'text-xl lg:text-2xl'
                                                        : 'text-2xl lg:text-3xl'
                                                }
                      `}>
                                                {mestre.name}
                                            </h3>
                                            {mestre.description && (
                                                <p className={`
                          text-gray-300 leading-tight text-center
                          ${isMobile
                                                        ? 'text-xs max-w-[200px] mx-auto'
                                                        : isTablet
                                                            ? 'text-sm lg:text-base max-w-[240px]'
                                                            : 'text-base lg:text-lg max-w-[260px]'
                                                    }
                        `}>
                                                    {mestre.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Indicadores de progresso mobile/tablet */}
                    {(isMobile || isTablet) && (
                        <div className="flex flex-col items-center mt-6 md:mt-8 space-y-4">
                            <div className="flex justify-center space-x-3">
                                {linhagem.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`transition-all duration-300 rounded-full ${selectedIndex === index
                                            ? 'bg-yellow-400 scale-110'
                                            : 'bg-gray-600 hover:bg-gray-500'
                                            } ${isMobile ? 'w-8 h-2' : 'w-10 h-2'
                                            }`}
                                        onClick={() => emblaApi?.scrollTo(index)}
                                        aria-label={`Ver ${linhagem[index].name}`}
                                    />
                                ))}
                            </div>

                            {/* Contador */}
                            <div className="text-gray-400 text-sm">
                                <span className="text-yellow-400 font-bold">{selectedIndex + 1}</span>
                                <span className="mx-2">de</span>
                                <span>{linhagem.length}</span>
                            </div>
                        </div>
                    )}

                    {/* Instrução para mobile */}
                    {isMobile && (
                        <div className="text-center mt-4">
                            <p className="text-gray-400 text-xs animate-pulse">
                                👆 Toque e arraste para navegar
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}