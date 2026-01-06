


'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { InstagramLogo } from '@phosphor-icons/react'

type Unidade = {
    title: string
    professors: { name: string; instagram?: string }[]
    image: string
}

const unidades: Unidade[] = [
    {
        title: 'Constrictor Team - Sede',
        professors: [
            {
                name: 'Mestre Ataíde Jr.',
                instagram: 'https://www.instagram.com/ataide_ludgero_jr/',
            },
            {
                name: 'Prof. Breno Gusmão',
                instagram: 'https://www.instagram.com/brenogusmao/',
            },
            {
                name: 'Prof. Felipe Laje',
                instagram: 'https://www.instagram.com/lagecfelipe/',
            },
            {
                name: 'Prof. Rodrigo Amaral',
                instagram: 'https://www.instagram.com/__rodrigoamaral/',
            },
        ],
        image: '/unidade.jpg',
    },
    {
        title: 'Constrictor Team - UnB',
        professors: [
            {
                name: 'Prof. Eric Medeiros',
                instagram: 'https://www.instagram.com/constrictorteam.unb/',
            },
        ],
        image: '/unb.png',
    },
    {
        title: 'Constrictor Team - Ministério da Justiça e Segurança Pública',
        professors: [
            {
                name: 'Prof. Glauco Leite',
                instagram: 'https://www.instagram.com/jiujitsu.mjsp?igsh=b3hscG5oMm44cnVy',
            },
        ],
        image: '/ministerio.png',
    },
    {
        title: 'Constrictor Team - Samambaia Sul',
        professors: [
            {
                name: 'Prof. Rodolfo Sales',
                instagram: 'https://www.instagram.com/constrictorteam.samambaia.sul/',
            },
        ],
        image: '/samambaia.png',
    },
    {
        title: 'Constrictor Team - Samambaia Un. II',
        professors: [
            {
                name: 'Prof. Eron de Castro',
                instagram: 'https://www.instagram.com/constrictorteam_samambaia/',
            },
        ],
        image: '/samambaia.png',
    },
    {
        title: 'Constrictor Team - Sobradinho',
        professors: [{ name: 'Prof. Manoel Campos' }],
        image: '/sobradinho1.png',
    },
    {
        title: 'Constrictor Team - Lago Norte',
        professors: [{
            name: 'Prof. Jefferson Pedrosa',
            instagram: 'https://www.instagram.com/constrictorteam_lagonorte/',
        }],
        image: '/lagonorte.png',
    },
    {
        title: 'Constrictor Team - São Luís (MA)',
        professors: [{ name: 'Prof. Marcio Neto' }],
        image: '/maranhao.png',
    },
    {
        title: 'Constrictor Team - Austrália',
        professors: [
            {
                name: 'Prof. Ian Ludgero',
                instagram: 'https://www.instagram.com/constrictorteam.australia/',
            },
        ],
        image: '/australia.png',
    },
    {
        title: 'Constrictor Team - Formosa (GO)',
        professors: [{ name: 'Prof. —' }],
        image: '/formosa.png',
    },
    {
        title: 'Constrictor Team - Guajiru (CE)',
        professors: [{ name: 'Prof. Fernando Farias' }],
        image: '/guajiru.png',
    },
]


export default function Segments() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: false, // 🔁 Deixei o carrossel contínuo
            align: 'center',
            skipSnaps: false,
        },
        [
            Autoplay({
                delay: 4500,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
            }),
        ]
    )

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

    return (
        <section className="py-20 text-white relative overflow-hidden">
            {/* Plano de fundo */}
            <Image
                src="/cobra.png"
                alt="Plano de fundo da Constrictor Team"
                fill
                className="object-cover z-0"
                quality={75}
                priority
            />

            {/* Overlay escuro */}
            <div className="absolute inset-0 bg-black/70 z-10" />

            {/* Conteúdo */}
            <div className="container mx-auto px-4 relative z-20">
                {/* Cabeçalho */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                        Unidades e Filiais Constrictor Team
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                        Presentes no Brasil e no mundo, nossas unidades seguem a mesma filosofia: técnica, respeito e evolução constante.
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative" data-aos="fade-up" data-aos-delay="200">
                    {/* Botões */}
                    <button
                        onClick={scrollPrev}
                        className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-[-1.5rem] z-20 p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="h-6 w-6 text-white" />
                    </button>

                    <button
                        onClick={scrollNext}
                        className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-[-1.5rem] z-20 p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="h-6 w-6 text-white" />
                    </button>

                    {/* Slides */}
                    <div ref={emblaRef} className="overflow-hidden">
                        <div className="flex gap-6 px-6">
                            {unidades.map((unidade, index) => (
                                <Card
                                    key={index}
                                    className={`scroll-ml-6 scroll-snap-start min-w-[92%] sm:min-w-[340px] max-w-sm 
                                        rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition-transform duration-300
                                        border ${unidade.title.includes('Sede')
                                            ? 'border-yellow-500 bg-zinc-800/90'
                                            : 'border-zinc-700 bg-zinc-900/95'}
                                        ${unidade.title.includes('Sede') ? 'order-first sm:order-none' : ''}
                                    `}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    {/* Imagem */}
                                    <div className="relative w-full h-[340px] sm:h-[280px] flex items-center justify-center bg-zinc-950 overflow-hidden">
                                        <Image
                                            src={unidade.image}
                                            alt={unidade.title}
                                            fill
                                            className="object-contain hover:scale-105 transition-transform duration-700 ease-out"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>

                                    {/* Título */}
                                    <CardHeader className="text-center mt-4 px-4">
                                        <CardTitle className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                                            {unidade.title}
                                        </CardTitle>
                                    </CardHeader>

                                    {/* Professores */}
                                    <CardContent className="px-5 pb-6">
                                        <div className="text-gray-300 text-sm sm:text-base text-center italic tracking-wide font-medium space-y-2">
                                            {unidade.professors.map((prof, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center justify-center gap-2 group"
                                                >
                                                    <p>{prof.name}</p>
                                                    {prof.instagram && (
                                                        <a
                                                            href={prof.instagram}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-gray-400 group-hover:text-pink-500 transition-colors"
                                                            aria-label={`Instagram de ${prof.name}`}
                                                        >
                                                            <InstagramLogo
                                                                size={20}
                                                                weight="fill"
                                                                className="transition-transform duration-300 group-hover:scale-110"
                                                            />
                                                        </a>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
