'use client'

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr"
import AOS from 'aos'
import 'aos/dist/aos.css'
import gsap from 'gsap'

export default function Hero() {
    const mobileImageRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out',
        })
    }, [])

    useEffect(() => {
        const imageElement = mobileImageRef.current;
        if (!imageElement) return;

        const mediaQuery = window.matchMedia('(min-width: 768px)');

        const setupAnimation = () => {
            if (mediaQuery.matches) {
                gsap.killTweensOf(imageElement);
                gsap.set(imageElement, { x: '0%', scale: 1 });
            } else {
                gsap.set(imageElement, { scale: 1.2, x: '10%', y: '0%' });
                gsap.to(imageElement, {
                    x: '-10%',
                    duration: 10,
                    ease: "sine.inOut",
                    repeat: -1,
                    yoyo: true,
                });
            }
        };

        setupAnimation();
        mediaQuery.addListener(setupAnimation);

        return () => {
            mediaQuery.removeListener(setupAnimation);
            gsap.killTweensOf(imageElement);
        };
    }, []);

    return (
        // Mantive a altura de 80vh para mobile, para o conteúdo ter espaço
        <section className="relative w-full h-[80vh] sm:h-[80vh] md:h-[90vh] lg:h-[95vh] overflow-hidden">

            {/* --- IMAGEM PARA MOBILE (COM ANIMAÇÃO GSAP) --- */}
            <div className="absolute inset-0 w-full h-full md:hidden">
                <Image
                    ref={mobileImageRef}
                    src="/backg.png"
                    alt="Equipe Constrictor"
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                    priority
                    quality={100} // Qualidade máxima
                />
            </div>

            {/* --- IMAGEM PARA DESKTOP (COM HOVER E AOS) --- */}
            <div className="absolute inset-0 w-full h-full hidden md:block">
                <Image
                    src="/constrictor.webp"
                    alt="Equipe Constrictor"
                    fill
                    sizes="100vw"
                    className="object-cover object-[center_30%] md:object-center transition-transform duration-700 ease-out hover:scale-105"
                    priority
                    quality={100} // Qualidade máxima
                    data-aos="zoom-out"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* --- CONTEÚDO (AJUSTADO PARA DESKTOP E MOBILE) --- */}
            <div
                className="relative z-10 container mx-auto h-full flex flex-col justify-end px-6 sm:px-8 md:px-10 lg:px-12 
                           pb-8 md:pb-24" // <-- MUDANÇA 1: Alinha ao final (justify-end) e dá mais padding no desktop (md:pb-24)
            >
                <div
                    className="max-w-2xl text-white space-y-5 
                               flex flex-col items-center md:items-start" // <-- MUDANÇA 2: Centraliza no mobile, alinha à esquerda no desktop
                    data-aos="fade-up"
                >
                    <p
                        className="text-base sm:text-lg md:text-xl opacity-95 max-w-md sm:max-w-lg leading-relaxed 
                                   text-center md:text-left" // <-- MUDANÇA 2 (cont.): Centraliza o texto no mobile
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
                    // O botão já será centralizado por causa do 'items-center' no 'div' pai
                    >
                        <WhatsappLogoIcon className="w-6 h-6 sm:w-7 sm:h-7" weight="fill" />
                        <span>Agendar aula experimental</span>
                    </a>
                </div>
            </div>
        </section>
    )
}