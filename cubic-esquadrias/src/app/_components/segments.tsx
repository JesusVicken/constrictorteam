'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Unidade = {
    title: string
    professors: string[]
    image: string
}

const unidades: Unidade[] = [
    {
        title: 'Constrictor Team - Sede',
        professors: [
            'Mestre Ataíde Jr.',
            'Prof. Breno Gusmão',
            'Prof. Felipe Laje',
            'Prof. Rodrigo Amaral',
        ],
        image: '/unidade.jpg',
    },
    {
        title: 'Constrictor Team - UnB',
        professors: ['Prof. Eric Medeiros'],
        image: '/unb.png',
    },
    {
        title: 'Constrictor Team - Samambaia Sul',
        professors: ['Prof. Rodolfo Sales'],
        image: '/samambaia.png',
    },
    {
        title: 'Constrictor Team - Sobradinho II',
        professors: ['Prof. Manoel Campos'],
        image: '/sobradinho.png',
    },
    {
        title: 'Constrictor Team - Lago Norte',
        professors: ['Prof. Jefferson Pedrosa'],
        image: '/lagonorte.png',
    },
    {
        title: 'Constrictor Team - Asa Norte',
        professors: ['Prof. Marcéu Peixoto'],
        image: '/asanorte.png',
    },
    {
        title: 'Constrictor Team - São Luís (MA)',
        professors: ['Prof. Marcio Neto'],
        image: '/maranhao.png',
    },
    {
        title: 'Constrictor Team - Austrália',
        professors: ['Prof. Ian Ludgero'],
        image: '/australia.png',
    },
    {
        title: 'Constrictor Team - Formosa (GO)',
        professors: ['Prof. —'],
        image: '/formosa.png',
    },
]

export default function Segments() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: false,
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
        <section className="py-20 bg-black text-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Cabeçalho */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                        Unidades Constrictor Team
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                        Presentes no Brasil e no mundo, nossas unidades seguem a mesma filosofia:
                        técnica, respeito e evolução constante.
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative" data-aos="fade-up" data-aos-delay="200">
                    {/* Botões de navegação */}
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
                                            ? 'border-gray-500 bg-zinc-800/90'
                                            : 'border-zinc-700 bg-zinc-900'
                                        }`}
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
                                        <div className="text-gray-300 text-sm sm:text-base text-center italic tracking-wide font-medium space-y-1">
                                            {unidade.professors.map((prof, i) => (
                                                <p key={i}>{prof}</p>
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
