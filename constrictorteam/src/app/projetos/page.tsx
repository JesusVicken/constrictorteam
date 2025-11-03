'use client'

import { useEffect, useRef, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Play, Clock, Users, Target } from '@phosphor-icons/react/dist/ssr'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Registrar o plugin do GSAP
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

// Dados dos horários estruturados para facilitar a renderização
const scheduleData = [
    {
        day: 'Segunda, Quarta e Sexta',
        classes: [
            { time: '11:30 - 12:40', activity: 'LUTA LIVRE', instructor: 'ATAIDE' },
            { time: '12:40 - 13:40', activity: 'JIU JITSU', instructor: 'ATAIDE' },
            { time: '19:30 - 21:00', activity: 'JIU JITSU', instructor: 'BRENO' },
        ],
    },
    {
        day: 'Segunda, Quarta e Sexta (Kids)',
        classes: [
            { time: '18:30 - 19:30', activity: 'JIU JITSU', instructor: 'BRENO' },
        ],
    },
    {
        day: 'Terça e Quinta',
        classes: [
            { time: '6:45 - 7:45', activity: 'JIU JITSU', instructor: 'FELIPE FERRUGEM' },
            { time: '12:30 - 13:30', activity: 'MUAY THAI', instructor: 'TREINADOR TOCO' },
            { time: '19:30 - 21:00', activity: 'JIU JITSU', instructor: 'CARRANCA' },
        ],
    },
    {
        day: 'Sábado',
        classes: [
            { time: '8:30 - 10:00', activity: 'OLD SCHOOL JIU JITSU', instructor: null },
            { time: '10:00 - 11:00', activity: 'YOGA', instructor: 'JOANA ALVES' },
            { time: '11:00 - 12:30', activity: 'OPEN MAT JIU-JITSU', instructor: null },
            { time: '12:30 - 13:30', activity: 'MUAY THAI', instructor: 'TREINADOR TOCO' },
        ],
    },
]

