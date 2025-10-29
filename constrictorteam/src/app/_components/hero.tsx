'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr"
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
        <section className="relative w-full h-[85vh] sm:h-[80vh] md:h-[90vh] lg:h-[95vh] overflow-hidden">
            {/* Imagem de fundo responsiva e otimizada */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/constrictor.webp"
                    alt="Equipe Constrictor"
                    fill
                    sizes="100vw"
                    className="object-cover object-[center_30%] md:object-center transition-transform duration-700 ease-out hover:scale-105"
                    priority
                    quality={100}
                    data-aos="zoom-out"
                />
            </div>

            {/* Overlay com gradiente mais moderno */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Conteúdo */}
            <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 sm:px-8 md:px-10 lg:px-12">
                <div
                    className="max-w-2xl text-white space-y-5"
                    data-aos="fade-up"
                >
                    {/* <h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-lg"
                        data-aos="fade-right"
                        data-aos-delay="300"
                    >
                        Constrictor Team
                    </h1> */}

                    <p
                        className="text-base sm:text-lg md:text-xl opacity-95 max-w-md sm:max-w-lg leading-relaxed"
                        data-aos="fade-right"
                        data-aos-delay="500"
                    >
                        Venha fazer parte da equipe mais conceituada de Brasília.
                    </p>

                    <a
                        href="https://wa.me/556191627171?text=Olá, vim pelo site e gostaria de solicitar uma aula experimental."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-green-500/50"
                        data-aos="fade-up"
                        data-aos-delay="700"
                    >
                        <WhatsappLogoIcon className="w-6 h-6 sm:w-7 sm:h-7" weight="fill" />
                        <span>Agendar aula experimental</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
