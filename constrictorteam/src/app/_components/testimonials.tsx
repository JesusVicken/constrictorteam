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
    role?: string
}

const linhagem: Mestre[] = [
    {
        name: 'Hélio Gracie',
        image: '/helio.webp',
        role: 'O Patriarca',
        description: 'Fundador do Gracie Jiu-Jitsu'
    },
    {
        name: 'Armando Wriedt',
        image: '/wriedt.jpg',
        role: 'Grão-Mestre',
        description: 'Uma das primeiras faixas-pretas de Hélio Gracie'
    },
    {
        name: 'Mestre Popó',
        image: '/popo.jpeg',
        role: 'Nosso Mestre',
        description: 'Pai do Mestre Ataíde e pilar da Constrictor Team'
    },
    {
        name: 'Ataíde Jr.',
        image: '/ataide.jpg',
        role: 'Fundador',
        description: 'Líder e Fundador da Constrictor Team'
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

    useEffect(() => {
        if (!emblaApi) return

        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
        emblaApi.on('select', onSelect)
        onSelect()

        return () => {
            emblaApi.off('select', onSelect)
        }
    }, [emblaApi])

    // GSAP + AOS
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
            disable: isMobile
        })

        let tl: gsap.core.Timeline | null = null;

        if (containerRef.current) {
            const cards = containerRef.current.querySelectorAll('.mestre-card')
            tl = gsap.timeline()

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
            }
            else {
                tl.fromTo(
                    cards,
                    { opacity: 0, y: 60, scale: 0.85 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: 'back.out(1.7)',
                        delay: 0.2
                    }
                )
            }
        }

        return () => {
            if (tl) tl.kill()
        }
    }, [isMobile])

    return (
        <section className="relative text-white py-12 md:py-20 lg:py-24 overflow-hidden min-h-[600px] flex flex-col justify-center">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/backg2.jpg"
                    alt="Background Dojo"
                    fill
                    className="object-cover opacity-30"
                    priority
                    sizes="100vw"
                    quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
            </div>

            <div className="container px-4 mx-auto max-w-7xl">
                {/* Cabeçalho */}
                <div className="text-center mb-10 md:mb-16" data-aos="fade-up">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight">
                        Linhagem da<span className="text-yellow-500"> Constrictor Team</span>
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base lg:text-lg leading-relaxed px-4">
                        Honrando o passado para fortalecer o futuro. Nossas raízes no Jiu-Jitsu Brasileiro.
                    </p>
                </div>

                <div className="relative">
                    {/* Container principal */}
                    <div className="relative flex justify-center items-center">

                        {/* Botões de Navegação (Apenas Mobile/Tablet) */}
                        {(isMobile || isTablet) && (
                            <>
                                <button
                                    onClick={scrollPrev}
                                    className="absolute left-0 top-[40%] -translate-y-1/2 z-30 p-2 bg-black/50 backdrop-blur-sm rounded-full border border-white/10 hover:bg-yellow-500 hover:text-black transition-all"
                                    aria-label="Anterior"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={scrollNext}
                                    className="absolute right-0 top-[40%] -translate-y-1/2 z-30 p-2 bg-black/50 backdrop-blur-sm rounded-full border border-white/10 hover:bg-yellow-500 hover:text-black transition-all"
                                    aria-label="Próximo"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </>
                        )}

                        {/* Linha Conectiva (Apenas Desktop) */}
                        {!isMobile && (
                            <div
                                className={`absolute top-[100px] lg:top-[110px] left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent z-0 
                                ${isTablet
                                        ? 'w-[85%]'
                                        : 'w-[80%] max-w-[850px]'
                                    }`}
                            >
                                {linhagem.map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"
                                        style={{
                                            left: `${(i / (linhagem.length - 1)) * 100}%`,
                                            transform: 'translate(-50%, -50%)'
                                        }}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Carousel / Grid Area */}
                        <div
                            ref={emblaRef}
                            className={`overflow-hidden w-full ${!isMobile ? 'md:overflow-visible' : ''}`}
                        >
                            <div
                                ref={containerRef}
                                className={`flex relative ${isMobile
                                    ? 'gap-4 px-4 touch-pan-x snap-x snap-mandatory'
                                    : 'justify-center gap-8 lg:gap-16'
                                    }`}
                            >
                                {linhagem.map((mestre, index) => (
                                    <div
                                        key={index}
                                        className={`mestre-card flex flex-col items-center flex-shrink-0 relative group 
                                        ${isMobile ? 'w-[70vw] sm:w-[50vw] snap-center py-4' : 'w-48 lg:w-56'}`}
                                        data-aos={!isMobile ? "fade-up" : undefined}
                                        data-aos-delay={!isMobile ? index * 100 : undefined}
                                    >
                                        {/* Container da Imagem */}
                                        <div className={`
                                            relative flex flex-col items-center mb-6 transition-transform duration-300
                                            ${!isMobile && 'group-hover:-translate-y-2'}
                                        `}>
                                            <div className={`
                                                relative rounded-full overflow-hidden border-2 transition-all duration-500
                                                ${isMobile
                                                    ? 'w-40 h-40 border-yellow-500 shadow-lg'
                                                    : 'w-48 h-48 lg:w-52 lg:h-52 border-yellow-500/50 group-hover:border-yellow-400 group-hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]'
                                                }
                                                ${selectedIndex === index && isMobile ? 'scale-110 shadow-yellow-500/20' : ''}
                                            `}>
                                                <Image
                                                    src={mestre.image}
                                                    alt={mestre.name}
                                                    fill
                                                    // ALTERAÇÃO AQUI: Removida a classe 'grayscale' condicional
                                                    className="object-cover transition-all duration-500"
                                                    sizes="(max-width: 768px) 200px, 250px"
                                                    priority={index <= 1}
                                                />
                                            </div>

                                            {/* Ano/Role Tag */}
                                            {mestre.role && (
                                                <div className="absolute -bottom-3 bg-gray-900 border border-yellow-500/30 px-3 py-1 rounded-full">
                                                    <span className="text-xs text-yellow-400 font-bold tracking-wider uppercase">
                                                        {mestre.role}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Informações */}
                                        <div className="text-center w-full px-2">
                                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                                                {mestre.name}
                                            </h3>
                                            <p className="text-gray-400 text-xs lg:text-sm leading-relaxed max-w-[220px] mx-auto">
                                                {mestre.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Paginação Mobile */}
                    {isMobile && (
                        <div className="flex justify-center items-center mt-8 space-x-2">
                            {linhagem.map((_, index) => (
                                <button
                                    key={index}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${selectedIndex === index
                                        ? 'w-8 bg-yellow-500'
                                        : 'w-2 bg-gray-700'
                                        }`}
                                    onClick={() => emblaApi?.scrollTo(index)}
                                    aria-label={`Ir para slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}