export default function HorariosPage() {
    const [isMobile, setIsMobile] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)
    const scheduleRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)

        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
        })

        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // GSAP Animations
    useEffect(() => {
        if (!scheduleRef.current || isMobile) return

        const ctx = gsap.context(() => {
            // Floating animation for cards
            gsap.to('.schedule-card', {
                y: -10,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.1
            })

            // Scale animation on scroll
            gsap.fromTo('.schedule-card',
                {
                    scale: 0.9,
                    opacity: 0.8
                },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: scheduleRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        scrub: 1
                    }
                }
            )

        }, scheduleRef)

        return () => ctx.revert()
    }, [isMobile])

    return (
        <>
            {/* Seção Hero com Vídeo de Fundo */}
            <section className="relative w-full min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden">
                {/* Vídeo de fundo */}
                <video
                    ref={videoRef}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="/bgcobra3.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>

                {/* Overlay gradiente para melhor contraste */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>

                {/* Conteúdo Hero */}
                <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                    <div className="mb-6" data-aos="fade-down">
                        <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full mb-6"></div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Horários de Treinos
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-2xl text-yellow-400 font-semibold mb-2">
                            Constrictor Team
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                        <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed">
                            Confira nossa grade de horários completa. Temos turmas para todos os
                            níveis, do iniciante ao avançado, além de turmas kids.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 max-w-4xl mx-auto mt-12" data-aos="fade-up" data-aos-delay="400">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Clock className="w-6 h-6 text-yellow-500" />
                            </div>
                            <p className="text-2xl lg:text-3xl font-bold text-white">19</p>
                            <p className="text-sm text-gray-300">Aulas Semanais</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Users className="w-6 h-6 text-yellow-500" />
                            </div>
                            <p className="text-2xl lg:text-3xl font-bold text-white">4</p>
                            <p className="text-sm text-gray-300">Instrutores</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Target className="w-6 h-6 text-yellow-500" />
                            </div>
                            <p className="text-2xl lg:text-3xl font-bold text-white">5</p>
                            <p className="text-sm text-gray-300">Modalidades</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Play className="w-6 h-6 text-yellow-500" />
                            </div>
                            <p className="text-2xl lg:text-3xl font-bold text-white">7</p>
                            <p className="text-sm text-gray-300">Dias/Semana</p>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce" data-aos="fade-up" data-aos-delay="600">
                    <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-yellow-500 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* Grade de Horários - TEMA DARK */}
            <section ref={scheduleRef} className="relative py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2px, transparent 0)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                            Grade de Horários
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Escolha o melhor horário para sua rotina
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
                        {scheduleData.map((dayGroup, index) => (
                            <div
                                key={dayGroup.day}
                                className="schedule-card bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-700/50 hover:border-yellow-500/50 shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700/50">
                                    <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-yellow-500" />
                                    </div>
                                    <h2 className="text-xl lg:text-2xl font-bold text-white">
                                        {dayGroup.day}
                                    </h2>
                                </div>

                                <ul className="space-y-4">
                                    {dayGroup.classes.map((classe, classIndex) => (
                                        <li
                                            key={classe.time + classe.activity}
                                            className="flex justify-between items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-700/50 to-gray-800/50 hover:from-yellow-500/10 hover:to-gray-800/50 transition-all duration-300 border border-gray-600/50 hover:border-yellow-500/30"
                                            data-aos="fade-in"
                                            data-aos-delay={(index * 100) + (classIndex * 50)}
                                        >
                                            {/* Horário */}
                                            <div className="flex-1">
                                                <span className="block text-lg font-bold text-white mb-1">
                                                    {classe.time}
                                                </span>
                                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${classe.activity === 'JIU JITSU'
                                                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                                                        : classe.activity === 'LUTA LIVRE'
                                                            ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                                                            : classe.activity === 'MUAY THAI'
                                                                ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                                                                : classe.activity === 'YOGA'
                                                                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                                                                    : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                                                    }`}>
                                                    {classe.activity}
                                                </span>
                                            </div>

                                            {/* Instrutor */}
                                            <div className="text-right">
                                                {classe.instructor ? (
                                                    <div>
                                                        <p className="font-semibold text-white text-sm lg:text-base">
                                                            {classe.instructor}
                                                        </p>
                                                        <p className="text-xs text-gray-400 mt-1">
                                                            Instrutor
                                                        </p>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <p className="font-semibold text-gray-400 text-sm lg:text-base">
                                                            Livre
                                                        </p>
                                                        <p className="text-xs text-gray-500 mt-1">
                                                            Prática
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Informações Adicionais - TEMA DARK */}
                    <div className="mt-16 lg:mt-20 max-w-4xl mx-auto" data-aos="fade-up">
                        <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-yellow-500/30">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                                <div>
                                    <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <Users className="w-6 h-6 text-yellow-500" />
                                    </div>
                                    <h4 className="font-semibold text-white mb-2">Turmas Kids</h4>
                                    <p className="text-sm text-gray-400">Aulas especiais para crianças</p>
                                </div>
                                <div>
                                    <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <Target className="w-6 h-6 text-yellow-500" />
                                    </div>
                                    <h4 className="font-semibold text-white mb-2">Todos os Níveis</h4>
                                    <p className="text-sm text-gray-400">Do iniciante ao avançado</p>
                                </div>
                                <div>
                                    <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <Clock className="w-6 h-6 text-yellow-500" />
                                    </div>
                                    <h4 className="font-semibold text-white mb-2">Flexibilidade</h4>
                                    <p className="text-sm text-gray-400">Horários variados</p>
                                </div>
                                <div>
                                    <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <Play className="w-6 h-6 text-yellow-500" />
                                    </div>
                                    <h4 className="font-semibold text-white mb-2">Aula Experimental</h4>
                                    <p className="text-sm text-gray-400">Agende sua primeira aula</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}